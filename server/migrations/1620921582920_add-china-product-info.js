/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createType('country', ['CANADA', 'CHINA'])
	pgm.addColumns('Products', {
		country: {
			default: 'CANADA',
			type: 'country',
			notNull: true
		}
	})
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'SEACOO Dried East Coast Sea Cucumber Whole 454g bag', 'SEACOO 加拿大东海岸淡干整筒北极参袋装454g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下，海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 999.99, 'https://dev.seacoo.com/src/red_bag/缩略图.jpg', 'published', 'CHINA', 'Dried-East-Coast-Sea-Cucumber-Whole-Bag');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'SEACOO Dried East Coast Sea Cucumber HG-Split 454g Bag', 'SEACOO加拿大东海岸淡干开口北极参 袋装454g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大东部沿海，生⻓在水下30米左右的海底。加拿大北 极参产区海域水温最高不超过14°C，冬季表面结冰，属于“冻海”，在这种环境下，海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，因此其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 580.00, 'https://dev.seacoo.com/src/blue_bag/缩略图.jpg', 'published', 'CHINA', 'Dried-East-Coast-Sea-Cucumber-Split-Bag');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName") VALUES
		('f2411b6a-e1a1-47cd-b585-89703b16c559', 'SEACOO Dried West Coast Sea Cucumber 454g Bag', 'SEACOO加拿大西海岸红刺参 袋装454g', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参 ，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属，阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大野生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几个步骤，加工出纯粹的“淡干”海参。', false, 1988.00, 'https://dev.seacoo.com/src/black_bag/缩略图.jpg', 'published', 'CHINA', 'Dried-West-Coast-Sea-Cucumber-Bag');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName") VALUES
		('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'SEACOO Dried East Coast Sea Cucumber Whole 454g Gift Box', 'SEACOO 加拿大东海岸淡干整筒北极参 礼盒装454g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下，海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 999.99, 'https://dev.seacoo.com/src/red_box/缩略图.jpg', 'published', 'CHINA', 'Dried-East-Coast-Sea-Cucumber-Whole-Box');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName") VALUES
		('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'SEACOO Dried East Coast Sea Cucumber HG-Split 454g Gift Box', 'SEACOO加拿大东海岸淡干开口北极参 礼盒装454g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高不超过14°C，冬季表面结冰，属“冻海”，在这种环境下，海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 630.00, 'https://dev.seacoo.com/src/blue_box/缩略图.jpg', 'published', 'CHINA', 'Dried-East-Coast-Sea-Cucumber-Split-Box');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName") VALUES
		('90d8485e-7111-4f5f-bbd5-762b52f41752', 'SEACOO Dried West Coast Sea Cucumber 454g Gift Box', 'SEACOO加拿大西海岸红刺身 礼盒装454g', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参 ，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属， 阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大野生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生 态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几个步骤，加工出纯粹的“淡干”海参。', false, 2038.00, 'https://dev.seacoo.com/src/black_box/缩略图.jpg', 'published', 'CHINA', 'Dried-West-Coast-Sea-Cucumber-Box');
	`)
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName") VALUES
		('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'Bêche Sea Cucumber + Collagen Women Health Support', 'Bêche 天然海参精华补充剂', '日加联合研发制作<br />净含量t: 75g（2.5g x 30袋）<br />推荐用量: 每日一袋', true, 499.00, 'https://dev.seacoo.com/src/beche_collagen/cover-image.jpg', 'published', 'CHINA', 'Bêche-Sea-Cucumber-Supplement-Collagen-Women');
	`)

	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 25pcs/bag', '平均25头/袋', '847f7f49-c912-46a7-9472-4c57602b3959', 1299.00, 2);
	`)
	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 35pcs/bag', '平均35头/袋', '847f7f49-c912-46a7-9472-4c57602b3959', 1099.00, 1);
	`)
	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 40-60pcs/bag', '平均40-60头/袋', '847f7f49-c912-46a7-9472-4c57602b3959', 899.00, 0);
	`)
	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 25pcs/bag', '平均25头/盒', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 1349.00, 2);
	`)
	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 35pcs/bag', '平均35头/盒', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 1149.00, 1);
	`)
	pgm.sql(`
		INSERT INTO "Options" ("label", "labelZh", "productID", "price", "priority") VALUES
		('avg 40-60pcs/bag', '平均40-60头/盒', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 949.00, 0);
	`)

	pgm.sql(`
		CREATE UNIQUE INDEX unique_product_image ON "Images" ("productID", "url")
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://dev.seacoo.com/src/red_bag/IMG_5752.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://dev.seacoo.com/src/red_bag/IMG_5743.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://dev.seacoo.com/src/red_bag/red-bag-comparison.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://dev.seacoo.com/src/red_bag/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://dev.seacoo.com/src/blue_bag/Rectangle.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://dev.seacoo.com/src/blue_bag/side.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://dev.seacoo.com/src/blue_bag/back.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://dev.seacoo.com/src/blue_bag/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://dev.seacoo.com/src/black_bag/Group 2.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://dev.seacoo.com/src/black_bag/IMG_5870.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://dev.seacoo.com/src/black_bag/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://dev.seacoo.com/src/red_box/红_正面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://dev.seacoo.com/src/red_box/红_侧面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://dev.seacoo.com/src/red_box/红_背面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://dev.seacoo.com/src/red_box/red-box-comparison.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://dev.seacoo.com/src/red_box/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://dev.seacoo.com/src/blue_box/蓝_正面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://dev.seacoo.com/src/blue_box/蓝_侧面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://dev.seacoo.com/src/blue_box/蓝_背面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://dev.seacoo.com/src/blue_box/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://dev.seacoo.com/src/black_box/黑_正面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://dev.seacoo.com/src/black_box/黑_侧面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://dev.seacoo.com/src/black_box/黑_背面.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://dev.seacoo.com/src/black_box/sample.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://dev.seacoo.com/src/beche_collagen/gallery2.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://dev.seacoo.com/src/beche_collagen/gallery4.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://dev.seacoo.com/src/beche_collagen/gallery3.jpg');
		INSERT INTO "Images" ("productID", "url")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://dev.seacoo.com/src/beche_collagen/gallery1.jpg');
	`)
}

exports.down = pgm => {}
