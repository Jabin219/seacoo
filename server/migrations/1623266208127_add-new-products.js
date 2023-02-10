/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "type", "propertiesZh")
		VALUES ('70faa11a-cafe-4346-b7dd-a25806d0c732', '-', '淡干整筒北极参大礼盒', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 9999.99, 'https://dev.seacoo.com/src/red_big_box/cover-image.jpg', 'published', 'CHINA', 'Dried-East-Coast-Sea-Cucumber-Whole-Gift-Box', 'dried-sea-cucumber', '东海岸北极参 ｜ 野生海参 ｜ 天然抗氧化食品');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://dev.seacoo.com/src/red_big_box/gallery1.jpg');
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 25pcs/bag', '平均25头/袋', '70faa11a-cafe-4346-b7dd-a25806d0c732', 1599.00, 2);
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 35pcs/bag', '平均35头/袋', '70faa11a-cafe-4346-b7dd-a25806d0c732', 1399.00, 1);
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 40-60pcs/bag', '平均40-60头/袋', '70faa11a-cafe-4346-b7dd-a25806d0c732', 1199.00, 0);
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('70faa11a-cafe-4346-b7dd-a25806d0c732', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "type", "propertiesZh")
		VALUES ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', '-', '淡干红刺参大礼盒', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参 ，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属， 阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大野生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几个步骤，加工出纯粹的“淡干”海参。', false, 2288.00, 'https://dev.seacoo.com/src/black_big_box/cover-image.jpg', 'published', 'CHINA', 'Dried-West-Coast-Sea-Cucumber-Gift-Box', 'dried-sea-cucumber', '西海岸红刺参 ｜ 野生海参 ｜ 天然抗氧化食品');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://dev.seacoo.com/src/black_big_box/gallery1.jpg');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
		
	`)
}

exports.down = pgm => {}
