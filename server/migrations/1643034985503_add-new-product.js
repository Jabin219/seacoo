/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "type", "propertiesZh", "video", "videoImage")
        VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', '-', 'SEACOO 加拿大西海岸冷冻即食红刺参 盒装250g', '加拿大⻄海岸红刺参(又名阿拉斯加红刺参) 是一种中型海参，属于棘皮动物⻔，海参纲，楯手目，刺参科，仿刺参属，阿拉斯加红刺参 (也叫”红参")，与中国北方著名的的辽参 同科同属，海参筋粗壮，味道鲜美，营养高，为高端参种。 加拿大野生红刺参采用人工潜水捕捞的方法，潜水员潜入深海中 捕捉的新鲜红刺参，于当天用冷藏⻋运进我们的工厂进行原生态加工。经过严格的筛选、清理内脏、恒温蒸煮、无菌烘干几个步骤，加工出纯粹的“淡干”海参。', false, 45.00, 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_black_box/cover.jpg', 'published', 'CHINA', 'Rehydrated-West-Coast-Sea-Cucumber-Box', 'frozen-food', '西海岸红刺参 ｜ 野生海参 ｜ 天然抗氧化食品', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/black/video.mp4', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/black/video-preview.jpg');
    `)
    pgm.sql(`
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_black_box/front.png', 0);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_black_box/back.png', 1);
        INSERT INTO "Images" ("productID", "url", "priority")
        VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_black_box/pf.png', 2);
    `)
    pgm.sql(`
    	INSERT INTO "Relations" ("productID", "relatedProductID","priority")
    	VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', 'f2411b6a-e1a1-47cd-b585-89703b16c559', 0);
        INSERT INTO "Relations" ("productID", "relatedProductID","priority")
    	VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', '90d8485e-7111-4f5f-bbd5-762b52f41752', 1);
    	INSERT INTO "Relations" ("productID", "relatedProductID","priority")
    	VALUES ('b065455f-ace0-458b-b498-764e54cf6f85', '0b54360d-fd0f-4ca5-ae79-adaf2c4724c9', 2);
    `)
};

exports.down = pgm => {};