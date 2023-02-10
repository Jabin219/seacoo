/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumns(
		'Products',
		{
			statusDescription: {
				type: 'text'
			},
			statusDescriptionZh: {
				type: 'text'
			}
		},
		{}
	)
	pgm.sql(`
	UPDATE "Products"
	SET "statusDescription" = 'Out of stock for 2-3 weeks'
	WHERE id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
	UPDATE "Products"
	SET "statusDescriptionZh" = '暂时缺货，大概需要2-3周补货时间'
	WHERE id = 'f0afb46b-4077-4705-bb35-5e821b54566c';
	`)
}

exports.down = pgm => {}
