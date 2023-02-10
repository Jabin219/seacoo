/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Addresses', {
		street: {
			type: 'varchar(200)'
		}
	})
}

exports.down = pgm => {}
