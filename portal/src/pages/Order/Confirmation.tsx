import React, { useRef, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import {
	Typography,
	IconButton,
	Divider,
	Button,
	Grid
} from '@material-ui/core'
import { useReactToPrint } from 'react-to-print'
import { isBeche, isSeacooCN, priceFormatter } from 'utils'
import { PrintOutlined, ErrorOutlineOutlined } from '@material-ui/icons'
import { Product } from 'models'
import { useStyles } from './style'
import { OrderContext } from './OrderPage'
import { CartContext } from 'context/CartContextProvider'
import { updateDataLayerPurchase } from 'utils/becheGTMTracking'

interface Props {
	result: any
}
const Confirmation = ({ result }: Props) => {
	const { t } = useTranslation()
	const componentRef = useRef<HTMLDivElement>(null)
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	})
	const classes = useStyles()
	const time = result.time
	const lng = useTranslation().i18n.language
	const { order, confirmTimer } = useContext(OrderContext)
	const { priceFormatCN } = useContext(CartContext)
	useEffect(() => {
		if (confirmTimer) {
			clearInterval(confirmTimer)
		}
		if (isBeche()) {
			updateDataLayerPurchase(order)
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div className={classes.confirmation} ref={componentRef}>
			{result.status === 'success' && (
				<>
					<div
						className={classes.productCard}
						style={{ justifyContent: 'center', backgroundColor: '#fff' }}
					>
						<div className='box'>
							<Typography gutterBottom className='title'>
								{lng === 'en' ? 'Thank You!' : '下单成功！'}
							</Typography>
							<img
								src='/images/icon/confirmed.png'
								className='image'
								alt='thank you'
							></img>
							<Typography>
								{lng === 'en' ? 'Your order is completed.' : '您的订单已完成，'}
								<br />
								{lng === 'en'
									? 'A confirmation has been sent to your e-mail.'
									: '确认信息已发送至您的邮箱。'}
							</Typography>
						</div>
					</div>
					<div className={classes.card}>
						<div className='header'>
							<Typography className='title'>
								{lng === 'en' ? 'ORDER CONFIRMATION' : '订单确认信息'}
							</Typography>
							<IconButton aria-label='print' size='small' onClick={handlePrint}>
								<PrintOutlined fontSize='large' />
							</IconButton>
						</div>
						<Divider />
						<div className='orderInfo content'>
							<div className='listItem'>
								<Typography className='subtitle'>
									{lng === 'en' ? 'Order#' : '订单号'}:&nbsp;
								</Typography>
								<Typography>{order.orderNumber}</Typography>
							</div>
							<div className='listItem'>
								<Typography className='subtitle'>
									{lng === 'en' ? 'Date' : '下单日期'}:&nbsp;
								</Typography>
								<Typography>{time}</Typography>
							</div>
							<div className='listItem'>
								<Typography className='subtitle'>
									{lng === 'en' ? 'Email' : '电子邮箱'}:&nbsp;
								</Typography>
								<Typography>{order.addressShipping.email}</Typography>
							</div>
						</div>
						<Divider />
						<div className='pageBreak'></div>
						<div className='content address'>
							<div>
								<Typography className='subtitle'>
									{lng === 'en' ? 'Shipping Address' : '送货地址'}
								</Typography>
								<Typography>
									{order.addressShipping.recipient}
									<br />
									{order.addressShipping.street}
									<br />
									{order.addressShipping.city}
									<br />
									{`${order.addressShipping.province}
										\t
										${
											order.addressShipping.country === 'CN'
												? '中国'
												: order.addressShipping.country
										}`}
									<br />
									{order.addressShipping.phone}
								</Typography>
							</div>
						</div>
						<Divider />

						{order.products.map((product: Product, index) => (
							<div key={index}>
								<div className={classes.productCard} key={product.id}>
									<Grid container spacing={5}>
										<Grid item xs={4}>
											<img
												src={product.coverImage}
												className='coverImg'
												alt={product.name}
											/>
										</Grid>
										<Grid item xs className='infoBox'>
											<div className='productName'>
												<Typography>
													{lng === 'en' ? product.name : product.nameZh}
												</Typography>
												{product.selectedOption && (
													<Typography style={{ color: 'rgba(0,0,0,0.5)' }}>
														{lng === 'en'
															? product.selectedOption.label
															: product.selectedOption.labelZh}
													</Typography>
												)}
											</div>
											<div className='price'>
												<Typography>
													{lng === 'en' ? 'Quantity' : '数量'}: {product.amount}
												</Typography>
												<Typography className='subtitle'>
													{priceFormatCN(product.price)}
												</Typography>
											</div>
											<div className='subtotal'>
												<Typography className='subtitle'>
													{priceFormatCN(product.price * product.amount)}
												</Typography>
											</div>
										</Grid>
									</Grid>
								</div>
								<Divider />
							</div>
						))}
						<div className='summary'>
							<Grid container spacing={1}>
								<Grid item xs>
									<Typography className='rightFloat'>
										{lng === 'en' ? 'SUBTOTAL' : '小计'}
									</Typography>
								</Grid>
								<Grid xs={2} item>
									<Typography className='rightFloat'>
										{priceFormatCN(order.subtotal - order.discount)}
									</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={1}>
								<Grid xs item>
									<Typography className='rightFloat'>
										{lng === 'en' ? 'ESTIMATED SHIPPING' : '邮费'}
									</Typography>
								</Grid>
								<Grid xs={2} item>
									{order.shippingFee ? (
										<Typography className='rightFloat'>
											{priceFormatCN(order.shippingFee)}
										</Typography>
									) : (
										<Typography className='rightFloat'>0.00</Typography>
									)}
								</Grid>
							</Grid>
							{!isSeacooCN() && (
								<Grid container spacing={1}>
									<Grid item xs>
										<Typography className='rightFloat'>
											{lng === 'en' ? 'TAX' : '税费'}
										</Typography>
									</Grid>
									<Grid xs={2} item>
										<Typography className='rightFloat'>
											{order.tax
												? `CAD$ ${priceFormatter(order.tax as number)}`
												: `CAD$ ${(0).toFixed(2)}`}
										</Typography>
									</Grid>
								</Grid>
							)}
							<Grid container spacing={1}>
								<Grid xs item>
									<Typography className='rightFloat total'>
										{lng === 'en' ? 'TOTAL' : '总计'}
									</Typography>
								</Grid>
								<Grid sm={2} item>
									<Typography className='rightFloat total'>
										{priceFormatCN(order.totalPrice)}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</div>
				</>
			)}
			{result.status !== 'success' && (
				<div>
					<Typography gutterBottom>{t('Sorry, payment failed!')}</Typography>
					<ErrorOutlineOutlined></ErrorOutlineOutlined>
					<Typography gutterBottom>{t('please try again later.')}</Typography>
					<Button>{lng === 'en' ? 'Back' : '返回'}</Button>
				</div>
			)}
		</div>
	)
}

export default Confirmation
