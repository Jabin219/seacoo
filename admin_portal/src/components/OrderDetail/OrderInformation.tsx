import React from 'react'
import {
	Button,
	Grid,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Typography
} from '@material-ui/core'
import moment from 'moment'
import { Order } from 'models'
import PrintIcon from '@material-ui/icons/Print'
import { makeStyles } from '@material-ui/core/styles'
import { productPricingDetail } from 'constant'
import { getCurrencySymbol, getPayMethod } from 'utils'
const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: 110,
		maxHeight: 110,
		overflow: 'auto'
	}
}))
interface Props {
	orderToDisplay: Order
	entrance: string
}
const OrderInformation = ({ orderToDisplay, entrance }: Props) => {
	const classes = useStyles()
	const discount = (
		Number(orderToDisplay.subtotal) +
		Number(orderToDisplay.shippingFee) +
		Number(orderToDisplay.tax) -
		Number(orderToDisplay.totalPrice)
	).toFixed(2)
	const country = orderToDisplay.shippingAddress.country
	return (
		<Grid item xs={6}>
			<div
				style={{
					display: 'flex',
					height: '25%',
					justifyContent: 'space-between',
					overflow: 'auto'
				}}
			>
				<div style={{ width: '32%' }}>
					<div style={{ display: 'flex' }}>
						<Typography variant='h3'>Time:&nbsp;</Typography>
						<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
							{moment(orderToDisplay.createdAt).format('YYYY/MM/DD HH:mm')}
						</Typography>
					</div>
					<div style={{ display: 'flex' }}>
						<Typography variant='h3'>Order#:&nbsp;</Typography>
						<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
							{orderToDisplay.orderNumber}
						</Typography>
					</div>
					<div style={{ display: 'flex' }}>
						<Typography variant='h3'>Email:&nbsp;</Typography>
						<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
							{orderToDisplay.email}
						</Typography>
					</div>
				</div>
				<div style={{ width: '30%' }}>
					<Typography variant='h3'>Shipping Address:&nbsp;</Typography>
					<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
						{orderToDisplay.shippingAddress.recipient}
					</Typography>
					<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
						{orderToDisplay.shippingAddress.street}
					</Typography>
					<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
						{`${orderToDisplay.shippingAddress.city}, ${orderToDisplay.shippingAddress.province}, ${orderToDisplay.shippingAddress.country}, ${orderToDisplay.shippingAddress.postalCode}`}
					</Typography>
					<Typography variant='h4' style={{ wordBreak: 'break-word' }}>
						{orderToDisplay.shippingAddress.phone}
					</Typography>
				</div>
				<div style={{ width: '23%' }}>
					<Typography variant='h3'>Payment Method:&nbsp;</Typography>
					<Typography variant='h4'>{getPayMethod(orderToDisplay.paymentMethod)} </Typography>
				</div>
			</div>
			<div style={{ height: '30%' }}>
				<List disablePadding className={classes.root}>
					{orderToDisplay.orderDetail.map((product, index) => (
						<ListItem alignItems='flex-start' key={index}>
							<ListItemAvatar>
								<img
									alt=''
									src={product.coverImage}
									style={{
										height: 100,
										marginRight: 10,
										borderRadius: 0
									}}
								/>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography variant='h3' style={{ paddingTop: 10 }}>
										{`${product.nameZh} ${
											product.option[0] ? product.option[0].labelZh : ''
										}\n\n`}
									</Typography>
								}
								secondary={
									<>
										<Typography
											variant='body1'
											color='textPrimary'
											style={{ marginBottom: 5 }}
										>
											{`数量: ${product.amount}`}
										</Typography>
										<Typography
											variant='body1'
											color='textPrimary'
											style={{ marginBottom: 5 }}
										>
											{`单价: ${getCurrencySymbol(country) + product.price}`}
										</Typography>
										<Typography
											variant='body1'
											color='textPrimary'
											style={{ marginBottom: 5 }}
										>
											{`总价: ${
												getCurrencySymbol(country) +
												product.amount * product.price
											}`}
										</Typography>
									</>
								}
							/>
						</ListItem>
					))}
				</List>
			</div>
			<div
				style={{
					display: 'flex',
					height: '27%',
					justifyContent: 'flex-end'
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around'
					}}
				>
					{productPricingDetail.map(productPricing => (
						<Typography variant='h4' align='right' key={productPricing.name}>
							{productPricing.name}
						</Typography>
					))}
					<Typography variant='h3' align='right'>
						Total
					</Typography>
				</div>
				<div
					style={{
						marginLeft: 25,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around'
					}}
				>
					<Typography variant='h4' align='right'>
						{orderToDisplay.subtotal}
					</Typography>
					<Typography variant='h4' align='right'>
						{orderToDisplay.shippingFee}
					</Typography>
					<Typography variant='h4' align='right'>
						{orderToDisplay.tax}
					</Typography>
					<Typography variant='h4' align='right'>
						{discount}
					</Typography>
					<Typography variant='h3' align='right'>
						{getCurrencySymbol(country) + orderToDisplay.totalPrice}
					</Typography>
				</div>
			</div>
			{entrance === 'order-history' && (
				<div
					style={{
						display: 'flex',
						height: '18%',
						justifyContent: 'flex-end'
					}}
				>
					<Button
						style={{ height: 35, marginTop: 'auto' }}
						variant='outlined'
						color='primary'
						startIcon={<PrintIcon />}
						onClick={() => {
							window.print()
						}}
					>
						打印订单
					</Button>
				</div>
			)}
		</Grid>
	)
}
export default OrderInformation
