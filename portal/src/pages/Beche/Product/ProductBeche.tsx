import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './style'
import { getBechePowder } from 'api'
import { Product } from 'models'
import {
	Button,
	Grid,
	GridList,
	GridListTile,
	Typography
} from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import { addToCart } from 'pages/Order/cartHandler'
import { CartContext } from 'context/CartContextProvider'
import { SnackContext } from 'context/SnackContextProvider'
import BecheDifferentParts from './BecheDifferentParts'
import {
	updateDataLayerProductView,
	updateDataLayerProductAddToCart
} from 'utils/becheGTMTracking'

const ProductBeche = () => {
	const classes = useStyles()
	const history = useHistory()
	const [product, setProduct] = useState<Product>({} as Product)
	const { cart, setCartCount, cartCount } = useContext(CartContext)
	const { showSnackbar } = useContext(SnackContext)
	const [largeImg, setLargeImg] = useState<string>()
	const getProductBechePowder = async () => {
		const result = await getBechePowder()
		setProduct(result.data.data)
		setLargeImg(result.data.data.images[0].url)
		updateDataLayerProductView(result.data.data)
	}
	useEffect(() => {
		getProductBechePowder()
		// eslint-disable-next-line
	}, [])
	const [quantity, setQuantity] = useState(1)
	const handleAddToCart = () => {
		const thisProduct: Product = {
			...product,
			amount: quantity,
			price: product.price
		}
		const result = addToCart(cart, thisProduct)
		result && setCartCount(cartCount + 1)
		showSnackbar('add-to-cart', 'success')
		updateDataLayerProductAddToCart(thisProduct)
	}
	const outOfStock = product.status === 'outOfStock' ? true : false
	return (
		<>
			<div className={classes.product}>
				{product && (
					<div className={classes.productDetailSummary}>
						<Grid container spacing={7}>
							<Grid item xs={6} className='product-image'>
								<div className='large-img-holder'>
									<img className='large-img' src={largeImg} alt='largeImg' />
								</div>
								<GridList cols={4} className='mini-img-group'>
									{product.images &&
										product.images.map(image => {
											return (
												<GridListTile
													key={image.url}
													className='mini-img-holder'
												>
													<img
														src={image.url}
														alt=''
														onClick={() => {
															setLargeImg(image.url)
														}}
													/>
												</GridListTile>
											)
										})}
								</GridList>
							</Grid>
							<Grid item xs={5} className='product-info'>
								<Typography
									variant='h2'
									className='product-name'
									dangerouslySetInnerHTML={{
										__html: product.name
									}}
								></Typography>
								<Typography variant='h6' className='product-price'>
									CAD$ {product.price}
								</Typography>
								<Typography
									className='product-intro'
									dangerouslySetInnerHTML={{ __html: product.description }}
								></Typography>
								<Typography variant='h6' className='product-ship'>
									Shipping
								</Typography>
								<Typography variant='h6' className='product-ship-info'>
									Canada - Free shipping Over CAD$ 100, before tax
									<br />
									US - Free shipping Over CAD$ 200, before tax
								</Typography>
								<Typography variant='h6' className='product-quantity'>
									Quantity
								</Typography>
								<Grid container className='product-quantity-detail'>
									<Grid item xs={5}>
										<Button
											className='btn-decrease'
											disabled={quantity < 2 ? true : false}
											onClick={() => {
												setQuantity(quantity - 1)
											}}
										>
											<Remove fontSize='large' />
										</Button>
									</Grid>
									<Grid item xs>
										<Typography variant='h4'>{quantity}</Typography>
									</Grid>
									<Grid item xs={5}>
										<Button
											className='btn-increase'
											onClick={() => {
												setQuantity(quantity + 1)
											}}
										>
											<Add fontSize='large' />
										</Button>
									</Grid>
								</Grid>
								{outOfStock ? (
									<Typography className='out-of-stock'>
										{product.statusDescription}
									</Typography>
								) : (
									<>
										<Button
											variant='contained'
											className='btn-add-to-cart'
											color='primary'
											onClick={handleAddToCart}
											disabled={outOfStock}
											id='add-to-cart'
										>
											Add to Cart
										</Button>
										<Button
											variant='outlined'
											className='btn-buy-now'
											color='primary'
											disabled={outOfStock}
											onClick={() => {
												handleAddToCart()
												history.push('/order')
											}}
											id='buy-now'
										>
											Buy Now
										</Button>
									</>
								)}
							</Grid>
						</Grid>
					</div>
				)}
				<BecheDifferentParts />
			</div>
			<div className={classes.footBanner}>
				<Typography variant='h4'>
					A Health Supplement To Support a<br />
					Variety of Individual Wellness Goals
				</Typography>
			</div>
		</>
	)
}
export default ProductBeche
