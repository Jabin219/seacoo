/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.sql(`
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/red/red-video.mp4'
	WHERE id = '847f7f49-c912-46a7-9472-4c57602b3959';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/red/red-video-preview.jpg'
	WHERE id = '847f7f49-c912-46a7-9472-4c57602b3959';
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/red/red-video.mp4'
	WHERE id = 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/red/red-video-preview.jpg'
	WHERE id = 'f6a98e0c-4847-4fbd-9948-62b5990dfdd1';
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/red/red-video.mp4'
	WHERE id = '70faa11a-cafe-4346-b7dd-a25806d0c732';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/red/red-video-preview.jpg'
	WHERE id = '70faa11a-cafe-4346-b7dd-a25806d0c732';
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/black/black-video.mp4'
	WHERE id = '0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/black/black-video-preview.jpg'
	WHERE id = '0b54360d-fd0f-4ca5-ae79-adaf2c4724c9';
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/black/black-video.mp4'
	WHERE id = '90d8485e-7111-4f5f-bbd5-762b52f41752';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/black/black-video-preview.jpg'
	WHERE id = '90d8485e-7111-4f5f-bbd5-762b52f41752';
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/black/black-video.mp4'
	WHERE id = 'f2411b6a-e1a1-47cd-b585-89703b16c559';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/black/black-video-preview.jpg'
	WHERE id = 'f2411b6a-e1a1-47cd-b585-89703b16c559';
	`)
}

exports.down = pgm => {}
