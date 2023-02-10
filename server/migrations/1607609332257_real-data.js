/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.alterColumn('Products', 'name', {
		type: 'text',
		notNull: true
	})
	pgm.addColumns('Products', {
		nameZh: {
			type: 'text'
		},
		shortDescriptionZh: { type: 'text' },
		descriptionZh: { type: 'text' }
	})
	pgm.addColumns('Options', {
		labelZh: 'text',
		weight: 'text'
	})
	pgm.addColumns('Category', {
		nameZh: 'text',
		labelZh: 'text'
	})
	pgm.sql(`
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'SEACOO Dried East Cost Sea Cucumber Whole 454g Gift Box', 'SEACOO 加拿大东海岸淡干整筒北极参礼盒装454g', '', '', 'SEACOO Atlantic sea cucumbers are true wild catch. They reproduce and grow in “zero-pollution” areas where there is no human intervention during the whole Life history. They grow slowly because of the cold environment and that they only feed on submarine algae and microbes. Atlantic sea cucumbers are harvested from the eastern coast of Canada and grow on the sea floor about 30 meters underwater.', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内 的营养物质含􏰀也要比“温水”环境中生⻓的海参要高。', false, '88117c0e-b4d1-4397-8f6d-9af21735494e', 0, 'https://seacoo.com/src/red_box/缩略图.jpg', 'PUBLISHED');
            
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'SEACOO Dried East Cost Sea Cucumber Whole 454g bag', 'SEACOO 加拿大东海岸淡干整筒北极参袋装 454g', '', '', 'SEACOO Atlantic sea cucumbers are true wild catch. They reproduce and grow in “zero-pollution” areas where there is no human intervention during the whole Life history. They grow slowly because of the cold environment and that they only feed on submarine algae and microbes. Atlantic sea cucumbers are harvested from the eastern coast of Canada and grow on the sea floor about 30 meters underwater.', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内 的营养物质含􏰀也要比“温水”环境中生⻓的海参要高。', false, '88117c0e-b4d1-4397-8f6d-9af21735494e', 0, 'https://seacoo.com/src/red_bag/缩略小图.jpg', 'PUBLISHED');
            
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'SEACOO Dried West Coast Sea Cucumber 454g Gift Box', '加拿大⻄海岸红刺参盒装 454g', '', '', 'Alaska red sea cucumbers (West Coast Seacucumber) are harvested from the water area from the west coast
            of Canada, to northern Alaska. Due to the extremely low temperature of the water, Alaska red sea cucumbers grow slowly, with thick skin and excellent nutrient accumulation. It is the best of wild sea cucumbers.', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参 ，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属， 阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大􏰂生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生 态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几 个步骤，加工出纯粹的“淡干”海参。', false, '9e8bb768-a417-4609-936b-8ed56cbc349d', 225, 'https://seacoo.com/src/black_box/缩略图.jpg', 'PUBLISHED');
            
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'SEACOO Dried West Coast Sea Cucumber 454g Bag', 'SEACOO加拿大西海岸红刺参袋装 454g', '', '', 'Alaska red sea cucumbers (West Coast Seacucumber) are harvested from the water area from the west coast
            of Canada, to northern Alaska. Due to the extremely low temperature of the water, Alaska red sea cucumbers grow slowly, with thick skin and excellent nutrient accumulation. It is the best of wild sea cucumbers.', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参 ，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属， 阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大􏰂生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生 态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几 个步骤，加工出纯粹的“淡干”海参。', false, '9e8bb768-a417-4609-936b-8ed56cbc349d', 225, 'https://seacoo.com/src/black_box/缩略图.jpg', 'PUBLISHED');
        
        `)
	pgm.sql(`
            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'avg 25pcs/box', '平均25头/盒子', '454g', 110);
            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'avg 35pcs/box', '平均35头/盒子', '454g', 100);
            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'avg 40-60pcs/box', '平均40-60头/盒子', '454g', 90);

            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'avg 25pcs/abg', '平均25头/袋', '454g', 105);
            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'avg 35pcs/bag', '平均35头/袋', '454g', 95);
            INSERT INTO "Options" ("productID", "label", "labelZh", "weight", "price") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'avg 40-60pcs/bag', '平均40-60头/袋', '454g', 85);
        
            INSERT INTO "Images" ("productID", "url") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo.com/src/red_box/IMG_5033.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo.com/src/red_box/IMG_5034.jpg');
        
            INSERT INTO "Images" ("productID", "url") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo.com/src/red_bag/IMG_5752.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo.com/src/red_bag/IMG_5743.jpg');
            
            INSERT INTO "Images" ("productID", "url") VALUES
            ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo.com/src/black_box/IMG_5036.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo.com/src/black_box/IMG_5034.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo.com/src/black_box/IMG_5033.jpg');
            

            INSERT INTO "Images" ("productID", "url") VALUES
            ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo.com/src/black_bag/Group 2.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo.com/src/red_bag/IMG_5870.jpg');
        
        `)
}

exports.down = pgm => {}
