/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumns('Orders', {
		domain: {
			type: 'domain_source',
			default: 'seacoo'
		}
	})
};

exports.down = pgm => {};
