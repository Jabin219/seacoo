/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns('Orders', {
		recipient: { type: 'varchar(30)', notNull: true },
		phone: { type: 'varchar(15)' },
		email: { type: 'varchar(29)', notNull: true },
		totalPrice: { type: 'numeric(8,2)' }
	})
	pgm.addColumns('OrderDetail', {
		amount: { type: 'int', notNull: true }
	})
}

exports.down = pgm => {}
