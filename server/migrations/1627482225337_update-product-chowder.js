/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set "nameZh" = 'SEACOO野生海参鱼胶佛跳墙 (两盒装)', price = 76.00
        where id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
        update "Images"
        set priority = 2
        where id = '864491ea-53ce-475f-98fb-5758125b5647';
        update "Images"
        set priority = 0
        where id = 'ca7b2037-82bd-4759-8929-f668f02f7b7a';
    `)
};

exports.down = pgm => {};
