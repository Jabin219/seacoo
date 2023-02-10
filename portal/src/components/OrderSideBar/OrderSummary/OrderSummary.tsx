import React, { useState, useEffect, useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { isBeche, isSeacooCN, priceFormatter } from 'utils'
import { Typography, Grid, Button, TextField, Divider } from '@material-ui/core'
import { useStyles } from '../style'
import { calculateTax, getPromote } from './calculatePrice'
import { PromotionWays } from 'constant'
import { Order } from 'models'
import { useTranslation } from 'react-i18next'
import { CartContext } from 'context/CartContextProvider'

interface Props {
	next: () => void
	step: number
	order: Order
	setOrder: (order: Order) => void
}
const OrderSummary = ({ next, step, order, setOrder }: Props) => {
	const classes = useStyles()
	const { t } = useTranslation()
	const [discountPrice, setDiscountPrice] = useState(0)
	const [error, setError] = useState(false)
	const [isApplied, setIsApplied] = useState(false)
	const [promoteCode, setPromoteCode] = useState('')
	const [shippingFee, setShippingFee] = useState(0)
	const { getPriceResult, exchangeRate } = useContext(CartContext)
	useEffect(() => {
		if (step === 1) {
			calculateTax(order, discountPrice, setShippingFee, setOrder, exchangeRate)
		}
		if (order.coupon) {
			switch (order.coupon.promotion) {
				case PromotionWays.DISCOUNT:
					setDiscountPrice(
						(order.subtotal as number) *
							((100 - (order.coupon.discount as number)) / 100)
					)
					break
				case PromotionWays.FIXED_PRICE:
					setDiscountPrice(order.coupon.fixedPrice as number)
					break
				default:
					setDiscountPrice(0)
			}
		}
		// eslint-disable-next-line
	}, [order.addressShipping, order.products, order.coupon])
	useEffect(() => {
		setOrder({
			...order,
			discount: discountPrice
		})
		// eslint-disable-next-line
	}, [discountPrice])
	return (
		<div className={classes.card}>
			<div className='header'>
				<Typography variant='h2' className='title'>
					{t('ORDER SUMMARY')} {isSeacooCN() ? '加币(人民币)' : '(CAD$)'}
				</Typography>
			</div>
			<Divider />
			<Grid className='summary' container>
				<Grid item xs={7} className='item'>
					<Typography variant='body2'>{t('ITEMS')}</Typography>
				</Grid>
				<Grid item xs={5} className='rightFloat item'>
					<Typography variant='body2'>
						{priceFormatter(order.subtotal)}
						{isSeacooCN()
							? ` (${priceFormatter(getPriceResult(order.subtotal))})`
							: ''}
					</Typography>
				</Grid>
				{discountPrice !== 0 && (
					<>
						<Grid item xs={7} className='item'>
							<Typography variant='body2'>{t('APPLIED DISCOUNT')}</Typography>
						</Grid>
						<Grid item xs={5} className='item rightFloat'>
							<Typography variant='body2'>
								{`-${priceFormatter(discountPrice)} (
								${((discountPrice / order.subtotal) * 100).toFixed(2)}% off)`}
								{isSeacooCN()
									? ` (-${priceFormatter(getPriceResult(discountPrice))})`
									: ''}
							</Typography>
						</Grid>
						<Grid item xs={7} className='item'>
							<Typography variant='body2'>{t('SUBTOTAL')}</Typography>
						</Grid>
						<Grid item xs={5} className='item rightFloat'>
							<Typography variant='body2'>
								{priceFormatter(order.subtotal - discountPrice)}
								{isSeacooCN()
									? ` (${priceFormatter(
											getPriceResult(order.subtotal - discountPrice)
									  )})`
									: ''}
							</Typography>
						</Grid>
					</>
				)}
				<Grid item xs={7} className='item'>
					<Typography variant='body2'>{t('ESTIMATED SHIPPING')}</Typography>
				</Grid>
				<Grid className='rightFloat item' item xs={5}>
					<Typography variant='body2'>
						{step !== 2
							? 'TBD'
							: priceFormatter(shippingFee) +
							  (isSeacooCN()
									? ` (${priceFormatter(getPriceResult(shippingFee))})`
									: '')}
					</Typography>
				</Grid>
				{!isSeacooCN() && (
					<>
						<Grid item xs={7} className='item'>
							<Typography variant='body2'>{t('TAX')}</Typography>
						</Grid>
						<Grid className='rightFloat item' item xs={5}>
							<Typography variant='body2'>
								{step !== 2 ? 'TBD' : priceFormatter(Number(order.tax))}
							</Typography>
						</Grid>
					</>
				)}
				<Divider style={{ width: '100%' }} />
				<Grid item xs={7} className='item' style={{ marginTop: 20 }}>
					<Typography variant='h4' className='total'>
						{t('TOTAL')}
					</Typography>
				</Grid>
				<Grid className='rightFloat item' xs={5} item style={{ marginTop: 20 }}>
					<Typography
						variant='body2'
						className='total'
						style={{ fontSize: 16 }}
					>
						{step !== 2
							? 'TBD'
							: priceFormatter(
									order.subtotal -
										discountPrice +
										shippingFee +
										Number(order.tax)
							  ) +
							  (isSeacooCN()
									? ` (${priceFormatter(
											getPriceResult(
												order.subtotal -
													discountPrice +
													shippingFee +
													Number(order.tax)
											)
									  )})`
									: '')}
					</Typography>
				</Grid>
			</Grid>
			{step === 0 && (
				<>
					<Divider />
					<div className='promoCode content'>
						<TextField
							label={t('PROMO CODE')}
							variant='outlined'
							size='small'
							error={error}
							className='input'
							helperText={error ? 'invalid promo code' : ''}
							value={promoteCode}
							disabled={isApplied}
							onChange={event => {
								setError(false)
								setPromoteCode(event.target.value)
							}}
						/>
						{!isApplied && (
							<Button
								variant='outlined'
								color='primary'
								disabled={promoteCode === '' ? true : false}
								onClick={() =>
									getPromote(
										promoteCode,
										setError,
										setOrder,
										order,
										setDiscountPrice,
										setIsApplied
									)
								}
							>
								{t('Apply')}
							</Button>
						)}
					</div>
					<Divider />
					<div className='checkout btnField'>
						<Button
							color='primary'
							size='large'
							variant='contained'
							fullWidth
							disabled={order.subtotal === 0 ? true : false}
							onClick={async () => {
								if (promoteCode) {
									const result = await getPromote(
										promoteCode,
										setError,
										setOrder,
										order,
										setDiscountPrice,
										setIsApplied
									)
									if (!result) {
										return
									}
								}
								next()
							}}
						>
							{t('Checkout')}
						</Button>
						<HashLink
							to={isBeche() ? '/#' : '/product/#'}
							style={{ textDecoration: 'none' }}
						>
							<Button fullWidth>{t('continue shopping')}</Button>
						</HashLink>
					</div>
				</>
			)}
		</div>
	)
}
export default OrderSummary
