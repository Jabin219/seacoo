/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Coupons', {
		startTime: {
			type: 'timestamp without time zone',
			default: '2020-01-01 00:00:00.000000'
		}
	})
}

exports.down = pgm => {}
