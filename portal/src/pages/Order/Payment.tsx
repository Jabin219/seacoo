import React, { useState } from 'react'
import {
	Typography,
	RadioGroup,
	Radio,
	FormControlLabel,
	FormControl,
	Divider
} from '@material-ui/core'
import { PaymentMethodLabel, PaymentType } from 'constant'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import StripeContainer from 'components/StripeContainer'
import PayPalContainer from 'components/PayPalContainer'
import OttPayContainer from 'components/OttPayContainer'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { isSeacooCN } from 'utils'
interface Props {
	next: () => void
	back: () => void
	setResult: (result: any) => void
	paymentResult: any
}
const PaymentContext = React.createContext<any>(null)
const Payment = ({ next, back, setResult, paymentResult }: Props) => {
	const classes = useStyles()
	const { t } = useTranslation()
	const [paymentMethod, setPaymentMethod] = useState(
		isSeacooCN() ? PaymentMethodLabel.WECHATPAY : PaymentMethodLabel.VISA
	)
	return (
		<PaymentContext.Provider value={{ paymentResult, setResult, next, back }}>
			<div className={classes.card}>
				<div className='header'>
					<Typography variant='h5' className='title'>
						{t('PAYMENT METHOD')}
					</Typography>
				</div>
				<Divider />
				<FormControl className={classes.payment}>
					<RadioGroup
						value={paymentMethod}
						onChange={e => setPaymentMethod(e.target.value)}
					>
						{!isSeacooCN() && (
							<>
								<div className='radioContainer'>
									<FormControlLabel
										value={PaymentMethodLabel.VISA}
										control={<Radio color='primary' />}
										label={t('Credit Card')}
									/>
									<img
										className='logo masterCard'
										src='/images/icon/mastercard.png'
										alt='master card'
									></img>
									<img
										className='logo visa'
										src='/images/icon/visa.png'
										alt='visa'
									></img>
								</div>
								<div className='radioContainer'>
									<FormControlLabel
										value={PaymentMethodLabel.PAYPAL}
										control={<Radio color='primary' />}
										label={t('PayPal')}
									/>
									<img
										className='logo paypal'
										src='/images/icon/paypal.png'
										alt='paypal'
										style={{ height: '25px' }}
									></img>
								</div>
								<div className='radioContainer'>
									<FormControlLabel
										value={PaymentMethodLabel.ALIPAY}
										control={<Radio color='primary' />}
										label={t('Ali Pay')}
									/>
									<img
										className='logo alipay'
										src='/images/icon/alipay.png'
										alt='alipay'
									></img>
								</div>
							</>
						)}
						<div className='radioContainer'>
							<FormControlLabel
								value={PaymentMethodLabel.WECHATPAY}
								control={<Radio color='primary' />}
								label={t('WeChat Pay')}
							/>
							<img
								className='logo wechat'
								src='/images/icon/wechat.png'
								alt='wechat'
							></img>
						</div>
					</RadioGroup>
				</FormControl>
			</div>
			<div className={classes.card}>
				<div className='header'>
					<Typography variant='h5' className='title'>
						{t(paymentMethod).toUpperCase()}
					</Typography>
				</div>
				<Divider />
				<div className={classes.payment}>
					{paymentMethod === PaymentMethodLabel.VISA && <StripeContainer />}
					{paymentMethod === PaymentMethodLabel.PAYPAL && (
						<PayPalScriptProvider
							options={{
								'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
								components: 'buttons',
								intent: 'capture',
								currency: 'CAD'
							}}
						>
							<PayPalContainer />
						</PayPalScriptProvider>
					)}
					{paymentMethod === PaymentMethodLabel.ALIPAY && (
						<OttPayContainer bizType={PaymentType.Ali} />
					)}
					{paymentMethod === PaymentMethodLabel.WECHATPAY && (
						<OttPayContainer bizType={PaymentType.WeChat} />
					)}
				</div>
			</div>
		</PaymentContext.Provider>
	)
}
export default Payment
export { PaymentContext }
