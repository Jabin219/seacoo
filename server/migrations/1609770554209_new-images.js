/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://dev.seacoo.com/src/red_bag/all_size_front.png', '6');
    `)
}

exports.down = pgm => {}