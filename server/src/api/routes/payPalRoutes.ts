import { Router, Request, Response } from 'express'
import query from '../../services/db'
import { PAYMENT_METHOD, RESPONSE_MESSAGE } from '../../constant'
import { paypal, payPalClient } from '../../services/payPal'
import { ORDER_QUERIES } from '../../services/queries'
import { handleSendConfirmationEmail } from '../../services/mail'

const route = Router()
export default (app: Router) => {
	app.use('/orders/paypal', route)

	route.post('/create_order', async (req: Request, res: Response) => {
		const { orderId } = req.body
		try {
			const storeOrderResult = await query(
				ORDER_QUERIES.GET_ORDER_WITH_DETAILS_BY_ID,
				[orderId]
			)
			const storedOrder = storeOrderResult.data[0]
			// Construct a request object and set desired parameters
			// Here, OrdersCreateRequest() creates a POST request to /v2/checkout/orders
			const request = new paypal.orders.OrdersCreateRequest()
			request.headers['prefer'] = 'return=representation'
			request.prefer('return=representation')
			const requestBodyData = () => {
				return {
					intent: 'CAPTURE',
					purchase_units: [
						{
							invoice_id: storedOrder.orderNumber,
							custom_id: storedOrder.id,
							amount: {
								currency_code: 'CAD',
								value: storedOrder.totalPrice,
								breakdown: {
									item_total: {
										currency_code: 'CAD',
										value: storedOrder.subtotal
									},
									shipping: {
										currency_code: 'CAD',
										value: storedOrder.shippingFee
									},
									tax_total: {
										currency_code: 'CAD',
										value: storedOrder.tax
									},
									discount: {
										currency_code: 'CAD',
										value: (
											Number(storedOrder.subtotal) +
											Number(storedOrder.tax) +
											Number(storedOrder.shippingFee) -
											Number(storedOrder.totalPrice)
										).toFixed(2)
									}
								}
							},
							payee: {
								email: 'bin@rightsourcefood.com',
								payee_display_metadata: {
									brand_name: 'Right Source Group Ltd.'
								}
							},
							description: storedOrder.id,
							custom: storedOrder.id,
							items: storedOrder.products.map(product => {
								return {
									name: product.name,
									description: product.shortDescription,
									quantity: product.amount,
									unit_amount: {
										currency_code: 'CAD',
										value: product.price
									}
								}
							}),
							shipping_address: JSON.stringify(storedOrder.addressShipping)
						}
					]
				}
			}
			request.requestBody(requestBodyData())
			// Call API with your client and get a response for your call
			let payPalOrder
			try {
				payPalOrder = await payPalClient.execute(request)
			} catch (err) {
				console.error(err)
				return res.send(500)
			}
			query(ORDER_QUERIES.UPDATE_PAYMENT_METHOD, [
				storedOrder.id,
				PAYMENT_METHOD.PAYPAL
			])
			// Return a successful response to the client with the order ID
			res.status(200).json({
				status: RESPONSE_MESSAGE.SUCCESS,
				orderId: payPalOrder.result.id,
				orderNumber: storedOrder.orderNumber
			})
		} catch (error) {
			res.json({ status: RESPONSE_MESSAGE.ERROR, data: error })
		}
	})

	route.post(
		'/webhook_payment_completed',
		async (req: Request, res: Response) => {
			const result = req.body
			const orderIdPaidByPayPal = result.resource.custom_id
			if (result.resource.custom_id) {
				if (result.resource.status === 'COMPLETED') {
					query(ORDER_QUERIES.UPDATED_ORDER_TO_PAID, [orderIdPaidByPayPal])
					const getOrderResult = await query(ORDER_QUERIES.GET_ORDER, [
						orderIdPaidByPayPal
					])
					if (getOrderResult.data[0].couponID) {
						query(ORDER_QUERIES.DECREASE_COUPON_NUMBER_OF_USE, [
							getOrderResult.data[0].couponID
						])
					}
					handleSendConfirmationEmail(
						orderIdPaidByPayPal,
						getOrderResult.data[0].email
					)
					res.sendStatus(200)
				} else if (result.resource.status === 'PENDING') {
					console.error('payment pending!')
					res.sendStatus(200)
				} else {
					console.error('payment failed!')
					res.sendStatus(200)
				}
			}
			res.sendStatus(200)
		}
	)
}
