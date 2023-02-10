/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
        UPDATE "Products"
        SET "shortDescriptionZh" = '重量: 454g
        捕捞区域: 大⻄洋
        捕捞: 野生
        状态: 干品(淡干)', "shortDescription" = 'Weight: 454g
        Harvest Area: Atlantic Ocean Harvest: Wild
        Status: Dry'
        WHERE id = '5ad51049-fa32-43c1-99d9-f678e17125fb';

        UPDATE "Products"
        SET "shortDescriptionZh" = '重量: 454g
        捕捞区域: 大⻄洋
        捕捞: 野生
        状态: 干品(淡干)', "shortDescription" = 'Weight: 454g
        Harvest Area: Atlantic Ocean Harvest: Wild
        Status: Dry'
        WHERE id = '303517f2-aea8-4ee4-b7eb-b22dd16ddef9'
    `)
}

exports.down = pgm => {}
