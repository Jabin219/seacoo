/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addTypeValue('payment_method', 'STRIPE')
	pgm.addTypeValue('payment_method', 'PAYPAL')
	pgm.addTypeValue('payment_method', 'WECHATPAY')
	pgm.addTypeValue('payment_method', 'ALIPAY')
}

exports.down = pgm => {}
