import React, { useState, useContext } from 'react'
import { FUNDING, PayPalButtons } from '@paypal/react-paypal-js'
import { createPayPalOrder } from 'api/order'
import { PaymentContext } from 'pages/Order/Payment'
import { useStyles } from './style'

import { Button, Backdrop, CircularProgress, Grid } from '@material-ui/core'
import { OrderContext } from 'pages/Order/OrderPage'
import { SnackContext } from 'context/SnackContextProvider'

const PayPalContainer = () => {
	const classes = useStyles()
	const { order, clearCart } = useContext(OrderContext)
	const { setResult, next, back } = useContext(PaymentContext)
	const [processing, setProcessing] = useState(false)
	const handleCreatePayPalOrder = async () => {
		const createOrderResult = await createPayPalOrder(order.id)
		return createOrderResult.orderId
	}
	const { showSnackbar } = useContext(SnackContext)
	const handleApprove = (data, actions) => {
		return actions.order.capture().then(details => {
			if (details.status === 'COMPLETED') {
				setResult({
					...details,
					status: 'success',
					time: details.update_time
				})
				clearCart()
				setProcessing(false)
				next()
				return
			} else {
				showSnackbar('payment-failed', 'error')
				return
			}
		})
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={5}>
				<Grid item xs={6} className='back-button-container'>
					<Button
						variant='outlined'
						color='primary'
						fullWidth
						className='button-back'
						onClick={() => {
							back()
						}}
					>
						Back
					</Button>
				</Grid>
				<Grid item xs={6} className='paypal-button-container'>
					<PayPalButtons
						fundingSource={FUNDING.PAYPAL}
						createOrder={handleCreatePayPalOrder}
						onApprove={handleApprove}
						onClick={() => {
							setProcessing(true)
						}}
						onCancel={() => {
							setProcessing(false)
						}}
						onError={() => {
							showSnackbar('payment-failed', 'error')
							return
						}}
						style={{ color: 'blue' }}
					/>
				</Grid>
			</Grid>

			{processing && (
				<Backdrop
					open={processing}
					className={classes.backdrop}
					onClick={() => {
						setProcessing(false)
					}}
				>
					<CircularProgress color='inherit' />
				</Backdrop>
			)}
		</div>
	)
}

export default PayPalContainer
