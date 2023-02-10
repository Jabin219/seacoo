/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
	CREATE UNIQUE INDEX unique_enabled_coupon
        ON "Coupons" ("code", "status") WHERE "status" = 'enabled' `)

	pgm.dropConstraint('Coupons', 'Coupons_code_key', {})
}

exports.down = pgm => {}
