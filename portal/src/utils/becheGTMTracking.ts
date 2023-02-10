import moment from 'moment'

const updateDataLayerProductView = product => {
	window.dataLayer.push({
		event: 'productView',
		ecommerce: {
			ProductView: {
				products: [
					{
						name: product.name, // Name or ID is required.
						id: product.id, // Product ID
						price: product.price,
						brand: 'Beche',
						category: 'Supplement'
					}
				]
			},
			date: moment().format('DD/MM/YYYY hh:mm:ss')
		}
	})
}
const updateDataLayerProductAddToCart = product => {
	window.dataLayer.push({
		event: 'addToCart',
		ecommerce: {
			currencyCode: 'CAD',
			add: {
				products: [
					{
						name: product.name, // Name or ID is required.
						id: product.id, // Product ID
						price: product.price,
						brand: 'Beche',
						category: 'Supplement',
						quantity: product.amount
					}
				]
			},
			date: moment().format('DD/MM/YYYY hh:mm:ss')
		}
	})
}

const updateDataLayerProductRemoveFromCart = product => {
	window.dataLayer.push({
		event: 'removeFromCart',
		ecommerce: {
			remove: {
				products: [
					{
						name: product.name, // Name or ID is required.
						id: product.id, // Product ID
						price: product.price,
						brand: 'Beche',
						category: 'Supplement',
						quantity: product.amount
					}
				]
			},
			date: moment().format('DD/MM/YYYY hh:mm:ss')
		}
	})
}

const updateDataLayerCheckout = (order, products) => {
	window.dataLayer.push({
		event: 'checkout',
		ecommerce: {
			currencyCode: 'CAD',
			checkout: {
				actionField: { step: 1 },
				order: {
					id: order.id,
					orderNumber: order.orderNumber
				},
				products: [
					{
						name: products[0].name,
						id: products[0].id, // Product ID
						price: products[0].price,
						brand: 'Beche',
						category: 'Supplement',
						quantity: products[0].amount
					}
				],
				shippingAddress: order.addressShipping
			},
			date: moment().format('DD/MM/YYYY hh:mm:ss')
		}
	})
}

const updateDataLayerPurchase = order => {
	window.dataLayer.push({
		event: 'purchase',
		ecommerce: {
			currencyCode: 'CAD', //replace with user currency
			purchase: {
				actionField: {
					id: order.id, // Transaction ID. Required for purchases and refunds.
					revenue: order.totalPrice, // Total revenue including tax.
					tax: order.tax,
					shipping: order.shippingFee,
					coupon: order.discount ? order.coupon.code : '' // Optional fields may be omitted or set to empty string.
				},
				products: [
					{
						// List of productFieldObjects.
						name: order.products[0].name, // Name or ID is required.
						id: order.products[0].id, // Product ID
						price: order.products[0].price,
						brand: 'Beche',
						category: 'Supplement',
						quantity: order.products[0].amount
					}
				],
				shippingAddress: order.addressShipping
			},
			date: moment().format('DD/MM/YYYY hh:mm:ss')
		}
	})
}

export {
	updateDataLayerProductView,
	updateDataLayerProductAddToCart,
	updateDataLayerProductRemoveFromCart,
	updateDataLayerCheckout,
	updateDataLayerPurchase
}
