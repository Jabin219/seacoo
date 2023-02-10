/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createType('payment_method', ['Stripe', 'PayPal', 'WeChatPay', 'AliPay'])
	pgm.addColumns('Orders', {
		paymentMethod: { type: 'payment_method' }
	})
}

exports.down = pgm => {}
