import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Product } from 'models/index'
import { useStyles } from './style'
import { Typography, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { isSeacooCN } from 'utils'
interface Props {
	products: Product[]
}
const ProductList = ({ products }: Props) => {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const lng = i18n.language
	return (
		<div className={classes.productList}>
			<MetaTags>
				<title>
					{t(
						'Shop North American Premium Sea Cucumber | Free Shipping on Orders Over $100'
					)}
				</title>
				<meta
					name='description'
					content={t(
						'Your one-stop shop for premium quality Atlantic Sea Cucumber, Alaska Red Sea Cucumber, and sea cucumber supplements directly from Canada'
					)}
				/>
			</MetaTags>
			<div className='banner'>
				<Typography variant='h2' className='title'>
					{t('Superfood from the Ocean')}
				</Typography>
				<span className='divider'></span>
				<Typography variant='h5' className='sub-title'>
					{t('All Products')}
				</Typography>
			</div>
			<div>
				<Grid container className={classes.products}>
					{products.map((product: Product) => {
						if (product.type === 'dried-sea-cucumber')
							return (
								<Grid item xs={4} key={product.id}>
									<div className='product'>
										<HashLink
											to={`/product/${product.pathName}/#`}
											className='img-container'
										>
											<LazyLoadImage
												src={product.coverImage}
												alt={product.name}
												effect='blur'
												width={'100%'}
												height={'100%'}
											/>
										</HashLink>

										<Typography variant='body2' className='properties'>
											{lng === 'en' ? product.properties : product.propertiesZh}
										</Typography>

										<HashLink
											to={`/product/${product.pathName}/#`}
											className='info product-name'
											dangerouslySetInnerHTML={{
												__html: lng === 'en' ? product.name : product.nameZh
											}}
											style={
												(lng === 'zh' || 'zhCN') &&
												(product.pathName ===
													'Dried-West-Coast-Sea-Cucumber-Bag' ||
													product.pathName ===
														'Dried-West-Coast-Sea-Cucumber-Box' ||
													product.pathName ===
														'Dried-West-Coast-Sea-Cucumber-Gift-Box')
													? {
															width: 265
													  }
													: { width: 330 }
											}
										></HashLink>
										<HashLink
											to={`/product/${product.pathName}/#`}
											className='info product-name'
										>
											<Typography variant='h6' className='info product-price'>
												{t('Buy Now >')}
											</Typography>
										</HashLink>
									</div>
								</Grid>
							)
					})}
				</Grid>
				{isSeacooCN() && (
					<>
						<div className='frozen-banner'>
							<Typography variant='h2' className='title'>
								甄选优质美味，冷链新鲜送达
							</Typography>
							<span className='divider'></span>
							<Typography variant='h5' className='sub-title'>
								即食产品
							</Typography>
						</div>
						<Grid container className={classes.products}>
							{products.map((product: Product) => {
								if (product.type === 'frozen-food')
									return (
										<Grid item xs={4} key={product.id}>
											<div className='product'>
												<HashLink
													to={`/product/${product.pathName}/#`}
													className='img-container'
												>
													<LazyLoadImage
														src={product.coverImage}
														alt={product.name}
														effect='blur'
														width={'100%'}
														height={'100%'}
													/>
												</HashLink>

												<Typography variant='body2' className='properties'>
													{lng === 'en'
														? product.properties
														: product.propertiesZh}
												</Typography>

												<HashLink
													to={`/product/${product.pathName}/#`}
													className='info product-name'
												>
													{lng === 'en' ? product.name : product.nameZh}
												</HashLink>
												<HashLink
													to={`/product/${product.pathName}/#`}
													className='info product-name'
												>
													<Typography
														variant='h6'
														className='info product-price'
													>
														{t('Buy Now >')}
													</Typography>
												</HashLink>
											</div>
										</Grid>
									)
							})}
						</Grid>
					</>
				)}
				<div className='beche-banner'>
					<Typography variant='h2' className='title'>
						{t('Daily Natural Supplement')}
					</Typography>
					<span className='divider'></span>
					<Typography variant='h5' className='sub-title'>
						Bêche
					</Typography>
				</div>
				<Grid container className={classes.products}>
					{products.map((product: Product) => {
						if (product.type === 'beche')
							return (
								<Grid item xs={4} key={product.id}>
									<div className='product'>
										<HashLink
											to={`/product/${product.pathName}/#`}
											className='img-container'
										>
											<LazyLoadImage
												src={product.coverImage}
												alt={product.name}
												effect='blur'
												width={'100%'}
												height={'100%'}
											/>
										</HashLink>

										<Typography variant='body2' className='properties'>
											{lng === 'en' ? product.properties : product.propertiesZh}
										</Typography>

										<HashLink
											to={`/product/${product.pathName}/#`}
											className='info product-name'
										>
											{lng === 'en' ? product.name : product.nameZh}
										</HashLink>
										<HashLink
											to={`/product/${product.pathName}/#`}
											className='info product-name'
										>
											<Typography variant='h6' className='info product-price'>
												{t('Buy Now >')}
											</Typography>
										</HashLink>
									</div>
								</Grid>
							)
					})}
				</Grid>
			</div>
		</div>
	)
}
export default ProductList
