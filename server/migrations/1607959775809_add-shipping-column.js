/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Orders', {
		shippingFee: { type: 'numeric(8,2)' }
	})
}

exports.down = pgm => {}
