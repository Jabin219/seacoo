import { Domains, PromotionWays } from 'constant'
import { TAX_CA } from 'constant/canadaTax'
import { Address, Coupon } from 'models'
import { applyCoupon } from 'api'

export const getShippingFee = (address: Address, exchangeRate) => {
	switch (address.country) {
		case 'CA':
			return 10
		case 'USA':
			return 20
		case 'CN':
			// eslint-disable-next-line
			return 20 / exchangeRate
		default:
			return 30
	}
}

export const getSaleTax = (address: Address) => {
	if (address.country === 'CA') {
		const provincesCA = Object.keys(TAX_CA)
		const keyIndex = provincesCA.indexOf(address.province)
		if (keyIndex === -1) {
			return 0
		} else {
			const taxesCA = Object.values(TAX_CA)
			let taxRate = taxesCA[keyIndex].taxes[0].tax
			taxRate += taxesCA[keyIndex].taxes[1] ? taxesCA[keyIndex].taxes[1].tax : 0
			return taxRate
		}
	}
	return 0
}

export const calculateShippingFee = async (
	order,
	setOrder,
	discountPrice,
	exchangeRate
) => {
	let currentShippingFee = 0
	const expectShippingFee = getShippingFee(order.addressShipping, exchangeRate)
	if (order.addressShipping.country === 'CA') {
		if (order.subtotal - discountPrice < 100) {
			currentShippingFee = expectShippingFee
		} else {
			currentShippingFee = 0
		}
	} else if (order.addressShipping.country === 'USA') {
		if (order.subtotal - discountPrice < 100) {
			currentShippingFee = expectShippingFee
		} else if (order.subtotal - discountPrice < 200) {
			currentShippingFee = expectShippingFee - 10
		} else {
			currentShippingFee = 0
		}
	} else if (order.addressShipping.country === 'CN') {
		if ((order.subtotal - discountPrice) * Number(exchangeRate) < 200) {
			currentShippingFee = expectShippingFee
		} else {
			currentShippingFee = 0
		}
	}
	setOrder({
		...order,
		shippingFee: currentShippingFee
	})
	return currentShippingFee
}

export const calculateTax = async (
	order,
	discountPrice,
	setShippingFee,
	setOrder,
	exchangeRate
) => {
	let currentTax = 0
	const taxRate = getSaleTax(order.addressShipping)
	order.products.forEach(product => {
		if (product.taxable) {
			if (product.selectedOption) {
				if (order.coupon) {
					currentTax +=
						product.selectedOption.price *
						product.amount *
						(((order as any).coupon.discount as number) / 100) *
						taxRate
				} else {
					currentTax += product.selectedOption.price * product.amount * taxRate
				}
			} else {
				if (order.coupon) {
					currentTax +=
						product.price *
						product.amount *
						(((order as any).coupon.discount as number) / 100) *
						taxRate
				} else {
					currentTax += product.price * product.amount * taxRate
				}
			}
		}
	})
	const shippingFee = await calculateShippingFee(
		order,
		setOrder,
		discountPrice,
		exchangeRate
	)
	if (shippingFee !== 0) {
		currentTax += shippingFee * taxRate
	}
	setShippingFee(shippingFee)
	setOrder({
		...order,
		tax: currentTax,
		shippingFee: shippingFee,
		totalPrice: order.subtotal - discountPrice + shippingFee + currentTax
	})
}

export const getPromote = async (
	code: string,
	setError,
	setOrder,
	order,
	setDiscountPrice,
	setIsApplied
) => {
	const res = await applyCoupon(
		code.toUpperCase(),
		process.env.REACT_APP_DOMAIN_NAME as Domains
	)
	if (res.data.status === 'success') {
		const coupon: Coupon = res.data.data
		const today = new Date()
		const couponExpireTime = new Date(coupon.expireTime)
		if (coupon.numberOfUse > 0 && today < couponExpireTime) {
			setOrder({
				...order,
				coupon: coupon
			})
			switch (coupon.promotion) {
				case PromotionWays.DISCOUNT:
					setDiscountPrice(
						(order.subtotal as number) *
							((100 - (coupon.discount as number)) / 100)
					)
					break
				case PromotionWays.FIXED_PRICE:
					setDiscountPrice(coupon.fixedPrice as number)
					break
				default:
					setDiscountPrice(0)
			}
			setIsApplied(true)
			return true
		} else {
			setError(true)
			return false
		}
	} else {
		setError(true)
		return false
	}
}
