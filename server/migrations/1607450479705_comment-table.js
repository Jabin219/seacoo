/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Comments', {
		id: {
			type: 'uuid',
			notNull: true,
			default: pgm.func('uuid_generate_v4()'),
			primaryKey: true
		},
		productID: {
			type: 'uuid',
			notNull: true,
			references: '"Products"'
		},
		content: {
			type: 'text',
			notNull: true
		},
		email: 'varchar(55)',
		user: 'varchar(20)',
		status: { type: 'varchar(10)', default: 'enabled', notNull: true },
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
}

exports.down = pgm => {}
