/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set price = '90'
        where id = 'ac043eb2-da20-4e31-8a1a-8a4d8ab448c9';
        update "Products"
        set price = '95'
        where id = '4eb149ec-1b49-4ba2-8297-a67e166e548a';
        update "Products"
        set price = '450'
        where id = 'f2411b6a-e1a1-47cd-b585-89703b16c559';
        update "Products"
        set price = '455'
        where id = '90d8485e-7111-4f5f-bbd5-762b52f41752';
        update "Products"
        set price = '15'
        where id = '820bb537-9210-41a6-8890-c858e37c5d3d';
        update "Products"
        set price = '80'
        where id = 'd9604ea5-1678-4947-82e5-17a5dc7d2c38';
        update "Products"
        set price = '15'
        where id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
        update "Products"
        set price = '11.5'
        where id = '69639e5c-ec35-4c46-8201-76d20a177bf3';
        update "Products"
        set price = '11.5'
        where id = '122f77f8-50c3-456a-8ed6-c7e32b4e2832';
    `)
    pgm.sql(`
        update "Options"
        set price = '185'
        where id = '6cb47323-f871-4086-9914-5086c30366bc';
        update "Options"
        set price = '215'
        where id = '57d8201a-effe-49d4-9997-306f0fd73c46';
        update "Options"
        set price = '245'
        where id = '8526be38-a890-4dd0-9c22-a7f385fa208a';
        update "Options"
        set price = '190'
        where id = '851aef6f-acc6-4dd3-a4d5-272609f342cc';
        update "Options"
        set price = '220'
        where id = 'de30909a-86b5-484a-a9ab-0b0f59038212';
        update "Options"
        set price = '250'
        where id = 'f997b2dc-5a43-42f1-ae7a-502c81a27a7b';
        update "Options"
        set price = '195'
        where id = 'e57729c4-6ebc-491f-b516-e0ae55bd13a3';
        update "Options"
        set price = '225'
        where id = 'b980a1fa-2eb0-4914-ae5e-d1a1318a18ef';
        update "Options"
        set price = '255'
        where id = '2f88997a-1d4e-47a7-9232-26d62c7f7b33';
    `)
};

exports.down = pgm => {};