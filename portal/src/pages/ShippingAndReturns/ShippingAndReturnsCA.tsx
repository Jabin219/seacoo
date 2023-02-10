import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'

const ShippingAndReturnsCA = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.shippingReturns}>
			<Typography variant='h4' className='title'>
				{t('Shipping & Returns')}
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Free Shipping on Order Over CAD $100 within Canada')}
				</Typography>
				<Typography>
					{t(
						'Free Shipping for single order CAD $100 or more before shipping and tax. This offer valid for orders shipping to Canada only. For the order under CAD $100, there is a shipping charge of CAD $10.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Free Shipping on Order Over CAD $200 within US')}
				</Typography>
				<Typography>
					{t(
						'Free Shipping for single order CAD $200 or more before shipping and tax. This offer valid for orders shipping to US only. CAD $10 shipping fee will be charged for the order from CAD $100 to $200. For the order under CAD $100, there is a shipping charge of CAD $20.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) How do I cancel my order?')}
				</Typography>
				<Typography>
					{t(
						'A) If your order has not yet been shipped, you may still be able to cancel it. Reach out to us by email at info@seacoo.com and specify your order number in the message.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t("Q) How can I return the products if I don't satisfy with them?")}
				</Typography>
				<Typography>
					{t(
						'A) If you are unsatisfied with your order for any reason, please contact us at info@seacoo.com and providing your order number and as much detail as possible to assist you.'
					)}
				</Typography>
				<br />
				<Typography>
					{t(
						'Please note, we can only process products in the same order per return request. Multiple items from multiple orders will need to be processed separately. Once we reviewed your return request, we will send you the instructions for further steps. And our technician of customer care will process your request within 2-3 business days.'
					)}
				</Typography>
				<br />
				<Typography>
					{t(
						'After receiving the confirmation letter of exchange or return from us, you may need to package the item(s) along with all original packaging and accessories, then drop it off at Canada Post, UPS or FedEx locations, and send them back to us.'
					)}
				</Typography>
				<br />
				<Typography>
					{t(
						"You'll receive a refund or replacement once we receive the item. The return shipping cost may be at your own expense upon review by Seacoo. Seacoo owns the right not to pay any mailing fee during the returning and exchanging process."
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) When can I expect my order?')}
				</Typography>
				<Typography>
					{t(
						'A) All orders are shipped via Canada Post, UPS or FedEx. Orders shipped through Standard or Free Shipping are shipped within 3 business days. 1 to 7 business days for delivery within Canada. The actual delivery date depends on your location.'
					)}
				</Typography>
				<Typography>
					{t(
						'**Due to the current global health crisis, we cannot guarantee delivery dates.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t(
						"Q) Can I update my shipping address for my order if it's been shipped?"
					)}
				</Typography>
				<Typography>
					{t(
						'A) We are unable to reroute an order once it is in transit. If your order is returned to us by the delivery company, we will contact you to confirm your shipping address.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) Where can I buy the products from Seacoo?')}
				</Typography>
				<Typography>
					{t('A) Our products are sold on our website seacoo.com.')}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) Can I get a refund after returning the products?')}
				</Typography>
				<Typography>
					{t(
						'A) Once we receive your item, a refund is initiated immediately. If you canceled a pickup item and billed for it, we immediately initiate your refund after submitting your cancellation request. The way your refund is processed depends on your original payment method.'
					)}
				</Typography>
				<Typography>
					{t(
						'If you paid by credit card, refunds will be sent to the card-issuing bank within five business days of receipt of the returned item or cancellation request. Please contact the card-issuing bank with questions about when the credit will be posted to your account.'
					)}
				</Typography>
			</div>
			<br />
			<br />
		</div>
	)
}

export default ShippingAndReturnsCA
