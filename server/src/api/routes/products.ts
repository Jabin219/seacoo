import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { PRODUCT_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import { handleSendNewReview } from '../../services/mail'

export default (app: Router) => {
	app.use('/products', route)

	route.get('/all', async (req: Request, res: Response) => {
		const { country } = req.query
		const productsResult = await query(PRODUCT_QUERIES.GET_PRODUCTS, [
			country as string
		])
		if (productsResult.data.length > 0) {
			res.status(200).json({
				status: RESPONSE_MESSAGE.SUCCESS,
				data: productsResult.data
			})
		} else {
			res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
		}
	})

	route.get('/', async (req: Request, res: Response) => {
		const { id } = req.query
		const productResult = await query(PRODUCT_QUERIES.GET_PRODUCT, [
			id as string
		])
		if (productResult.data.length > 0) {
			res.status(200).json({
				data: productResult.data[0],
				status: RESPONSE_MESSAGE.SUCCESS
			})
		} else {
			res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
		}
	})
	route.post('/review', async (req: Request, res: Response) => {
		const { comment } = req.body

		handleSendNewReview(comment)
		res.status(200).json({
			status: RESPONSE_MESSAGE.SUCCESS
		})
	})
	route.get('/beche_powder', async (req: Request, res: Response) => {
		const productResult = await query(PRODUCT_QUERIES.GET_BECHE, [])
		res.status(200).json({
			data: productResult.data[0],
			status: RESPONSE_MESSAGE.SUCCESS
		})
	})
}
