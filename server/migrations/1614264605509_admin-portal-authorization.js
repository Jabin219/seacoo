/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Account', {
		id: {
			type: 'uuid',
			notNull: true,
			default: pgm.func('uuid_generate_v4()'),
			primaryKey: true
		},
		userName: {
			type: 'text',
			notNull: true,
			unique: true
		},
		hashedPassword: {
			type: 'text',
			notNull: true
		},
		name: {
			type: 'text',
			notNull: true
		},
		email: {
			type: 'text',
			notNull: false
		},
		phoneNumber: {
			type: 'text',
			notNull: false
		},
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		},
		updatedAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
}

exports.down = pgm => {}
