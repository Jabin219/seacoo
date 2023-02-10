import { Router, Request, Response } from 'express'
const route = Router()
import { handleSendConfirmationEmail } from '../../services/mail'

export default (app: Router) => {
	app.use('/test', route)
	route.post('/email', async (req: Request, res: Response) => {
		handleSendConfirmationEmail(
			req.body.orderID,
			req.body.toEmail
			// req.body.shippingMethod,
			// req.body.trackingNumber
		)
	})
}
