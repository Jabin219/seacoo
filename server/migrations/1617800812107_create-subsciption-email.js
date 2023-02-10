/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Subscriptions', {
		id: {
			type: 'uuid',
			nutNull: true,
			primaryKey: true,
			default: pgm.func('uuid_generate_v4()')
		},
		email: { type: 'varchar(30)', notNull: true, unique: true },
		coupon: { type: 'varchar(6)' },
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
}

exports.down = pgm => {}
