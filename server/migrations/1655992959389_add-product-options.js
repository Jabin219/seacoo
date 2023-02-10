/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(
		`
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh")
        VALUES ('4f304662-b2f9-463a-a1e9-0ca57df985d7', 'AVG 40-60PCS/BAG 227g', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '3', '43.00', '平均40-60头/袋 227克');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh")
        VALUES ('f0f0e191-775e-42dd-9c3f-e680f4032fd6', 'AVG 35PCS/BAG 227g', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '4', '48.00', '平均35头/袋 227克');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh")
        VALUES ('cc6ac1f1-e5f4-4726-87d4-f4277b5280c0', 'AVG 25PCS/BAG 227g', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '5', '53.00', '平均25头/袋 227克');
        UPDATE "Options" 
        SET label = 'AVG 40-60PCS/BAG 454g',
        "labelZh" = '平均40-60头/袋 454克'
        WHERE id = 'd0afaca2-7b79-49e4-9ea2-2291f6883799';
        UPDATE "Options" 
        SET label = 'AVG 35PCS/BAG 454g',
        "labelZh" = '平均35头/袋 454克'
        WHERE id = '7df38eb5-9464-4afa-b7bc-d0085e65090d';
        UPDATE "Options" 
        SET label = 'AVG 25PCS/BAG 454g',
        "labelZh" = '平均25头/袋 454克'
        WHERE id = '51326a0b-ab32-4baa-ac16-751033b5343f';
        UPDATE "Products"
        SET name = 'SEACOO Dried East Cost Sea Cucumber Whole Bag',
        "nameZh" = 'SEACOO 加拿大东海岸淡干整筒北极参 袋装'
        WHERE id = '303517f2-aea8-4ee4-b7eb-b22dd16ddef9';
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh")
        VALUES ('4038c844-7c38-4646-be4f-9fa24bef92d7', '454g', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '0', '225.00', '454克');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh")
        VALUES ('be87dafd-dbd3-475b-ad1b-d24bd8d8ad03', '227g', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '1', '113.00', '227克');
        UPDATE "Products"
        SET name = 'SEACOO Dried West Coast Sea Cucumber Bag',
        "nameZh" = 'SEACOO加拿大西海岸红刺参 袋装'
        WHERE id = '2959ade1-e357-44a6-9d40-4dd1d58da24e';
        `
	)
}

exports.down = pgm => {}
