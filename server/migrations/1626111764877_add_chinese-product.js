/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "type", "propertiesZh")
        VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', '-', 'SEACOO速冻北极参 猪肉白菜饺520g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 58.00, 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_bok_choy_dumpling/cover.jpg', 'published', 'CHINA', 'Sea-Cucumber-Pork-Bok-Choy-Dumpling', 'frozen-food', '即食美味 ｜ 野生海参 ｜ 家庭常备食品');
        INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "type", "propertiesZh")
        VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', '-', 'SEACOO速冻北极参 猪肉韭菜饺520g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下， 海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 58.00, 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_leek_dumpling/cover.jpg', 'published', 'CHINA', 'Sea-Cucumber-Pork-Leek-Dumpling', 'frozen-food', '即食美味 ｜ 野生海参 ｜ 家庭常备食品');
    `)
    pgm.sql(`
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_bok_choy_dumpling/front.jpg', 0);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_bok_choy_dumpling/side.jpg', 1);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_bok_choy_dumpling/back.jpg', 2);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_bok_choy_dumpling/sample.jpg', 3);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_leek_dumpling/front.jpg', 0);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_leek_dumpling/side.jpg', 1);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_leek_dumpling/back.png', 2);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/pork_leek_dumpling/sample.jpg', 3);
    `)
    pgm.sql(`
		INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', '69639e5c-ec35-4c46-8201-76d20a177bf3', 0);
        INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 1);
		INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('122f77f8-50c3-456a-8ed6-c7e32b4e2832', 'f0afb46b-4077-4705-bb35-5e821b54566c', 2);
        INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', '122f77f8-50c3-456a-8ed6-c7e32b4e2832', 0);
        INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'd9604ea5-1678-4947-82e5-17a5dc7d2c38', 1);
		INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('69639e5c-ec35-4c46-8201-76d20a177bf3', 'f0afb46b-4077-4705-bb35-5e821b54566c', 2);
	`)
};

exports.down = pgm => {};