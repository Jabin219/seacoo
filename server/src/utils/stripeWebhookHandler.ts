import { handleSendConfirmationEmail } from '../services/mail'
import Stripe from 'stripe'
import { ORDER_QUERIES } from '../services/queries'
import query from '../services/db'

export const webhookResultHandler = async event => {
	switch (event.type) {
		case 'payment_intent.succeeded':
			const stripeObject: Stripe.PaymentIntent = event.data
				.object as Stripe.PaymentIntent
			console.log(`💰 PaymentIntent status: ${stripeObject.status}`)

			query(ORDER_QUERIES.UPDATED_ORDER_TO_PAID, [stripeObject.metadata.id])
			const getOrderResult = await query(ORDER_QUERIES.GET_ORDER, [
				stripeObject.metadata.id
			])
			if (getOrderResult.data[0].couponID) {
				query(ORDER_QUERIES.DECREASE_COUPON_NUMBER_OF_USE, [
					getOrderResult.data[0].couponID
				])
			}
			handleSendConfirmationEmail(
				stripeObject.metadata.id,
				stripeObject.metadata.email
			)
			break
		default:
			console.log(`Unhandled event type ${event.type}`)
	}
}
