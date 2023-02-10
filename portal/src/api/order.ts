import axios from 'axios'
import { Order } from '../models'

const stripeOrder = (orderId: string) =>
	axios.post('/orders/stripe/create_order_and_submit', { orderId })

const createPayPalOrder = async (orderId: string) => {
	const res = await axios.post(
		'/orders/paypal/create_order',
		{ orderId },
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	)
	const res_data = res.data
	return { orderId: res_data.orderId, orderNumber: res_data.orderNumber }
}

const createOttPayOrder = (orderId: string, bizType: string) =>
	axios.post('/orders/ott/create_order', { orderId, bizType })

const getOttExchangeRate = () => axios.get('/orders/ott/exchange_rate')

const createAdaPayAliOrder = (orderId: string) =>
	axios.post('/orders/adapay/create_ali_order', { orderId })

const createAdaPayWxOrder = (code: string, orderId: string) =>
	axios.post('/orders/adapay/create_wx_order', { code, orderId })

const confirmPaidOrder = (orderId: string) =>
	axios.post('/orders/confirm_paid', { orderId })

const createOrder = (order: Order) =>
	axios.post('/orders/create_order', { order })

export {
	stripeOrder,
	createPayPalOrder,
	createOttPayOrder,
	confirmPaidOrder,
	createOrder,
	createAdaPayAliOrder,
	createAdaPayWxOrder,
	getOttExchangeRate
}
