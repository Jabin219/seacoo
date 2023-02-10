import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { ADMIN_ORDER_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import { verifyAuth } from '../middlewares'
import { handleSendOrderShippedEmail } from '../../services/mail'
import moment from 'moment'

export default (app: Router) => {
	app.use('/admin', route)
	route.get(
		'/get_orders',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { page, date, status, orderNumber, domain } = req.query
			const offset = 10 * Number(page)
			try {
				let dateForSearch,
					nextDate,
					nextDateForSearch,
					result,
					orderNumberForSearch,
					domainForSearch
				if (date) {
					dateForSearch = new Date(date as string)
					nextDate = moment(dateForSearch).add(1, 'days')
					nextDateForSearch = new Date(nextDate)
				} else {
					dateForSearch = ''
					nextDateForSearch = ''
				}
				if (orderNumber) {
					orderNumberForSearch = orderNumber
				} else {
					orderNumberForSearch = ''
				}
				if (domain != 'all') {
					domainForSearch = domain
				} else {
					domainForSearch = ''
				}
				result = await query(ADMIN_ORDER_QUERIES.GET_ORDERS, [
					status,
					dateForSearch,
					nextDateForSearch,
					'%' + orderNumberForSearch + '%',
					offset + '',
					domainForSearch
				])
				if (result.count > 0) {
					res.status(200).json({
						data: result.data.slice(0, 10),
						hasNext: result.data[10] ? true : false,
						status: RESPONSE_MESSAGE.SUCCESS
					})
				} else {
					res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
				}
			} catch (error) {
				console.error(error)
			}
		}
	)

	route.get(
		'/unshipped_orders',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const searchResult = await query(
				ADMIN_ORDER_QUERIES.GET_UNSHIPPED_ORDERS,
				[]
			)
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
		'/update_shipped_order',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const {
				orderId,
				email,
				shippingMethod,
				trackingNumber,
				coldChainCarrier,
				trackingNumberColdChain
			} = req.body
			const result = await query(ADMIN_ORDER_QUERIES.UPDATE_SHIPPED_ORDER, [
				orderId
			])
			if (result.count > 0) {
				handleSendOrderShippedEmail(
					orderId,
					email,
					shippingMethod,
					trackingNumber,
					coldChainCarrier,
					trackingNumberColdChain
				)
				res.status(200).json({
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
	route.post(
		'/update_cancelled_order',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const { orderId, email } = req.body
			const result = await query(
				ADMIN_ORDER_QUERIES.UPDATE_ORDER_TO_CANCELLED,
				[orderId]
			)
			if (result.count > 0) {
				res.status(200).json({
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
}
