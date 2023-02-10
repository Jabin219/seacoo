import { PAYMENT_METHOD, RESPONSE_MESSAGE } from '../../constant'
import { Router, Request, Response } from 'express'
import query from '../../services/db'
import { ORDER_QUERIES } from '../../services/queries'
import {
	createPaymentIntentSeacoo,
	createPaymentIntentBeche,
	stripeBeche,
	stripeSeacoo
} from '../../services/stripe'
import { Order } from '../../models'
import bodyParser from 'body-parser'
import Stripe from 'stripe'
import { webhookResultHandler } from '../../utils/stripeWebhookHandler'
const route = Router()

export default (app: Router) => {
	app.use('/orders/stripe', route)
	route.post(
		'/create_order_and_submit',
		async (req: Request, res: Response) => {
			const { orderId } = req.body
			try {
				const storeOrderResult = await query(
					ORDER_QUERIES.GET_STORE_ORDER_RESULT,
					[orderId]
				)
				const storedOrder = storeOrderResult.data[0]
				if (!storedOrder.id) {
					res.json({ status: RESPONSE_MESSAGE.ERROR })
					return
				}
				// stripe intent
				const intent =
					storedOrder.domain == 'beche'
						? await createPaymentIntentBeche(storedOrder)
						: await createPaymentIntentSeacoo(storedOrder)
				if (!intent.client_secret) {
					res.json({ status: RESPONSE_MESSAGE.ERROR })
					return
				}
				query(ORDER_QUERIES.UPDATE_PAYMENT_METHOD, [
					storedOrder.id,
					PAYMENT_METHOD.STRIPE
				])
				res.json({
					status: RESPONSE_MESSAGE.SUCCESS,
					data: {
						order: {
							orderNumber: storedOrder.orderNumber
						} as Order,
						clientSecret: intent.client_secret
					}
				})
			} catch (error) {
				res.json({ status: RESPONSE_MESSAGE.ERROR, data: error })
			}
		}
	)

	route.post(
		'/webhook/seacoo',
		bodyParser.raw({ type: 'application/json' }),
		async (req: Request, res: Response) => {
			const sig = req.headers['stripe-signature']
			try {
				const event: Stripe.Event = stripeSeacoo.webhooks.constructEvent(
					req.body,
					sig,
					process.env.STRIPE_WEBHOOK_SECRET
				)
				webhookResultHandler(event)
			} catch (err) {
				console.error(err)
				res.status(400).send(`Webhook Error: ${err.message}`)
				return
			}
			// Return a response to acknowledge receipt of the event
			res.json({ received: true })
		}
	)

	route.post(
		'/webhook/beche',
		bodyParser.raw({ type: 'application/json' }),
		async (req: Request, res: Response) => {
			const sig = req.headers['stripe-signature']
			try {
				const event: Stripe.Event = stripeBeche.webhooks.constructEvent(
					req.body,
					sig,
					process.env.STRIPE_WEBHOOK_SECRET_BECHE
				)
				webhookResultHandler(event)
			} catch (err) {
				console.error(err)
				res.status(400).send(`Webhook Error: ${err.message}`)
				return
			}
			// Return a response to acknowledge receipt of the event
			res.json({ received: true })
		}
	)
}
