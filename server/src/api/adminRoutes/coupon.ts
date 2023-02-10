import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { ORDER_QUERIES, ADMIN_COUPON_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import { verifyAuth } from '../middlewares'

export default (app: Router) => {
	app.use('/admin', route)

	route.post(
		'/create_percentage_coupon',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const {
				code,
				discountPercentage,
				numberOfUse,
				comment,
				expireTime,
				startTime,
				domain
			} = req.body
			try {
				const result = await query(ORDER_QUERIES.CREATE_COUPON, [
					code,
					'discount',
					discountPercentage as number,
					'enabled',
					comment,
					numberOfUse,
					expireTime,
					startTime,
					domain
				])
				if (result.count > 0) {
					res.status(200).json({
						data: result.data[0],
						status: RESPONSE_MESSAGE.SUCCESS
					})
				} else {
					res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
				}
			} catch (err) {
				console.error(err)
				res.status(200).json({
					status: 'fail'
				})
			}
		}
	)

	route.post(
		'/disable_coupon',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { couponId } = req.body
			const result = await query(ORDER_QUERIES.DISABLE_COUPON, [couponId])
			if (result && result.count > 0) {
				res.status(200).json({
					data: result.data[0],
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)

	route.get(
		'/get_coupons_with_orders',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { page } = req.query
			const offset = 20 * Number(page)
			const searchResult = await query(
				ADMIN_COUPON_QUERIES.GET_COUPONS_WITH_ORDERS,
				[offset + '']
			)
			if (searchResult.count > 0) {
				res.status(200).json({
					data: searchResult.data.slice(0, 20),
					hasNext: searchResult.data[20] ? true : false,
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
}
