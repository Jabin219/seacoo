/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
		INSERT INTO "Account" ("userName", "hashedPassword", "name", "email")
		VALUES ('whohappy', 'sha1$7cb2db55$1$c673f03f992a387e9055af1651434020af8a4dc9', 'Bin', 'bin@rsgl.ca')
	`)
}

exports.down = pgm => {}
