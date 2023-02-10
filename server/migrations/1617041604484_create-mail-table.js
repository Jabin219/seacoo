/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Mails', {
		id: {
			type: 'uuid',
			nutNull: true,
			primaryKey: true,
			default: pgm.func('uuid_generate_v4()')
		},
		name: { type: 'text', notNull: true },
		email: { type: 'text', notNull: true },
		content: { type: 'text', notNull: true },
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	})
}

exports.down = pgm => {}
