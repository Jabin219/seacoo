/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Coupons', {
		comment: { type: 'text' }
	})
}

exports.down = pgm => {}
