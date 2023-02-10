import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { isBeche } from 'utils'
import { Typography, Grid, IconButton, Divider } from '@material-ui/core'
import { Add, Remove, Delete } from '@material-ui/icons'
import { Product } from 'models'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { countCartTotal, saveCart } from './cartHandler'
import { OrderContext } from './OrderPage'
import { CartContext } from 'context/CartContextProvider'
import { updateDataLayerProductRemoveFromCart } from 'utils/becheGTMTracking'
const ShoppingCart = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const { setCartCount, cart, setCart, priceFormatCN } = useContext(CartContext)
	const { order, setOrder } = useContext(OrderContext)
	const quantityDecrease = (item: Product) => {
		const currentProductList: Product[] = [...cart]
		const findProductIndex = currentProductList.findIndex(
			(product: Product) =>
				product.id === item.id &&
				product.selectedOption?.id === item.selectedOption?.id &&
				(product.amount as number) > 1
		)
		currentProductList[findProductIndex] &&
			(currentProductList[findProductIndex].amount as number)--
		setCart(currentProductList)
		saveCart(currentProductList)
		setOrder({
			...order,
			products: currentProductList,
			subtotal: countCartTotal(currentProductList)
		})
	}
	const quantityIncrease = (item: Product) => {
		const currentProductList: Product[] = [...cart]
		const findIndex = currentProductList.findIndex(
			(product: Product) =>
				product.id === item.id &&
				product.selectedOption?.id === item.selectedOption?.id
		)
		currentProductList[findIndex] &&
			(currentProductList[findIndex].amount as number)++
		setCart(currentProductList)
		saveCart(currentProductList)
		setOrder({
			...order,
			products: currentProductList,
			subtotal: countCartTotal(currentProductList)
		})
	}
	const itemRemove = (item: Product) => {
		const newProductList = cart.filter((product: Product) => {
			if (item.selectedOption) {
				return product.selectedOption?.id !== item.selectedOption?.id
			}
			return product.id !== item.id
		})
		setCart(newProductList)
		saveCart(newProductList)
		setCartCount(newProductList.length)
		setOrder({
			...order,
			products: newProductList,
			subtotal: countCartTotal(newProductList)
		})
		if (isBeche()) {
			updateDataLayerProductRemoveFromCart(item)
		}
	}
	return (
		<div className={classes.card} style={{ marginBottom: 150 }}>
			<div className='header'>
				<h3 className='title'>{t('SHOPPING CART')}</h3>
			</div>
			<Divider />
			<div className={classes.cart}>
				{cart.length === 0 ? (
					<>
						<div className='empty-cart'>
							<img src='/images/order/cart/empty-cart.png' alt='' />
							<Typography className='caption'>
								{t('Your cart is currently empty.')}
								{'\t'}
								<HashLink to={isBeche() ? '/#' : '/product/#'}>
									<span
										style={{ textDecoration: 'underline', cursor: 'pointer' }}
									>
										{t('Go Shopping')}
									</span>
								</HashLink>
							</Typography>
						</div>
						<Divider />
					</>
				) : (
					cart.map((cartItem: Product, index: number) => {
						return (
							<div key={index}>
								<Grid
									key={cartItem.id}
									className={classes.productCard}
									container
									spacing={3}
								>
									<Grid className='itemImage' item xs={4}>
										<img
											src={cartItem.coverImage}
											alt=''
											className='coverImg'
										/>
									</Grid>
									<Grid className='infoBox' item xs>
										<div className='nameField'>
											<Typography className='productName'>
												{lng === 'en' ? cartItem.name : cartItem.nameZh}
											</Typography>
											{cartItem.selectedOption && (
												<Typography className='subName'>
													{lng === 'en'
														? cartItem.selectedOption.label
														: cartItem.selectedOption.labelZh}
												</Typography>
											)}
										</div>
										<Typography className='price bold'>
											{priceFormatCN(
												cartItem.selectedOption?.price || cartItem.price
											)}
										</Typography>
										<Typography className='subtotal bold'>
											{priceFormatCN(
												(cartItem.selectedOption?.price || cartItem.price) *
													(cartItem.amount as number)
											)}
										</Typography>
										<div className='quantityField'>
											<IconButton
												disabled={
													(cartItem.amount as number) > 1 ? false : true
												}
												size='small'
												onClick={() => quantityDecrease(cartItem)}
											>
												<Remove fontSize='small' />
											</IconButton>
											<Typography className='quantity'>
												{cartItem.amount}
											</Typography>
											<IconButton
												size='small'
												onClick={() => quantityIncrease(cartItem)}
											>
												<Add fontSize='small' />
											</IconButton>
											<IconButton
												size='small'
												onClick={() => itemRemove(cartItem)}
											>
												<Delete className='deleteIcon' />
											</IconButton>
										</div>
									</Grid>
								</Grid>
								<Divider key={index} />
							</div>
						)
					})
				)}
				<div className='footer'>
					<div className='subtotal'>
						<Typography style={{ fontFamily: 'Montserrat' }}>
							{t('SUBTOTAL')}:&nbsp;
							{priceFormatCN(countCartTotal(cart))}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ShoppingCart
