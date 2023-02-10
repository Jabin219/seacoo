/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Options', {
		id: {
			type: 'uuid',
			notNull: true,
			primaryKey: true,
			default: pgm.func('uuid_generate_v4()')
		},
		label: { type: 'varchar(99)', notNull: true },
		productID: { type: 'uuid', notNull: true, reference: '"Products"' },
		catalogue: { type: 'int' },
		priority: { type: 'int', default: 0 },
		description: 'text',
		price: { type: 'numeric(8,2)', notNull: true, default: 0 },
		status: { type: 'varchar(10)', default: 'enabled' }
	})
	pgm.sql(`
         INSERT INTO "Options" ("productID", "label", "price") VALUES
         ('1a1f07bf-520a-404b-a534-e2d5a0591d01', 'Beche 30', 40.1);
         INSERT INTO "Options" ("productID", "label", "price") VALUES
         ('1a1f07bf-520a-404b-a534-e2d5a0591d01', 'Beche 40', 46.2);
         INSERT INTO "Options" ("productID", "label", "price") VALUES
         ('1a1f07bf-520a-404b-a534-e2d5a0591d01', 'Beche 50', 50);
        `)
}

exports.down = pgm => {}
