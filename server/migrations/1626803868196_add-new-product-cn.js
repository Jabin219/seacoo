/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.sql(`
		INSERT INTO "Products" ("id", "name", "nameZh", "descriptionZh", "taxable", "price", "coverImage", "status", "country", "pathName", "propertiesZh", "type")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', '-', 'SEACOO 加拿大东海岸冷冻泡发北极参 袋装250g', '东海岸北极海参(学名:Cucumaria frondosa)产于加拿大 东部沿海，生⻓在水下30米左右的海底。该海域终年人迹罕⻅ ，周围无任何工业，相较于中国渤海、⻩海等海参产区可以说 是真正意义上的“零污染”。加拿大北极参产区海域水温最高 不超过14°C，冬季表面结冰，属“冻海”，在这种环境下，海参⻓期处于休眠或半休眠状态，生⻓周期极⻓，其体内的营养物质含量也要比“温水”环境中生⻓的海参要高。', false, 68.00, 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_red_bag/cover.jpg', 'published', 'CHINA', 'Rehydrated-East-Coast-Sea-Cucumber-Bag', '东海岸北极参 ｜ 野生海参 ｜ 天然抗氧化食品', 'frozen-food');
	`)
	pgm.sql(`
		INSERT INTO "Images" ("productID", "url","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_red_bag/front.jpg', 0);
        INSERT INTO "Images" ("productID", "url","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_red_bag/back.jpg', 1);
		INSERT INTO "Images" ("productID", "url","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/rehydrated_red_bag/pf.jpg', 2);
	`)
	pgm.sql(`
		INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', '847f7f49-c912-46a7-9472-4c57602b3959', 0);
        INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1', 1);
		INSERT INTO "Relations" ("productID", "relatedProductID","priority")
		VALUES ('820bb537-9210-41a6-8890-c858e37c5d3d', '70faa11a-cafe-4346-b7dd-a25806d0c732', 2);
	`)
	pgm.sql(`
	update "Products"
	set "video" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/red/video.mp4'
	where "id" = '820bb537-9210-41a6-8890-c858e37c5d3d';
	update "Products"
	set "videoImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/red/video-preview.jpg'
	where "id" = '820bb537-9210-41a6-8890-c858e37c5d3d';
	`)
	pgm.sql(`
	update "Products"
	set "video" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/red/video.mp4'
	where "id" = '820bb537-9210-41a6-8890-c858e37c5d3d';
	update "Products"
	set "videoImage" = 'https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/red/video-preview.jpg'
	where "id" = '820bb537-9210-41a6-8890-c858e37c5d3d';
	`)
};

exports.down = pgm => {};