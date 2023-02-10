/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
		UPDATE "Products"
		SET "pathName" = 'Dried-East-Coast-Sea-Cucumber-Whole-Bag'
		WHERE id = '303517f2-aea8-4ee4-b7eb-b22dd16ddef9'
		OR id = 'f2411b6a-e1a1-47cd-b585-89703b16c559';
		UPDATE "Products"
		SET "pathName" = 'Dried-West-Coast-Sea-Cucumber-Bag'
		WHERE id = '2959ade1-e357-44a6-9d40-4dd1d58da24e'
		OR id = '847f7f49-c912-46a7-9472-4c57602b3959';
		UPDATE "Products"
		SET "pathName" = 'Dried-East-Coast-Sea-Cucumber-Whole-Box'
		WHERE id = '5ad51049-fa32-43c1-99d9-f678e17125fb'
		OR id = 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1';
		UPDATE "Products"
		SET "pathName" = 'Dried-West-Coast-Sea-Cucumber-Box'
		WHERE id = '649c5ac5-e4d7-4e3a-875e-47ffd59990cd'
		OR id = '90d8485e-7111-4f5f-bbd5-762b52f41752';
		UPDATE "Products"
		SET "pathName" = 'Dried-East-Coast-Sea-Cucumber-Split-Bag'
		WHERE id = '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36'
		OR id = 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9';
		UPDATE "Products"
		SET "pathName" = 'Bêche-Sea-Cucumber-Supplement'
		WHERE id = '7f87ea9b-c652-40ad-82f4-17db00ce3542';
		UPDATE "Products"
		SET "pathName" = 'Bêche-Sea-Cucumber-Supplement-Collagen-Women'
		WHERE id = 'a403296b-7c17-47d4-94a8-44bfebb954cd'
		OR id = 'd9604ea5-1678-4947-82e5-17a5dc7d2c38';
		UPDATE "Products"
		SET "pathName" = 'Dried-East-Coast-Sea-Cucumber-Split-Box'
		WHERE id = 'dc0c6198-797d-4ad2-a626-2410494b2e40'
		OR id = '4eb149ec-1b49-4ba2-8297-a67e166e548a';
	`)
}

exports.down = pgm => {}
