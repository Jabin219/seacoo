/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Coupons', {
		numberOfUse: {
			type: 'integer',
			notNull: true,
			default: 1
		},
		expireTime: {
			type: 'timestamp',
			notNull: true,
			default: '2021-03-26 19:57:00'
		}
	})
}

exports.down = pgm => {}
