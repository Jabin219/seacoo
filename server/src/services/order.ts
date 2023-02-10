import { Coupon, Product, Address, Order, Option } from '../models'
import { DOMAINS, PROMOTION_WAY, TAX_CA } from '../constant'
import { ORDER_QUERIES, PRODUCT_QUERIES } from './queries'
import query from './db'
import moment from 'moment'
import { getExchangeRate } from './ottPay'

const handleDiscount = (
	subtotal: number,
	tax: number,
	coupon: Coupon,
	domain: DOMAINS
) => {
	return new Promise<{ discount: number; taxAfterDiscount: number }>(
		async (resolve, reject) => {
			let discount = 0
			let taxAfterDiscount = tax
			const currentTime = new Date()
			const today = moment.utc(currentTime).format()
			const couponResult = await query(ORDER_QUERIES.FIND_COUPON, [
				coupon.id,
				today,
				domain
			])
			const checkedCoupon = couponResult.data[0]
			if (checkedCoupon && checkedCoupon.numberOfUse > 0) {
				if (checkedCoupon.promotion === PROMOTION_WAY.DISCOUNT) {
					discount = subtotal * ((100 - coupon.discount) / 100)
					taxAfterDiscount = tax * (coupon.discount / 100)
				} else if (checkedCoupon.promotion === PROMOTION_WAY.FIXED_PRICE) {
					discount = coupon.fixedPrice
				} else {
					discount = 0
				}
			} else {
				discount = 0
			}
			resolve({ discount, taxAfterDiscount })
		}
	)
}

const handleOrderCalculate = async (
	products: Product[],
	taxRate: number,
	coupon?: Coupon,
	address?: Address,
	domain?: DOMAINS
) => {
	const queryList: any = []
	products.forEach((product: Product) => {
		const getPriceResult = query(PRODUCT_QUERIES.RETRIEVE_ORDER_PRODUCT, [
			product.selectedOption?.id,
			product.id
		])
		queryList.push(getPriceResult)
	})
	const retrievedResult = await Promise.all(queryList)
	let subtotal = 0
	let tax = 0
	const productsFormated: Product[] = []
	retrievedResult.forEach((item: any) => {
		if (item.data[0]) {
			const amount = products.find(product =>
				product.selectedOption
					? (product.selectedOption as Option).id ===
					  item.data[0].selectedOption
					: product.id === item.data[0].id
			).amount
			item.data[0].amount = amount
			if (item.data[0].taxable) {
				tax += Number(item.data[0].price) * amount * taxRate
			}
			productsFormated.push(item.data[0])
			subtotal += Number(item.data[0].price) * amount
		} else {
			return false
		}
	})

	let { taxAfterDiscount, discount } = {
		taxAfterDiscount: tax,
		discount: 0
	}
	if (coupon) {
		const result = await handleDiscount(subtotal, tax, coupon, domain)
		taxAfterDiscount = result.taxAfterDiscount
		discount = result.discount
	}

	let shippingFee = 0
	const expectShippingFee = await getShippingFee(address)
	if (address.country === 'CA') {
		if (subtotal - discount < 100) {
			shippingFee = expectShippingFee
		} else {
			shippingFee = 0
		}
	} else if (address.country === 'USA') {
		if (subtotal - discount < 100) {
			shippingFee = expectShippingFee
		} else if (subtotal - discount < 200) {
			shippingFee = expectShippingFee - 10
		} else {
			shippingFee = 0
		}
	} else if (address.country === 'CN') {
		const exchangeRate = await getExchangeRate()
		if ((subtotal - discount) * exchangeRate < 200) {
			shippingFee = expectShippingFee
		} else {
			shippingFee = 0
		}
	}
	if (shippingFee) {
		tax += shippingFee * taxRate
		taxAfterDiscount += shippingFee * taxRate
	}
	return {
		subtotal: Number(subtotal.toFixed(2)),
		discount: Number(discount.toFixed(2) || discount),
		tax: Number(tax.toFixed(2)),
		taxAfterDiscount: Number(taxAfterDiscount.toFixed(2)),
		shippingFee: Number(shippingFee.toFixed(2)),
		totalPrice: Number(
			(subtotal - discount + shippingFee + taxAfterDiscount).toFixed(2)
		),
		productsFormated: productsFormated
	}
}
const getShippingFee = async (address: Address) => {
	switch (address.country) {
		case 'CA':
			return 10
		case 'USA':
			return 20
		case 'CN':
			const exchangeRate = await getExchangeRate()
			return 20 / exchangeRate
		default:
			return 30
	}
}
const getSaleTax = (address: Address) => {
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

const storeAddress = async (
	shippingAddress: Address,
	billingAsShipping: boolean,
	billingAddress?: Address
) => {
	const addressResult = await query(ORDER_QUERIES.NEW_ADDRESS, [
		shippingAddress.country,
		shippingAddress.province,
		shippingAddress.city,
		shippingAddress.street,
		shippingAddress.postalCode,
		shippingAddress.recipient,
		shippingAddress.phone
	])
	let billingAddressID = addressResult.data[0].id
	if (!billingAsShipping && billingAddress) {
		const billingAddressResult = await query(ORDER_QUERIES.NEW_ADDRESS, [
			billingAddress.country,
			billingAddress.province,
			billingAddress.city,
			billingAddress.street,
			billingAddress.postalCode,
			billingAddress.recipient,
			billingAddress.phone
		])
		billingAddressID = billingAddressResult.data[0].id
	} else if (billingAsShipping) {
		billingAddressID = addressResult.data[0].id
	} else {
		return false
	}
	return { shippingAddressID: addressResult.data[0].id, billingAddressID }
}
const getOrder = async (id: string) => {
	try {
		const orderResult = await query(
			ORDER_QUERIES.GET_ORDER_WITH_DETAILS_BY_ID,
			[id]
		)
		if (orderResult.data.length > 0) {
			return orderResult.data[0]
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
const storeOrder = async (order: Order) => {
	try {
		const storeAddressResult = await storeAddress(order.addressShipping, true)
		if (!storeAddressResult) {
			return false
		} else {
			const orderResult = await query(ORDER_QUERIES.NEW_ORDER, [
				order.orderNumber,
				order.subtotal,
				order.taxAfterDiscount,
				order.coupon ? order.coupon.id : undefined,
				order.shippingFee,
				order.totalPrice,
				order.email,
				storeAddressResult.shippingAddressID,
				storeAddressResult.billingAddressID,
				order.paymentMethod,
				order.domain
			])
			const queryList: any = []
			order.products.forEach((product: Product) => {
				queryList.push(
					query(ORDER_QUERIES.NEW_ORDER_DETAIL, [
						orderResult.data[0].id,
						Number(product.price),
						product.id,
						product.amount,
						product.selectedOption
					])
				)
			})
			Promise.all(queryList)
			return {
				id: orderResult.data[0].id as string,
				createdAt: moment(orderResult.data[0].createdAt).format(
					'YYYY-MM-DD hh:mm'
				),
				orderNumber: order.orderNumber,
				email: order.email
			}
		}
	} catch (error) {
		return error
	}
}

export {
	handleOrderCalculate,
	handleDiscount,
	getSaleTax,
	storeAddress,
	storeOrder,
	getOrder
}
