/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/cover.jpg'
        where id='70faa11a-cafe-4346-b7dd-a25806d0c732';
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/cover.jpg'
        where id='0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
        delete from "Images"
        where "productID"='70faa11a-cafe-4346-b7dd-a25806d0c732';
        delete from "Images"
        where "productID"='0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
        insert into "Images" ("productID", "url", "priority")
		values ('70faa11a-cafe-4346-b7dd-a25806d0c732', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/front.jpg', 0);
        insert into "Images" ("productID", "url", "priority")
		values ('0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/black_gift_box/front.jpg', 0);
    `)
    pgm.sql(`
        update "Products"
        set "coverImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/chowder/cover.jpg'
        where id='f0afb46b-4077-4705-bb35-5e821b54566c';
        delete from "Images"
        where "productID"='f0afb46b-4077-4705-bb35-5e821b54566c';
        insert into "Images" ("productID", "url", "priority")
		values ('f0afb46b-4077-4705-bb35-5e821b54566c', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/red_gift_box/front.jpg', 0);
    `)
};

exports.down = pgm => {};
