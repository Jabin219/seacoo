import { Router, Request, Response } from 'express'
const route = Router()
import { RESPONSE_MESSAGE } from '../../constant'
import query from '../../services/db'
import {
	MAIL_QUERIES,
	SUBSCRIPTION_QUERIES,
	ORDER_QUERIES
} from '../../services/queries'
import {
	handleSendNewMessage,
	handleSendNewRsglMessage,
	handleSendNewSubscriptionMail
} from '../../services/mail'
import { createRandomCoupon } from '../../services/coupon'

export default (app: Router) => {
	app.use('/general', route)

	route.post('/message', async (req: Request, res: Response) => {
		const { message } = req.body
		query(MAIL_QUERIES.NEW_MAIL, [message.name, message.email, message.content])
		handleSendNewMessage(message)
		res.status(200).json({
			status: RESPONSE_MESSAGE.SUCCESS
		})
	})

	route.post('/new_subscription', async (req: Request, res: Response) => {
		const { email } = req.body
		const randomCoupon = createRandomCoupon()
		const today = new Date()
		const todayAfter30Days = new Date(today)
		todayAfter30Days.setDate(today.getDate() + 30)
		try {
			const checkExistedEmailResult = await query(
				SUBSCRIPTION_QUERIES.CHECK_EXISTED_EMAIL,
				[email]
			)
			if (!checkExistedEmailResult.data[0]) {
				const createSubscriptionResult = await query(
					SUBSCRIPTION_QUERIES.NEW_SUBSCRIPTION,
					[email]
				)
				const createCouponResult = await query(ORDER_QUERIES.CREATE_COUPON, [
					randomCoupon,
					'discount',
					'90',
					'enabled',
					'subscription coupon',
					'1',
					todayAfter30Days.toUTCString(),
					today.toUTCString(),
					'seacoo'
				])
				const randomCouponCode = createCouponResult.data[0].code
				query(SUBSCRIPTION_QUERIES.ADD_COUPON, [
					createSubscriptionResult.data[0].id,
					randomCouponCode
				])
				handleSendNewSubscriptionMail(randomCouponCode, email)
				res.status(200).json({
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.status(200).json({
					status: 'existed email'
				})
			}
		} catch (error) {
			console.error(error)
			res.json({ status: RESPONSE_MESSAGE.ERROR, data: error })
		}
	})

	route.post('/rsgl/message', async (req: Request, res: Response) => {
		const { message } = req.body

		handleSendNewRsglMessage(message)
		res.status(200).json({
			status: RESPONSE_MESSAGE.SUCCESS
		})
	})
}
