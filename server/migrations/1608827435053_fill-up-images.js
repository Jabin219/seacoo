/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
        INSERT INTO "Images" ("productID", "url", "priority") VALUES
        ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://dev.seacoo.com/src/blue_box/蓝盒子背面.jpg', '4');
        
        INSERT INTO "Images" ("productID", "url", "priority") VALUES
        ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://dev.seacoo.com/src/red_box/红盒正面.jpg', '0');
    `)
}

exports.down = pgm => {}
