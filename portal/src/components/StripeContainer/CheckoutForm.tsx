import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { stripeOrder } from 'api/order'
import { CircularProgress, Button, makeStyles, Grid } from '@material-ui/core'
import { PaymentContext } from 'pages/Order/Payment'
import { OrderContext } from 'pages/Order/OrderPage'

const useStyles = makeStyles({
	root: {
		'& .StripeElement--invalid': {
			marginBottom: 10
		},
		'& .stripe_card-error': {
			position: 'static',
			margin: 0,
			marginLeft: 20,
			textAlign: 'left'
		}
	},
	buttons: {
		marginTop: 20,
		'& button': {
			textTransform: 'none',
			width: 312,
			height: 52,
			'& span': {
				fontSize: 16,
				lineHeight: '19px',
				letterSpacing: 0.19,
				textAlign: 'center'
			}
		}
	}
})

const CheckoutForm = () => {
	const classes = useStyles()
	const lng = useTranslation().i18n.language
	const [succeeded, setSucceeded] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [processing, setProcessing] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const stripe = useStripe()
	const elements = useElements()
	const { setResult, next, back } = useContext(PaymentContext)
	const { order, setOrder, clearCart } = useContext(OrderContext)
	const handleChange = async (event: any) => {
		setDisabled(event.empty)
		setError(event.error ? event.error.message : '')
	}

	const handleSubmit = (event: any) => {
		setProcessing(true)
		stripeOrder(order.id)
			.then(res => {
				if (res.data.status === 'success') {
					setOrder({
						...order,
						orderNumber: res.data.data.order.orderNumber
					})
					return res.data.data.clientSecret
				}
			})
			.then(async res => {
				event.preventDefault()

				if (!stripe || !elements) {
					setProcessing(false)
					setError('Error')
					return
				}
				const { email, addressShipping } = order
				const payload = await stripe.confirmCardPayment(res, {
					payment_method: {
						card: elements.getElement(CardElement) as any,
						billing_details:
							(addressShipping as any) &&
							email &&
							({
								name: addressShipping.recipient,
								email: email,
								phone: addressShipping.phone || null
							} as any)
					},
					shipping: addressShipping && {
						address: {
							line1: `${addressShipping.street}
								, 
								${addressShipping.city}
								, 
								${addressShipping.province}
								, 
								${addressShipping.country}`,
							postal_code: addressShipping.postalCode
						},
						name: addressShipping.recipient,
						phone: addressShipping.phone
					}
				})

				if (payload.error) {
					setError(`Payment failed ${payload.error.message}`)
					setProcessing(false)
				} else {
					setError(null)
					if (
						payload.paymentIntent &&
						payload.paymentIntent.status === 'succeeded'
					) {
						// Show a success message to your customer
						// There's a risk of the customer closing the window before callback
						// execution. Set up a webhook or plugin to listen for the
						// payment_intent.succeeded event that handles any business critical
						// post-payment actions.
						setSucceeded(true)
						setResult({
							...payload.paymentIntent,
							status: 'success',
							time: new Date(
								payload.paymentIntent.created * 1000
							).toLocaleString()
						})
						clearCart()
						next()
					}
					setProcessing(false)
				}
			})
	}

	return (
		<div className={classes.root}>
			<CardElement options={{ hidePostalCode: true }} onChange={handleChange} />
			{error && (
				<div className='stripe_card-error' role='alert'>
					{error}
				</div>
			)}
			<div className={classes.buttons}>
				<Grid container spacing={10}>
					<Grid item xs>
						<Button
							className='btn-back'
							variant='outlined'
							color='primary'
							onClick={back}
						>
							{lng === 'en' ? 'back' : '返回'}
						</Button>
					</Grid>
					<Grid item xs>
						<Button
							className='btn-confirm'
							variant='contained'
							color='primary'
							disabled={processing || disabled || succeeded || !stripe}
							onClick={handleSubmit}
						>
							{lng === 'en' ? 'Confirm' : '确认下单'}
							{processing && (
								<CircularProgress style={{ position: 'absolute' }} size={24} />
							)}
						</Button>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default CheckoutForm
