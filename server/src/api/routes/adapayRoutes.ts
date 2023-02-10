import { Router, Request, Response } from 'express'
import { ORDER_QUERIES } from '../../services/queries'
import query from '../../services/db'
import { handleSendConfirmationEmail } from '../../services/mail'
import { Order } from '../../models'
import Adapay from '../../services/adapay/sdk/adapay-sdk/pay/AdaPay'
import { getWeChatOpenId, checkObject } from '../../services/adapay/Utils'
import { resolve } from 'path'
import { RESPONSE_MESSAGE } from '../../constant'

const route = Router()

export default (app: Router) => {
	app.use('/orders/adapay', route)
	const prod_mode = true
	// 设置adapay基本参数
	const adapayConfig = {} as any
	adapayConfig.debug = true
	adapayConfig.connect_timeout = 60000
	adapayConfig.log_file_path = resolve('./logs/')
	adapayConfig.log_console_enable = true
	adapayConfig.prod_mode = prod_mode
	adapayConfig.base_url = prod_mode
		? process.env.ADAPAY_BASE_URL_PRO
		: process.env.ADAPAY_BASE_URL_DEV
	adapayConfig.api_key = prod_mode
		? process.env.ADAPAY_API_LIVE_KEY
		: process.env.ADAPAY_API_TEST_KEY
	adapayConfig.private_key = process.env.ADAPAY_PRIVATE_KEY
	adapayConfig.public_key = process.env.ADAPAY_PUBLIC_KEY

	Adapay.set_config(adapayConfig)

	route.post('/create_ali_order', async (req: Request, res: Response) => {
		const { orderId } = req.body
		try {
			const storeOrderResult = await query(
				ORDER_QUERIES.GET_ORDER_WITH_DETAILS_BY_ID,
				[orderId]
			)
			const storedOrder: Order = storeOrderResult.data[0]
			const transactionResult = await query(
				ORDER_QUERIES.CREATE_NEW_TRANSACTION,
				[orderId]
			)
			const transactionId = transactionResult.data[0].id
			const paymentObj = checkObject({
				order_no: transactionId.replaceAll('-', '_'),
				app_id: process.env.ADAPAY_APP_ID,
				pay_channel: 'alipay_qr',
				pay_amt: storedOrder.totalPrice,
				goods_title: 'Seacoo Products',
				goods_desc: 'Seacoo marine food product',
				notify_url: process.env.BASE_URL + '/orders/adapay/webhook/create_order'
			})
			const result = await Adapay.Payment.create(paymentObj)
			const bizType = 'ALIPAY'
			const data = JSON.parse(result)
			query(ORDER_QUERIES.UPDATE_PAYMENT_METHOD, [storedOrder.id, bizType])
			query(ORDER_QUERIES.UPDATE_ORDER_ADAPAY_ID, [storedOrder.id, data.id])
			res.status(200).json({
				message: 'success',
				data: data,
				code: 0
			})
		} catch (error) {
			res.json({
				message: error.toString(),
				code: -1
			})
		}
	})
	route.post('/create_wx_order', async (req: Request, res: Response) => {
		const { code, orderId } = req.body
		try {
			const storeOrderResult = await query(
				ORDER_QUERIES.GET_ORDER_WITH_DETAILS_BY_ID,
				[orderId]
			)
			const storedOrder: Order = storeOrderResult.data[0]
			const transactionResult = await query(
				ORDER_QUERIES.CREATE_NEW_TRANSACTION,
				[orderId]
			)
			const transactionId = transactionResult.data[0].id
			const getOpenIdResult = await getWeChatOpenId(code)
			const resultDict = getOpenIdResult.data
			const openId = resultDict.openid
			const paymentObj = checkObject({
				order_no: transactionId.replaceAll('-', '_'),
				app_id: process.env.ADAPAY_APP_ID,
				pay_channel: 'wx_pub',
				pay_amt: storedOrder.totalPrice,
				goods_title: 'Seacoo Products',
				goods_desc: 'Seacoo marine food product',
				notify_url:
					process.env.BASE_URL + '/orders/adapay/webhook/create_order',
				expend: {
					open_id: openId
				}
			})
			const result = await Adapay.Payment.create(paymentObj)
			const bizType = 'WECHATPAY'
			const data = JSON.parse(result)
			query(ORDER_QUERIES.UPDATE_PAYMENT_METHOD, [storedOrder.id, bizType])
			query(ORDER_QUERIES.UPDATE_ORDER_ADAPAY_ID, [storedOrder.id, data.id])
			res.status(200).json({
				message: 'success',
				time: storedOrder.createdAt,
				data: data,
				code: 0
			})
		} catch (error) {
			res.json({
				message: error.toString(),
				code: -1
			})
		}
	})
	route.post('/refund', async (req: Request, res: Response) => {
		const { paymentId, orderId } = req.body
		const orderDetail = await query(ORDER_QUERIES.GET_ORDER, [orderId])
		const transactionId = await query(ORDER_QUERIES.GET_PAID_TRANSACTION_ID, [
			orderId
		])
		try {
			const refundObj = {
				payment_id: paymentId,
				refund_order_no: transactionId.data[0].id.replaceAll('-', '_'),
				refund_amt: orderDetail.data[0].totalPrice,
				notify_url: process.env.BASE_URL + '/orders/adapay/webhook/refund'
			}
			const result = await Adapay.Refund.create(refundObj)
			res.json({
				status: RESPONSE_MESSAGE.SUCCESS,
				data: result
			})
		} catch (error) {
			res.json({
				status: RESPONSE_MESSAGE.ERROR,
				message: error.toString()
			})
		}
	})
	route.post('/webhook/create_order', async (req: Request, res: Response) => {
		const result = req.body
		if (result.type === 'payment.succeeded') {
			const data = JSON.parse(result.data)
			const transactionId = data.order_no.replaceAll('_', '-')
			const orderIdResult = await query(
				ORDER_QUERIES.FIND_ORDER_BY_TRANSACTION,
				[transactionId]
			)
			const orderId = orderIdResult.data[0].orderID
			const orderResult = await query(ORDER_QUERIES.GET_ORDER, [orderId])
			const order = orderResult.data[0]
			if (order.status === 'unpaid') {
				query(ORDER_QUERIES.UPDATED_ORDER_TO_PAID, [orderId])
				query(ORDER_QUERIES.UPDATE_TRANSACTION_TO_PAID, [transactionId])
				if (order.couponID) {
					query(ORDER_QUERIES.DECREASE_COUPON_NUMBER_OF_USE, [order.couponID])
				}
				handleSendConfirmationEmail(orderId, order.email)
			}
			res.sendStatus(200)
		} else {
			res.sendStatus(500)
		}
	})
	route.post('/webhook/refund', async (req: Request, res: Response) => {
		const result = req.body
		if (result.type === 'refund.succeeded') {
			const data = JSON.parse(result.data)
			const orderResult = await query(ORDER_QUERIES.GET_ORDER_BY_ADAPAY_ID, [
				data.payment_id
			])
			query(ORDER_QUERIES.UPDATE_ORDER_TO_CANCELLED, [orderResult.data[0].id])
			res.sendStatus(200)
		} else {
			res.sendStatus(500)
		}
	})
}
