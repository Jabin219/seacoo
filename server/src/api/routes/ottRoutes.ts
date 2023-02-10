import axios from 'axios'
import { Router, Request, Response } from 'express'
import query from '../../services/db'
import { RESPONSE_MESSAGE } from '../../constant'
import { ORDER_QUERIES } from '../../services/queries'
import { handleSendConfirmationEmail } from '../../services/mail'
import {
	decipher,
	encryptProcess,
	getExchangeRate
} from '../../services/ottPay'

const route = Router()

export default (app: Router) => {
	app.use('/orders/ott', route)
	route.post('/create_order', async (req: Request, res: Response) => {
		const { orderId, bizType } = req.body
		try {
			const storeOrderResult = await query(
				ORDER_QUERIES.GET_ORDER_WITH_DETAILS_BY_ID,
				[orderId]
			)
			const storedOrder = storeOrderResult.data[0]
			const transactionResult = await query(
				ORDER_QUERIES.CREATE_NEW_TRANSACTION,
				[orderId]
			)
			const transactionId = transactionResult.data[0].id
			// create ottPay transaction
			const ottPayload = {
				order_id: transactionId,
				operator_id: process.env.OTTPAY_OPERATOR_ID,
				amount: (storedOrder.totalPrice * 100).toFixed(0) + '',
				tip: 0 + '',
				biz_type: bizType,
				call_back_url: process.env.BASE_URL + '/orders/ott/webhook'
			}
			const encryptResult = encryptProcess(ottPayload)
			const request = {
				action: 'ACTIVEPAY',
				version: '1.0',
				merchant_id: process.env.OTTPAY_MERCHANT_ID,
				data: encryptResult.dataEncrypt,
				md5: encryptResult.md5Str
			}
			const result = await axios.post(
				'https://frontapi.ottpay.com:443/processV2',
				request
			)
			const codeUrl = JSON.parse(
				decipher(result.data.data, result.data.md5)
			).code_url
			query(ORDER_QUERIES.UPDATE_PAYMENT_METHOD, [storedOrder.id, bizType])
			res.status(200).json({
				status: RESPONSE_MESSAGE.SUCCESS,
				codeUrl: codeUrl
			})
		} catch (error) {
			res.json({ status: RESPONSE_MESSAGE.ERROR, data: error })
		}
	})

	route.get('/exchange_rate', async (req: Request, res: Response) => {
		const rate = await getExchangeRate()
		res.status(200).json({
			rate: rate
		})
	})

	route.post('/webhook', async (req: Request, res: Response) => {
		const result = req.body
		const dataResult = JSON.parse(decipher(result.data, result.md5))
		if (req.body.rsp_msg === 'success') {
			const transactionId = dataResult.order_id
			const getOrderIdResult = await query(
				ORDER_QUERIES.FIND_ORDER_BY_TRANSACTION,
				[transactionId]
			)
			const orderId = getOrderIdResult.data[0].orderID
			query(ORDER_QUERIES.UPDATED_ORDER_TO_PAID, [orderId])
			query(ORDER_QUERIES.UPDATE_TRANSACTION_TO_PAID, [transactionId])
			const getOrderResult = await query(ORDER_QUERIES.GET_ORDER, [orderId])
			if (getOrderResult.data[0].couponID) {
				query(ORDER_QUERIES.DECREASE_COUPON_NUMBER_OF_USE, [
					getOrderResult.data[0].couponID
				])
			}
			handleSendConfirmationEmail(orderId, getOrderResult.data[0].email)

			res.sendStatus(200)
		} else {
			res.send(500)
		}
	})
}
