/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Coupons', {
		id: {
			type: 'uuid',
			notNull: true,
			default: pgm.func('uuid_generate_v4()'),
			primaryKey: true
		},
		code: {
			type: 'varchar(20)',
			notNull: true,
			unique: true
		},
		promotion: { type: 'varchar(10)', notNull: true },
		discount: { type: 'int' },
		fixedPrice: { type: 'numeric(8,2)' },
		status: { type: 'varchar(10)', default: 'enabled', notNull: true },
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
	pgm.addColumns('Orders', {
		couponID: { type: 'uuid', references: '"Coupons"' },
		subtotal: { type: 'numeric(8,2)', notNull: true },
		tax: { type: 'numeric(8,2)' }
	})
}

exports.down = pgm => {}
