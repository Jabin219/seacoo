/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.createTable('Category', {
        id: {
            type: 'uuid',
            notNull: true,
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()'),
        },
        name: { type: 'varchar(50)', notNull: true },
        label: { type: 'varchar(50)' },
        description: 'text',
        status: { type: 'varchar(10)', default: 'enabled' },
    })
    pgm.addColumns('Products', {
        category: {
            type: 'uuid',
            reference: '"Category"',
        },
    })
    pgm.sql(`
          UPDATE "Products" 
          SET "category" = '3f88f577-9ecb-4451-9a41-4960e886f8f5'
          WHERE "id" = '1a1f07bf-520a-404b-a534-e2d5a0591d01';
         `)
    pgm.sql(`
         INSERT INTO "Category" ("id", "name") VALUES
         ('3f88f577-9ecb-4451-9a41-4960e886f8f5', 'Beche Sea Cucumber Supplement');
         INSERT INTO "Category" ("id", "name") VALUES
         ('88117c0e-b4d1-4397-8f6d-9af21735494e', 'East Coast Sea Cucumber ');
         INSERT INTO "Category" ("id", "name") VALUES
         ('9e8bb768-a417-4609-936b-8ed56cbc349d', 'West Coast Sea Cucumber ');
        `)
}

exports.down = (pgm) => {}
