import React, { useContext, useState } from 'react'
import { createOttPayOrder, confirmPaidOrder } from 'api/order'
import { PaymentContext } from 'pages/Order/Payment'
import QRCode from 'react-qr-code'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import {
	CircularProgress,
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	Backdrop,
	Typography,
	Grid
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { OrderContext } from 'pages/Order/OrderPage'
import { PaymentType } from 'constant'
interface Props {
	bizType: string
}
const OttPayContainer = ({ bizType }: Props) => {
	const classes = useStyles()
	const { t } = useTranslation()
	const { paymentResult, setResult, next, back } = useContext(PaymentContext)
	const { order, confirmTimer, setConfirmTimer, clearCart } = useContext(
		OrderContext
	)
	const [backDropOpen, setBackDropOpen] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	const [qrCodeUrl, setQrCodeUrl] = useState('')
	let timer
	const handleConfirm = async () => {
		setBackDropOpen(true)
		const createOrderResult = await createOttPayOrder(order.id, bizType)
		setQrCodeUrl(createOrderResult.data.codeUrl)
		timer = setInterval(confirmPaid, 3000)
		setConfirmTimer(timer)
		setDialogOpen(true)
	}
	const confirmPaid = async () => {
		const confirmResult = await confirmPaidOrder(order.id)
		const { status } = confirmResult.data
		if (status === 'success') {
			setResult({
				...paymentResult,
				time: order.createdAt,
				status: 'success'
			})
			clearCart()
			setQrCodeUrl('')
			setBackDropOpen(false)
			next()
		}
	}
	const handleClose = () => {
		if (confirmTimer) {
			clearInterval(confirmTimer)
		}
		setQrCodeUrl('')
		setDialogOpen(false)
		setBackDropOpen(false)
	}
	return (
		<div className={classes.root}>
			<Grid container spacing={5}>
				<Grid item xs={6} className='back-button-container'>
					<Button
						className='btn-back'
						variant='outlined'
						color='primary'
						onClick={() => {
							back()
						}}
						fullWidth
					>
						{t('Back')}
					</Button>
				</Grid>
				<Grid item xs={6} className='ott-button-container'>
					{bizType === PaymentType.Ali && (
						<Button
							className='btn-ali'
							variant='contained'
							onClick={handleConfirm}
							disabled={backDropOpen}
							fullWidth
						>
							<img src='/images/order/buttons/AliPay.png' alt='WeChatPay' />
						</Button>
					)}
					{bizType === PaymentType.WeChat && (
						<Button
							className='btn-wechat'
							variant='contained'
							onClick={handleConfirm}
							disabled={backDropOpen}
							fullWidth
						>
							<img src='/images/order/buttons/WeChatPay.png' alt='WeChatPay' />
						</Button>
					)}
				</Grid>
			</Grid>
			<Backdrop open={backDropOpen} className={classes.backdrop}>
				<CircularProgress color='inherit' />
			</Backdrop>
			{qrCodeUrl && (
				<Dialog
					open={dialogOpen}
					onClose={handleClose}
					onBackdropClick={handleClose}
				>
					<DialogActions onClick={handleClose}>
						<Button>
							<Close style={{ fontSize: 20 }} />
						</Button>
					</DialogActions>
					{bizType === PaymentType.WeChat && (
						<DialogTitle>
							<div className='dialog-title-container dialog-title-container-wechat'>
								<img
									src='/images/order/dialogs/WeChatPay.png'
									alt='WeChatPay'
								/>
								<Typography variant='caption'>
									{t('Please use WeChat app to scan QR code to pay')}
								</Typography>
							</div>
						</DialogTitle>
					)}
					{bizType === PaymentType.Ali && (
						<DialogTitle>
							<div className='dialog-title-container dialog-title-container-ali'>
								<img src='/images/order/dialogs/AliPay.png' alt='AliPay' />
								<Typography variant='caption'>
									{t('Please use Alipay app to scan QR code to pay')}
								</Typography>
							</div>
						</DialogTitle>
					)}
					<div className='qr-code-container'>
						<QRCode value={qrCodeUrl} />
					</div>
				</Dialog>
			)}
		</div>
	)
}
export default OttPayContainer
