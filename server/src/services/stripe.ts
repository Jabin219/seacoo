// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
import { metaOrder } from '../models'

const stripeSeacoo = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeBeche = require('stripe')(process.env.STRIPE_SECRET_KEY_BECHE)

const createPaymentIntentSeacoo = (metaData: metaOrder) =>
	stripeSeacoo.paymentIntents.create({
		amount: (metaData.totalPrice * 100).toFixed(0),
		currency: 'cad',
		// Verify your integration in this guide by including this parameter
		metadata: metaData || {}
	})

const createPaymentIntentBeche = (metaData: metaOrder) => {
	return stripeBeche.paymentIntents.create({
		amount: (metaData.totalPrice * 100).toFixed(0),
		currency: 'cad',
		// Verify your integration in this guide by including this parameter
		metadata: metaData || {}
	})
}

export {
	createPaymentIntentSeacoo,
	createPaymentIntentBeche,
	stripeSeacoo,
	stripeBeche
}
