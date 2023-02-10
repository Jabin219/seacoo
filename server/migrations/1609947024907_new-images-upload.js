/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://dev.seacoo.com/src/red_bag/web25.jpg', '7');
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://dev.seacoo.com/src/red_bag/web35.jpg', '8');
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://dev.seacoo.com/src/red_bag/web40-60.jpg', '9');

            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://dev.seacoo.com/src/red_bag/box25.jpg', '7');
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://dev.seacoo.com/src/red_bag/box35.jpg', '8');
            INSERT INTO "Images" ("productID", "url", "priority") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://dev.seacoo.com/src/red_bag/box40-60.jpg', '9');
    `)
}

exports.down = pgm => {}
