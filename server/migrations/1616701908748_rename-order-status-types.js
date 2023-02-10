/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.renameTypeValue('order_status', 'pending', 'cancelled')
	pgm.renameTypeValue('order_status', 'shipping', 'shipped')
}

exports.down = pgm => {}
