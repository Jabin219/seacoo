/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName")
		VALUES ('f0afb46b-4077-4705-bb35-5e821b54566c', '-', '海参鱼胶佛跳墙', '佛跳墙选用加拿大北极海参、大西洋鳕鱼胶等汇聚到一起，加入高汤，文火煨制而成。成菜后，软嫩柔润，浓 郁荤香，又荤而不腻，味中有味。以平民的价格，将高档 食材海参鱼胶搬上千家万户的餐桌上，在家简单加热，即 可享用。佛跳墙中富含黏多糖的北极海参和胶原蛋白满满 的鳕鱼胶能使您增强免疫力、调经润肠、美容养颜。', false, 38, 'https://dev.seacoo.com/src/佛跳墙/佛跳墙-cover-image.jpg', 'published', 'CHINA', 'Sea-Cucumber-Fish-Maw-Chowder');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url")
		VALUES ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://dev.seacoo.com/src/佛跳墙/佛跳墙大图.jpg');
	`)
	pgm.sql(`
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', '4eb149ec-1b49-4ba2-8297-a67e166e548a');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('847f7f49-c912-46a7-9472-4c57602b3959', 'f0afb46b-4077-4705-bb35-5e821b54566c');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'f0afb46b-4077-4705-bb35-5e821b54566c');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', '90d8485e-7111-4f5f-bbd5-762b52f41752');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', '90d8485e-7111-4f5f-bbd5-762b52f41752');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'f0afb46b-4077-4705-bb35-5e821b54566c');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'f0afb46b-4077-4705-bb35-5e821b54566c');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'f0afb46b-4077-4705-bb35-5e821b54566c');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
	`)
	pgm.addColumns('Products', { type: { type: 'text' } }, {})
	pgm.sql(`
		UPDATE "Products"
		SET "type" = 'dried-sea-cucumber'
		WHERE "pathName" = 'Dried-East-Coast-Sea-Cucumber-Split-Bag'
		OR "pathName" = 'Dried-East-Coast-Sea-Cucumber-Whole-Bag'
		OR "pathName" = 'Dried-East-Coast-Sea-Cucumber-Whole-Box'
		OR "pathName" = 'Dried-West-Coast-Sea-Cucumber-Bag'
		OR "pathName" = 'Dried-East-Coast-Sea-Cucumber-Split-Box'
		OR "pathName" = 'Dried-West-Coast-Sea-Cucumber-Box';
		UPDATE "Products"
		SET "type" = 'beche'
		WHERE "pathName" = 'Bêche-Sea-Cucumber-Supplement'
		OR "pathName" = 'Bêche-Sea-Cucumber-Supplement-Collagen-Women';
		UPDATE "Products"
		SET "type" = 'frozen-food'
		WHERE "pathName" = 'Sea-Cucumber-Fish-Maw-Chowder'
	`)

	pgm.sql(`
	INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f0afb46b-4077-4705-bb35-5e821b54566c', '847f7f49-c912-46a7-9472-4c57602b3959');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f0afb46b-4077-4705-bb35-5e821b54566c', 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9');
		INSERT INTO "Relations" ("productID", "relatedProductID")
		VALUES ('f0afb46b-4077-4705-bb35-5e821b54566c', 'f2411b6a-e1a1-47cd-b585-89703b16c559');
	`)
}

exports.down = pgm => {}
