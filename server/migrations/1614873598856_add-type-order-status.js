/* eslint-disable camelcase */
exports.shorthands = undefined

exports.up = pgm => {
	pgm.createType('order_status', [
		'unpaid',
		'paid',
		'pending',
		'shipping',
		'delivered'
	])
	pgm.alterColumn('Orders', 'status', {
		default: null
	})
	pgm.alterColumn('Orders', 'status', {
		type: 'order_status',
		using: 'status::order_status',
		default: 'unpaid'
	})
}

exports.down = pgm => {}
