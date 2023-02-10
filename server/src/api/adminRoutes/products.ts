import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { ADMIN_PRODUCT_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import { verifyAuth } from '../middlewares'
export default (app: Router) => {
	app.use('/admin', route)

	route.get(
		'/get_products',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const searchResult = await query(ADMIN_PRODUCT_QUERIES.GET_PRODUCTS, [])
			searchResult.data.forEach(product => {
				if (product.options) {
					product.options.forEach(option => {
						option.price = option.price.toFixed(2)
					})
				}
			})
			if (searchResult.count > 0) {
				res.status(200).json({
					data: searchResult.data,
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
	route.post(
		'/update_product_taxable',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { productTaxable, productId } = req.body
			const result = await query(ADMIN_PRODUCT_QUERIES.UPDATE_PRODUCT_TAXABLE, [
				productTaxable,
				productId
			])
			if (result.count > 0) {
				res.status(200).json({
					data: result.data[0],
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
	route.post(
		'/update_product_price',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { productPrice, productId, optionId } = req.body
			let result: any
			if (!optionId) {
				result = await query(ADMIN_PRODUCT_QUERIES.UPDATE_PRODUCT_PRICE, [
					productPrice,
					productId
				])
			} else {
				result = await query(
					ADMIN_PRODUCT_QUERIES.UPDATE_PRODUCT_OPTION_PRICE,
					[productPrice, productId, optionId]
				)
			}

			if (result.count > 0) {
				res.status(200).json({
					data: result.data[0],
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
	route.post(
		'/update_product_status',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const {
				productStatus,
				productId,
				statusDescriptionZh,
				statusDescriptionEn
			} = req.body
			const result = await query(ADMIN_PRODUCT_QUERIES.UPDATE_PRODUCT_STATUS, [
				productStatus,
				statusDescriptionEn,
				statusDescriptionZh,
				productId
			])
			if (result.count > 0) {
				res.status(200).json({
					data: result.data[0],
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
}
