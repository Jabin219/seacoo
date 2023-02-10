import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { RESPONSE_MESSAGE } from '../../constant'
import { MAIL_QUERIES, SUBSCRIPTION_QUERIES } from '../../services/queries'
import { verifyAuth } from '../middlewares'

export default (app: Router) => {
	app.use('/admin', route)

	route.get(
		'/get_subscription_emails',
		verifyAuth(),
		async (req: Request, res: Response) => {
			const result = await query(
				SUBSCRIPTION_QUERIES.GET_ALL_SUBSCRIBE_EMAIL,
				[]
			)
			if (result.count > 0) {
				res.status(200).json({
					data: result.data,
					status: RESPONSE_MESSAGE.SUCCESS
				})
			} else {
				res.json({ status: RESPONSE_MESSAGE.NOT_FOUND })
			}
		}
	)
}
