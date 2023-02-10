/* eslint-disable camelcase */
exports.shorthands = undefined

exports.up = pgm => {
	pgm.createType('product_status', ['published', 'outOfStock'])
	pgm.dropColumns('Products', ['status'])
	pgm.addColumns('Products', {
		status: { type: 'product_status', notNull: true, default: 'published' }
	})
}

exports.down = pgm => {}
