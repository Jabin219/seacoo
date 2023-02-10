/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns(
		'Products',
		{
			video: {
				type: 'text'
			},
			videoImage: {
				type: 'text'
			}
		},
		{}
	)
	pgm.sql(`
	UPDATE "Products"
	SET video = 'https://dev.seacoo.com/src/佛跳墙/video.mp4'
	WHERE id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
	UPDATE "Products"
	SET "videoImage" = 'https://dev.seacoo.com/src/佛跳墙/video-cover-image.jpg'
	WHERE id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
	`)
}

exports.down = pgm => {}
