/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createType('domain_source', ['seacoo', 'seacoo-cn', 'beche'])
	pgm.addColumns('Coupons', {
		domain: {
			type: 'domain_source',
			default: 'seacoo'
		}
	})
}

exports.down = pgm => {}
