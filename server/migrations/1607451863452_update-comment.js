/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Comments', {
		rate: { type: 'int' },
		priority: { type: 'int' }
	})
}

exports.down = pgm => {}
