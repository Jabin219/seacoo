/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
         INSERT INTO "Coupons" ("id", "code", "promotion", "discount") VALUES
         ('1a1f07bf-520a-404b-a534-e2d5a0591d01', 'BECHE_20OFF', 'discount', 80);
        `)
}

exports.down = pgm => {}
