/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('OrderDetail', {
		optionID: { type: 'uuid', references: '"Options"' }
	})
	pgm.addColumns('Products', {
		coverImage: { type: 'text' }
	})
}

exports.down = pgm => {}
