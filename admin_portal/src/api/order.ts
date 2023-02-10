import axios from 'axios'
import { FilterOptions } from 'models'

const getAllOrders = (
	filterOptions: FilterOptions | undefined,
	page: number,
	orderNumber: string
) => {
	return axios.get('/admin/get_orders', {
		params: {
			date: filterOptions?.date?.toString(),
			status: filterOptions?.status,
			domain: filterOptions?.domain,
			page,
			orderNumber
		}
	})
}

const getUnshippedOrders = () => axios.get('/admin/unshipped_orders')

const updateShippedOrder = (
	orderId: string,
	email: string,
	shippingMethod: string,
	trackingNumber: string,
	coldChainCarrier: string,
	trackingNumberColdChain: string
) =>
	axios.post('/admin/update_shipped_order', {
		orderId,
		email,
		shippingMethod,
		trackingNumber,
		coldChainCarrier,
		trackingNumberColdChain
	})

const updateCancelledOrder = (orderId: string) =>
	axios.post('/admin/update_cancelled_order', {
		orderId
	})

export {
	getAllOrders,
	getUnshippedOrders,
	updateShippedOrder,
	updateCancelledOrder
}
