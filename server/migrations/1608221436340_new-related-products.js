/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('Relations', {
		id: {
			type: 'uuid',
			notNull: true,
			primaryKey: true,
			default: pgm.func('uuid_generate_v4()')
		},
		productID: { type: 'uuid', notNull: true, references: '"Products"' },
		relatedProductID: { type: 'uuid', notNull: true, references: '"Products"' },
		priority: 'int'
	})
	pgm.sql(`
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('5ad51049-fa32-43c1-99d9-f678e17125fb', '649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('5ad51049-fa32-43c1-99d9-f678e17125fb', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('5ad51049-fa32-43c1-99d9-f678e17125fb', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('7f87ea9b-c652-40ad-82f4-17db00ce3542', '649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('7f87ea9b-c652-40ad-82f4-17db00ce3542', '5ad51049-fa32-43c1-99d9-f678e17125fb', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('7f87ea9b-c652-40ad-82f4-17db00ce3542', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('dc0c6198-797d-4ad2-a626-2410494b2e40', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('dc0c6198-797d-4ad2-a626-2410494b2e40', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('dc0c6198-797d-4ad2-a626-2410494b2e40', '7f87ea9b-c652-40ad-82f4-17db00ce3542', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '5ad51049-fa32-43c1-99d9-f678e17125fb', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '7f87ea9b-c652-40ad-82f4-17db00ce3542', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '7f87ea9b-c652-40ad-82f4-17db00ce3542', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '7f87ea9b-c652-40ad-82f4-17db00ce3542', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'dc0c6198-797d-4ad2-a626-2410494b2e40', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '0');

        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('2959ade1-e357-44a6-9d40-4dd1d58da24e', '5ad51049-fa32-43c1-99d9-f678e17125fb', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('2959ade1-e357-44a6-9d40-4dd1d58da24e', '649c5ac5-e4d7-4e3a-875e-47ffd59990cd', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('2959ade1-e357-44a6-9d40-4dd1d58da24e', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '0');
    `)
}

exports.down = pgm => {}