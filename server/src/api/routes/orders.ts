import { Router, Request, Response } from 'express'
import query from '../../services/db'
import { generateOrderNumber } from '../../services/uuid'
import {
	handleOrderCalculate,
	getSaleTax,
	storeOrder
} from '../../services/order'
import { ORDER_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import moment from 'moment'

const route = Router()
export default (app: Router) => {
	app.use('/orders', route)

	route.post('/apply_coupon', async (req: Request, res: Response) => {
		const { code, domain } = req.body
		const currentTime = new Date()
		const today = moment.utc(currentTime)
		try {
			const searchResult = await query(ORDER_QUERIES.FIND_COUPON, [
				code,
				today,
				domain
			])
			if (searchResult.data.length > 0) {
				res.status(200).json({
					data: searchResult.data[0],
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		} catch (error) {
			res.status(500).json({
				status: RESPONSE_MESSAGE.ERROR,
				error: error
			})
		}
	})

	route.post('/create_order', async (req: Request, res: Response) => {
		const { email, addressShipping, products, coupon, domain } = req.body.order
		const orderNumber = generateOrderNumber()
		const addressFormated = {
			...addressShipping,
			street: addressShipping.street + addressShipping.streetExtra
		}
		try {
			const taxRate = getSaleTax(addressFormated)
			const {
				subtotal,
				discount,
				tax,
				taxAfterDiscount,
				shippingFee,
				totalPrice,
				productsFormated
			} = await handleOrderCalculate(
				products,
				taxRate,
				coupon,
				addressFormated,
				domain
			)
			const order = {
				orderNumber,
				email,
				subtotal,
				discount,
				tax,
				coupon,
				taxAfterDiscount,
				shippingFee,
				totalPrice,
				products: productsFormated,
				addressShipping: addressShipping,
				domain
			}
			const storeOrderResult = await storeOrder(order)
			res
				.status(200)
				.json({ status: RESPONSE_MESSAGE.SUCCESS, data: storeOrderResult })
		} catch (error) {
			console.error(error)
			res.json({ status: RESPONSE_MESSAGE.ERROR, data: error })
		}
	})
	route.post('/confirm_paid', (req: Request, res: Response) => {
		const { orderId } = req.body
		if (orderId) {
			query(ORDER_QUERIES.GET_ORDER, [orderId]).then(result => {
				if (result.data[0].status === 'paid') {
					res.status(200).json({
						status: 'success'
					})
				} else {
					res.json({
						status: 'fail'
					})
				}
			})
		}
	})
}
