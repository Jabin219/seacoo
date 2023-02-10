import { Product } from 'models/index'

// init cartStorage
const cart = localStorage.getItem('cart')
export const cartStorage: Product[] = cart
	? JSON.parse(cart)
	: ([] as Product[])

export const saveCart = (cartStorage: Product[]) => {
	localStorage.setItem('cart', JSON.stringify(cartStorage))
}
export const addToCart = (cartStorage: Product[], product: Product) => {
	const findSameItemIndex: number = cartStorage.findIndex(
		(cartProduct: Product) => {
			return (
				product.selectedOption?.id === cartProduct.selectedOption?.id &&
				product.id === cartProduct.id
			)
		}
	)
	if (findSameItemIndex !== -1) {
		cartStorage[findSameItemIndex].amount += product.amount
		saveCart(cartStorage)
		return false
	} else {
		cartStorage.push(product)
		saveCart(cartStorage)
		return true
	}
}
export const removeItem = (cartStorage: Product[], item: Product) => {
	for (let i = 0; i < cartStorage.length; i++) {
		if (
			cartStorage[i].id === item.id &&
			cartStorage[i].selectedOption?.id === item.selectedOption?.id
		) {
			cartStorage.splice(i, 1)
			saveCart(cartStorage)
		}
	}
}

export const countCartTotal = (cartStorage: Product[]) => {
	const sum = cartStorage.reduce((total: number, cartItem: Product) => {
		return (
			total +
			(cartItem.selectedOption?.price || cartItem.price) *
				(cartItem.amount as number)
		)
	}, 0)
	return sum
}

export const checkSameProduct = (cartStorage: Product[], product: Product) => {
	return cartStorage.find(
		(cartItem: Product) =>
			cartItem.id === product.id &&
			cartItem.selectedOption?.id === product.selectedOption?.id
	)
}
