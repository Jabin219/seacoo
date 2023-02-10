/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql('CREATE EXTENSION citext;')
	pgm.alterColumn('Orders', 'email', { type: 'citext' })
}

exports.down = pgm => {}
