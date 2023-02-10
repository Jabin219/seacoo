/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/cover.jpg'
        where "pathName"='Dried-West-Coast-Sea-Cucumber-Bag';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/cover.jpg'
        where "pathName"='Dried-East-Coast-Sea-Cucumber-Whole-Bag';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/cover.jpg'
        where "pathName"='Dried-East-Coast-Sea-Cucumber-Whole-Box';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/cover.jpg'
        where "pathName"='Dried-West-Coast-Sea-Cucumber-Box';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/cover.jpg'
        where "pathName"='Dried-East-Coast-Sea-Cucumber-Split-Bag';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_powder/cover.jpg'
        where "pathName"='Bêche-Sea-Cucumber-Supplement';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/cover.jpg'
        where "pathName"='Bêche-Sea-Cucumber-Supplement-Collagen-Women';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/cover.jpg'
        where "pathName"='Dried-East-Coast-Sea-Cucumber-Split-Box';
    `)

    pgm.sql(`
        delete from "Images"
        where "productID"='5ad51049-fa32-43c1-99d9-f678e17125fb';
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/comparison.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/sample.jpg', 4);
        insert into "Images" ("productID", "url", "priority")
        values ('5ad51049-fa32-43c1-99d9-f678e17125fb', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/pf.jpg', 5);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='303517f2-aea8-4ee4-b7eb-b22dd16ddef9';
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/comparison.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/sample.jpg', 4);
        insert into "Images" ("productID", "url", "priority")
        values ('303517f2-aea8-4ee4-b7eb-b22dd16ddef9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/pf.jpg', 5);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='dc0c6198-797d-4ad2-a626-2410494b2e40';
        insert into "Images" ("productID", "url", "priority")
        values ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('dc0c6198-797d-4ad2-a626-2410494b2e40', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/pf.jpg', 4);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='6f16e1b5-35f8-43e0-a9a5-627f25fb9a36';
        insert into "Images" ("productID", "url", "priority")
        values ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/pf.jpg', 4);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='2959ade1-e357-44a6-9d40-4dd1d58da24e';
        insert into "Images" ("productID", "url", "priority")
        values ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('2959ade1-e357-44a6-9d40-4dd1d58da24e', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/pf.jpg', 4);
    `)
    pgm.sql(`
    delete from "Images"
    where "productID"='649c5ac5-e4d7-4e3a-875e-47ffd59990cd';
    insert into "Images" ("productID", "url", "priority")
    values ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/front.jpg', 0);
    insert into "Images" ("productID", "url", "priority")
    values ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/side.jpg', 1);
    insert into "Images" ("productID", "url", "priority")
    values ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/back.jpg', 2);
    insert into "Images" ("productID", "url", "priority")
    values ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/sample.jpg', 3);
    insert into "Images" ("productID", "url", "priority")
    values ('649c5ac5-e4d7-4e3a-875e-47ffd59990cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/pf.jpg', 4);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='a403296b-7c17-47d4-94a8-44bfebb954cd';
        insert into "Images" ("productID", "url", "priority")
        values ('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery1.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery2.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery3.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('a403296b-7c17-47d4-94a8-44bfebb954cd', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery4.jpg', 3);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='7f87ea9b-c652-40ad-82f4-17db00ce3542';
        insert into "Images" ("productID", "url", "priority")
        values ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_powder/single.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_powder/single-with-box.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_powder/with-bottle.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('7f87ea9b-c652-40ad-82f4-17db00ce3542', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_powder/with-hand.jpg', 3);
    `)
};

exports.down = pgm => {};