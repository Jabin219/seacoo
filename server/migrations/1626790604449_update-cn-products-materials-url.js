/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    delete from "Images"
    where "productID"='f6a98e0c-4847-4fbd-9948-62b5990dfdd1';
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/front.jpg', 0);
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/side.jpg', 1);
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/back.jpg', 2);
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/comparison-cn.jpg', 3);
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/sample.jpg', 4);
    insert into "Images" ("productID", "url", "priority")
    values ('f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_box/pf.jpg', 5);
    `)
    pgm.sql(`
    delete from "Images"
        where "productID"='f2411b6a-e1a1-47cd-b585-89703b16c559';
        insert into "Images" ("productID", "url", "priority")
        values ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('f2411b6a-e1a1-47cd-b585-89703b16c559', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_bag/pf.jpg', 4);
    `)
    pgm.sql(`
    update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/cover.jpg'
        where "pathName"='Sea-Cucumber-Fish-Maw-Chowder';
    update "Products"
        set "propertiesZh" = '即食美味 ｜ 四季进补 ｜ 高端养生佳品'
        where "pathName"='Sea-Cucumber-Fish-Maw-Chowder';
    delete from "Images"
        where "productID"='f0afb46b-4077-4705-bb35-5e821b54566c';
        insert into "Images" ("productID", "url", "priority")
        values ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/gallery1.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/gallery2.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/gallery3.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/gallery4.jpg', 3);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='d9604ea5-1678-4947-82e5-17a5dc7d2c38';
        insert into "Images" ("productID", "url", "priority")
        values ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery1.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery2.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery3.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('d9604ea5-1678-4947-82e5-17a5dc7d2c38', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/beche_collagen/gallery4.jpg', 3);
    `)
    pgm.sql(`
    delete from "Images"
    where "productID"='ac043eb2-da20-4e31-8a1a-8a4d8ab448c9';
    insert into "Images" ("productID", "url", "priority")
    values ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/front.jpg', 0);
    insert into "Images" ("productID", "url", "priority")
    values ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/side.jpg', 1);
    insert into "Images" ("productID", "url", "priority")
    values ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/back.jpg', 2);
    insert into "Images" ("productID", "url", "priority")
    values ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/sample.jpg', 3);
    insert into "Images" ("productID", "url", "priority")
    values ('ac043eb2-da20-4e31-8a1a-8a4d8ab448c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_bag/pf.jpg', 4);
    `)
    pgm.sql(`
    delete from "Images"
    where "productID"='90d8485e-7111-4f5f-bbd5-762b52f41752';
    insert into "Images" ("productID", "url", "priority")
    values ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/front.jpg', 0);
    insert into "Images" ("productID", "url", "priority")
    values ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/side.jpg', 1);
    insert into "Images" ("productID", "url", "priority")
    values ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/back.jpg', 2);
    insert into "Images" ("productID", "url", "priority")
    values ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/sample.jpg', 3);
    insert into "Images" ("productID", "url", "priority")
    values ('90d8485e-7111-4f5f-bbd5-762b52f41752', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_box/pf.jpg', 4);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='847f7f49-c912-46a7-9472-4c57602b3959';
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/comparison-cn.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/sample.jpg', 4);
        insert into "Images" ("productID", "url", "priority")
        values ('847f7f49-c912-46a7-9472-4c57602b3959', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_bag/pf.jpg', 5);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='4eb149ec-1b49-4ba2-8297-a67e166e548a';
        insert into "Images" ("productID", "url", "priority")
        values ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('4eb149ec-1b49-4ba2-8297-a67e166e548a', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/blue_box/pf.jpg', 4);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='70faa11a-cafe-4346-b7dd-a25806d0c732';
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/comparison-cn.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/sample.jpg', 4);
        insert into "Images" ("productID", "url", "priority")
        values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/pf.jpg', 5);
    `)
    pgm.sql(`
        delete from "Images"
        where "productID"='0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
        insert into "Images" ("productID", "url", "priority")
        values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
        values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/side.jpg', 1);
        insert into "Images" ("productID", "url", "priority")
        values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/back.jpg', 2);
        insert into "Images" ("productID", "url", "priority")
        values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/sample.jpg', 3);
        insert into "Images" ("productID", "url", "priority")
        values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/pf.jpg', 4);
    `)
};

exports.down = pgm => {};
