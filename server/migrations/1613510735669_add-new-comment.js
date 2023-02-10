/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
          INSERT INTO "Comments" ("productID", "content") VALUES
          ('5ad51049-fa32-43c1-99d9-f678e17125fb', '真不错');
          INSERT INTO "Comments" ("productID", "content") VALUES
          ('5ad51049-fa32-43c1-99d9-f678e17125fb', '啊哈哈哈哈哈哈哈');
          INSERT INTO "Comments" ("productID", "content") VALUES
          ('5ad51049-fa32-43c1-99d9-f678e17125fb', '咦嘻嘻嘻嘻嘻嘻 好！！！！！！');
          INSERT INTO "Comments" ("productID", "content") VALUES
          ('5ad51049-fa32-43c1-99d9-f678e17125fb', '吃完了还想吃');
         `)
}

exports.down = pgm => {}
