import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Typography, Breadcrumbs } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { Product, Option } from 'models'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { addToCart } from 'pages/Order/cartHandler'
import MetaTags from 'react-meta-tags'
import useProduct from 'hooks/useProduct'
import ProductMeta from './ProductMeta'
import { SnackContext } from 'context/SnackContextProvider'
import ProductDetailParts from './ProductDetailParts'
import RelatedProducts from './RelatedProducts'
import ProductDetailInfo from './ProductDetailInfo'
import { CartContext } from 'context/CartContextProvider'
interface Props {
	products: Product[]
	match: any
}
const ProductDetail = ({ products, match }: Props) => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const history = useHistory()
	const { pathname } = history.location
	const productPathName = match && match.params.productPathName
	const {
		findProductByPathName,
		findRelatedProductsById,
		product,
		relatedProducts,
		setRelatedProducts,
		relatedProductsIds
	} = useProduct()
	const { productTitle, productMetaDescription } = ProductMeta()
	useEffect(() => {
		findProductByPathName(products, productPathName)
		// eslint-disable-next-line
	}, [products, pathname])
	useEffect(() => {
		setRelatedProducts(findRelatedProductsById(products, relatedProductsIds))
		// eslint-disable-next-line
	}, [product])
	const { setCartCount, cartCount, cart } = useContext(CartContext)
	const { showSnackbar } = useContext(SnackContext)
	const [selectedOption, setSelectedOption] = useState<Option | undefined>()
	const [quantity, setQuantity] = useState(1)
	const [largeImg, setLargeImg] = useState('/images/products/placeholder.png')
	const [video, setVideo] = useState('')
	useEffect(() => {
		if (product.options) {
			setSelectedOption(product.options[0])
		} else {
			setSelectedOption(undefined)
		}
		setLargeImg(product.images && product.images[0].url)
	}, [product])
	const handleAddToCart = () => {
		const thisProduct = {
			...product,
			amount: quantity,
			selectedOption
		}
		const result = addToCart(cart, thisProduct)
		result && setCartCount(cartCount + 1)
		showSnackbar('add-to-cart', 'success')
	}
	return (
		<div className={classes.productDetail}>
			<MetaTags>
				<title>{productTitle(product)}</title>
				<meta name='description' content={productMetaDescription(product)} />
			</MetaTags>
			<div className={classes.productDetailHeader}>
				<Breadcrumbs separator={<NavigateNext fontSize='small' />}>
					<HashLink to='/product/#' style={{ fontSize: 14 }}>
						{t('Products')}
					</HashLink>
					<Typography variant='h6' style={{ fontWeight: 600, fontSize: 14 }}>
						{lng === 'en' ? product.name : product.nameZh}
					</Typography>
				</Breadcrumbs>
			</div>
			<ProductDetailInfo
				product={product}
				largeImg={largeImg}
				setLargeImg={setLargeImg}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				quantity={quantity}
				setQuantity={setQuantity}
				handleAddToCart={handleAddToCart}
				video={video}
				setVideo={setVideo}
			/>
			<ProductDetailParts productPathName={productPathName} product={product} />
			<RelatedProducts relatedProducts={relatedProducts} />
		</div>
	)
}

export default ProductDetail
