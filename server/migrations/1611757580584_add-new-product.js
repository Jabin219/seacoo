/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
			('a403296b-7c17-47d4-94a8-44bfebb954cd', 'Bêche Sea Cucumber + Collagen Women Health Support ', 'Bêche 海参+胶原蛋白冲剂', '-', '-', 'Canada-Japan joint research and developed.<br />Net Weight: 75g(2.5g x 30bags).<br />Recommended use: 1-2 bags each day', '日加联合研发制作<br />净含量t: 75g（2.5g x 30袋）<br />推荐用量: 每日一袋', true, '3f88f577-9ecb-4451-9a41-4960e886f8f5', 59.99, 'https://dev.seacoo.com/src/beche_collagen/cover-image.jpg', 'PUBLISHED');
            
            INSERT INTO "Images" ("productID", "url") VALUES
			('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://dev.seacoo.com/src/beche_collagen/gallery1.jpg');
			INSERT INTO "Images" ("productID", "url") VALUES
			('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://dev.seacoo.com/src/beche_collagen/gallery2.jpg');
			INSERT INTO "Images" ("productID", "url") VALUES
			('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://dev.seacoo.com/src/beche_collagen/gallery3.jpg');
			INSERT INTO "Images" ("productID", "url") VALUES
			('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://dev.seacoo.com/src/beche_collagen/gallery4.jpg');
			
			INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('a403296b-7c17-47d4-94a8-44bfebb954cd', '7f87ea9b-c652-40ad-82f4-17db00ce3542', '0');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('a403296b-7c17-47d4-94a8-44bfebb954cd', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '1');
        INSERT INTO "Relations" ("productID", "relatedProductID", "priority") VALUES
        ('a403296b-7c17-47d4-94a8-44bfebb954cd', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '2');
        `)
}

exports.down = pgm => {}
