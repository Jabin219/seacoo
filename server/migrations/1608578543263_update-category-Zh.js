/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	exports.up = pgm => {
		pgm.sql(`
            UPDATE "Category"
            SET "nameZh" = 'Beche海参保健品'
            WHERE id = '3f88f577-9ecb-4451-9a41-4960e886f8f5';
    
            UPDATE "Category"
            SET "nameZh" = '加拿大东海岸北极参'
            WHERE id = '88117c0e-b4d1-4397-8f6d-9af21735494e';

            UPDATE "Category"
            SET "nameZh" = '加拿大西海岸阿拉斯加红刺身'
            WHERE id = '9e8bb768-a417-4609-936b-8ed56cbc349d';
        `)
	}
}

exports.down = pgm => {}
