/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.alterColumn('Products', 'shortDescription', {
		type: 'text'
	})
	pgm.sql(`
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'Bêche Sea Cucumber Powder Supplement', 'Bêche 天然海参精华补充剂', 'Product Information Additional Details
            Medicinal Ingredients:
            Sea Cucumber (Cucumaria frondosa, Whole) ......................600mg
            Recommended Dose
            Adult – Take 1 capsules once daily. Recommended Use
            Source of antioxidants. Source of amino acids involved in muscle protein synthesis.', '胶囊成分
            海参(北极参，整)...........600毫克
            推荐剂􏰀:
            成人 – 每天服用1粒胶囊
            推荐用途 抗氧化剂的来源。参与肌肉蛋白质合成的氨基酸来源。
             ——————————————————————————————————————————
            ————————————————————--
            􏰂外捕获，可持续来源
            这是您日常健康活动的有力补充，可支持海洋保护，并符合加拿大严格的海 洋保护标准。
            来自清洁和寒冷的加拿大海域
            我们是值得信任的新斯科舍省沿海家庭渔业从干净的冷水中精心收获的加拿 大海参。
            100%营养封装的海参 完全没有填充剂，人造成分，防腐剂或甜味剂，您将完全受益于100%封装
            的加拿大海参。
            免疫系统支持
            获得深层的免疫支持，通过支持免疫系统中最关键的细胞来增强人体的自然 防御能力。
            
            抗氧化剂，身体健康
            使用独特浓缩的胶囊化粉末，每天为您提供抗氧化剂的增强，保护您的细胞 免受自由基造成的氧化损害。
            氨基酸的􏰁要来源
            支持构建蛋白质以及合成激素和神经递质所需的氨基酸的关键功能。', 'Product Information Additional Details
            Medicinal Ingredients:
            Sea Cucumber (Cucumaria frondosa, Whole) ......................600mg
            Recommended Dose
            Adult – Take 1 capsules once daily. Recommended Use
            Source of antioxidants. Source of amino acids involved in muscle protein synthesis.
             Wild Caught, Sustainably Sourced
            This powerful addition to your healthy routine supports marine conservation and is aligned with Canada’s strict ocean protection standards.
            From Clean and Cold Canadian Waters
            Trust the benefits of Canadian Sea Cucumber carefully harvested from the clean, cold waters by family fisheries off the coast of Nova Scotia.
            100% Encapsulated Sea Cucumber
            With absolutely no fillers, artificial ingredients, preservatives or sweeteners, you get the full benefit of 100% encapsulated Canadian Sea Cucumber.
            Immune System Support
            Get deep immune support that enhances your body’s natural defences with support for the most critical cells in your immune system.
            
            Antioxidants for Good Health
            Get you daily boost of antioxidants protecting your cells from oxidative damage caused by free radicals with a uniquely concentrated, encapsulated powder.
            An Important Source of Amino Acids
            Support the critical function of amino acids required for building proteins and synthesis of hormones and neurotransmitters.', 'Bêche提供强效剂量的浓缩海参。此产品长期以来一直被认为是支持关节健 康，增强免疫系统和减少炎症的药物的天然替代品。
            海参富含宝贵的必需营养素，例如维生素A，B1，B2，B3，镁，钙，锌和 铁。 每瓶包含30粒600mg胶囊。', true, '3f88f577-9ecb-4451-9a41-4960e886f8f5', 44.99, 'https://seacoo.com/src/beche/缩略图.jpg', 'PUBLISHED');
            
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'SEACOO Dried East Cost Sea Cucumber
            HG-Split 454g Gift Box', 'Seacoo加拿大东海岸淡干开又北极参礼盒装 454g', 'Weight: 454g
            Harvest Area: Atlantic Ocean
            Harvest: Wild Status: Dry', '重量:454g
            海域:大⻄洋
            捕捞:野生
            级别:淡干', 'SEACOO Atlantic sea cucumbers are true wild catch. They reproduce and grow in “zero-pollution” areas where there is no human intervention during the whole Life history. They grow slowly because of the cold environment and that they only feed on submarine algae and microbes. Atlantic sea cucumbers are harvested from the eastern coast of Canada and grow on the sea floor about 30 meters underwater.', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内 的营养物质含􏰀也要比“温水”环境中生⻓的海参要高。', false, '88117c0e-b4d1-4397-8f6d-9af21735494e', 60, 'https://seacoo.com/src/blue_box/缩略图.jpg', 'PUBLISHED');
            
            INSERT INTO "Products" ("id", "name", "nameZh", "shortDescription", "shortDescriptionZh", "description", "descriptionZh", "taxable", "category", "price", "coverImage", "status") VALUES
            ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'SEACOO Dried East Cost Sea Cucumber
            HG-Split 454g Bag', 'Seacoo加拿大东海岸淡干开又北极参袋装454g', 'Weight: 454g
            Harvest Area: Atlantic Ocean
            Harvest: Wild Status: Dry', '重量:454g
            海域:大⻄洋
            捕捞:野生
            级别:淡干', 'SEACOO Atlantic sea cucumbers are true wild catch. They reproduce and grow in “zero-pollution” areas where there is no human intervention during the
            whole Life history. They grow slowly because of the cold environment and that they only feed on submarine algae and microbes. Atlantic sea cucumbers are harvested from the eastern coast of Canada and grow on the sea floor about 30 meters underwater.', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大东部沿海，生⻓在水下30米左右的海底。加拿大北 极参产区海域水温最高不超过14°C，冬季表面结冰，属于“冻海”，在这种环境下，海参⻓期处于休眠或半 休眠状态，生⻓周期极⻓，因此其体内的营养物质含􏰀也要比“温水”环境中生⻓的海参要高。', false, '88117c0e-b4d1-4397-8f6d-9af21735494e', 55, 'https://seacoo.com/src/blue_bag/缩略图.jpg', 'PUBLISHED');
            
            INSERT INTO "Images" ("productID", "url") VALUES
            ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo.com/src/beche/302.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo.com/src/beche/单瓶.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo.com/src/beche/单瓶带盒.jpg');
        
            INSERT INTO "Images" ("productID", "url") VALUES
            ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo.com/src/blue_box/front.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo.com/src/blue_box/side.jpg');
            
            INSERT INTO "Images" ("productID", "url") VALUES
            ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo.com/src/blue_bag/back.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo.com/src/blue_bag/Rectangle.jpg');
            INSERT INTO "Images" ("productID", "url") VALUES
            ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo.com/src/blue_bag/side.jpg');
            
        `)
}

exports.down = pgm => { }
