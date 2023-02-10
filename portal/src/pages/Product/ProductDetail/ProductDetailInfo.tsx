import React, { useContext } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useStyles } from './style'
import { Option, Product } from 'models'
import { isSeacooCN, priceFormatter } from 'utils'
import { Remove, Add } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { useHistory } from 'react-router-dom'
import ProductGallery from './ProductGallery'
import { CartContext } from 'context/CartContextProvider'
import ProductOptions from './ProductOptions'
interface Props {
	product: Product
	largeImg: any
	setLargeImg: (largeImg: any) => void
	selectedOption: Option | undefined
	setSelectedOption: (selectedOption: Option | undefined) => void
	quantity: number
	setQuantity: (quantity: number) => void
	handleAddToCart: () => void
	video: string
	setVideo: (video: string) => void
}
const ProductDetailInfo = ({
	product,
	largeImg,
	setLargeImg,
	selectedOption,
	setSelectedOption,
	quantity,
	setQuantity,
	handleAddToCart,
	video,
	setVideo
}: Props) => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const history = useHistory()
	const outOfStock = product.status === 'outOfStock' ? true : false
	const { getPriceResult, exchangeRate } = useContext(CartContext)
	return (
		<div className={classes.productDetailInfo}>
			<Grid container spacing={7}>
				<ProductGallery
					product={product}
					largeImg={largeImg}
					setLargeImg={setLargeImg}
					video={video}
					setVideo={setVideo}
				/>
				<Grid item xs={5} className='product-info'>
					<Typography
						variant='h2'
						className='product-name'
						dangerouslySetInnerHTML={{
							__html: lng === 'en' ? product.name : product.nameZh
						}}
					></Typography>
					<Typography
						variant='h6'
						className='product-price'
						style={{ whiteSpace: 'nowrap' }}
					>
						{isSeacooCN() ? (
							<>
								<Typography>{`$ ${priceFormatter(
									selectedOption?.price || product.price
								)}加元 `}</Typography>
								<Typography
									variant='h6'
									className='product-price'
									style={{ fontWeight: 400, display: 'inline-block' }}
								>
									{`(折合人民币${priceFormatter(
										getPriceResult(selectedOption?.price || product.price)
									)}元)`}
								</Typography>
								<Typography variant='h6' className='product-exchange-rate'>
									{`当前汇率 1 : ${exchangeRate.toFixed(
										2
									)}（自动调整），最终交易价格以实时汇率为主`}
								</Typography>
							</>
						) : (
							`CAD$ ${priceFormatter(selectedOption?.price || product.price)}`
						)}
					</Typography>

					<Typography
						className='product-intro'
						dangerouslySetInnerHTML={
							lng === 'en'
								? { __html: product.description }
								: { __html: product.descriptionZh }
						}
					></Typography>
					<Typography variant='h6' className='product-ship'>
						{t('Shipping cost')}
					</Typography>
					{!isSeacooCN() ? (
						<>
							<Typography
								variant='h6'
								className='product-ship-info'
								dangerouslySetInnerHTML={{
									__html: t(
										'Canada - Free shipping Over CAD$ 100, before tax<br />US - Free shipping Over CAD$ 200, before tax'
									)
								}}
							></Typography>
							<Typography variant='h6' className='more-info'>
								<HashLink to='/landing-page'>
									{t('* More Shipping Policy')}
								</HashLink>
							</Typography>
						</>
					) : (
						<Typography
							variant='h6'
							className='product-ship-info'
							dangerouslySetInnerHTML={{
								__html: '购物满200人民币包邮（限中国大陆地区）<br /><br />'
							}}
						></Typography>
					)}
					{product.options && (
						<ProductOptions
							product={product}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
						/>
					)}
					<Typography variant='h6' className='product-quantity'>
						{t('Quantity')}
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
								disabled={outOfStock}
							>
								<Add fontSize='large' />
							</Button>
						</Grid>
					</Grid>
					{outOfStock ? (
						<Typography className='out-of-stock'>
							{lng === 'en'
								? product.statusDescription
								: product.statusDescriptionZh}
						</Typography>
					) : (
						<>
							<Button
								variant='contained'
								className='btn-add-to-cart'
								color='primary'
								onClick={handleAddToCart}
								disabled={outOfStock}
							>
								{t('Add to Cart')}
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
							>
								{t('Buy Now')}
							</Button>
						</>
					)}
				</Grid>
			</Grid>
		</div>
	)
}
export default ProductDetailInfo
