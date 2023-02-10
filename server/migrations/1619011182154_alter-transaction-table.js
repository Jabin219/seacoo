/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.renameColumn('Transactions', 'userID', 'id')
	pgm.alterColumn('Transactions', 'status', {
		default: 'unpaid'
	})
}

exports.down = pgm => {}
