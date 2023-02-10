import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { Product } from 'models'
import { HashLink } from 'react-router-hash-link'
interface Props {
	relatedProducts: Product[]
}
const RelatedProducts = ({ relatedProducts }: Props) => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	return (
		<div className={classes.moreProducts}>
			<div className='title'>
				<Typography variant='h5'>{t('You May Also Like')}</Typography>
			</div>
			<Grid container className='more-products' spacing={10}>
				{relatedProducts &&
					relatedProducts.map((relatedProduct, index) => {
						return (
							<Grid item xs={4} key={index}>
								<HashLink
									to={`/product/${relatedProduct.pathName}/#`}
									className='product-image'
								>
									<img
										src={relatedProduct.coverImage}
										alt={relatedProduct.name}
									/>
								</HashLink>
								<div className='product-info'>
									<HashLink
										to={`/product/${relatedProduct.pathName}/#`}
										className='product-name'
									>
										{lng === 'en' ? relatedProduct.name : relatedProduct.nameZh}
									</HashLink>
									<Typography
										variant='h6'
										className='info product-price'
										component={HashLink}
										to={`/product/${relatedProduct.pathName}/#`}
									>
										{t('Buy Now >')}
									</Typography>
								</div>
							</Grid>
						)
					})}
			</Grid>
		</div>
	)
}

export default RelatedProducts
