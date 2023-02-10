/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Products', {
		pathName: { type: 'string' }
	})
}

exports.down = pgm => {}
