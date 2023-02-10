/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.dropColumns('Orders', [
		'country',
		'province',
		'street',
		'postalCode',
		'recipient',
		'city'
	])
	pgm.createTable('Addresses', {
		id: {
			type: 'uuid',
			notNull: true,
			primaryKey: true,
			default: pgm.func('uuid_generate_v4()')
		},
		recipient: {
			type: 'varchar(30)',
			notNull: true
		},
		phone: {
			type: 'varchar(20)'
		},
		country: {
			type: 'varchar(20)',
			notNull: true
		},
		province: { type: 'varchar(20)', notNull: true },
		city: { type: 'varchar(30)' },
		postalCode: { type: 'varchar(20)', notNull: true },
		billingAsShipping: 'boolean',
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
	pgm.addColumns('Orders', {
		shippingAddress: {
			type: 'uuid',
			notNull: true,
			references: '"Addresses"'
		},
		billingAddress: {
			type: 'uuid',
			notNull: true,
			references: '"Addresses"'
		}
	})
}

exports.down = pgm => {}
