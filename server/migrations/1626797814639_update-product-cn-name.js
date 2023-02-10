/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set "nameZh" = 'SEACOO 加拿大东海岸淡干整筒北极参 袋装454g'
        where "id"='847f7f49-c912-46a7-9472-4c57602b3959';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大东海岸淡干整筒北极参 礼盒装454g'
        where "id"='f6a98e0c-4847-4fbd-9948-62b5990dfdd1';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大东海岸淡干整筒北极参 精品礼盒装454g'
        where "id"='70faa11a-cafe-4346-b7dd-a25806d0c732';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大东海岸淡干开口北极参 袋装454g'
        where "id"='ac043eb2-da20-4e31-8a1a-8a4d8ab448c9';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大东海岸淡干开口北极参 礼盒装454g'
        where "id"='4eb149ec-1b49-4ba2-8297-a67e166e548a';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大西海岸红刺参 袋装454g'
        where "id"='f2411b6a-e1a1-47cd-b585-89703b16c559';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大西海岸红刺参 礼盒装454g'
        where "id"='90d8485e-7111-4f5f-bbd5-762b52f41752';
        update "Products"
        set "nameZh" = 'SEACOO 加拿大西海岸红刺参 精品礼盒装454g'
        where "id"='0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
        update "Products"
        set "nameZh" = 'Bêche 海参+胶原蛋白冲剂'
        where "id"='d9604ea5-1678-4947-82e5-17a5dc7d2c38';
        update "Products"
        set "nameZh" = 'SEACOO 野生海参鱼胶佛跳墙'
        where "id"='f0afb46b-4077-4705-bb35-5e821b54566c';
        update "Products"
        set "nameZh" = 'SEACOO 速冻北极参 猪肉韭菜饺子'
        where "id"='69639e5c-ec35-4c46-8201-76d20a177bf3';
        update "Products"
        set "nameZh" = 'SEACOO 速冻北极参 猪肉白菜饺子'
        where "id"='122f77f8-50c3-456a-8ed6-c7e32b4e2832';
    `)
};

exports.down = pgm => {};
