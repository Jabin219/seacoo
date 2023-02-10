import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Typography, Grid, Divider } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'

const RecommendProducts = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.recommendProducts}>
			<div className='title'>
				<Typography variant='h5'>{t('Recommend Products')}</Typography>
			</div>
			<Divider />

			<Grid className='recommend-products' container spacing={10}>
				<Grid item xs={4}>
					<HashLink
						to='/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#'
						className='product-image'
					>
						<img src='/images/recommend-products/red-bag.jpg' alt='red bag' />
					</HashLink>
					<div className='product-info'>
						<HashLink
							to='/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#'
							className='product-name'
						>
							{t('SEACOO Dried East Cost Sea Cucumber Whole 454g bag')}
						</HashLink>
						<Typography
							variant='h6'
							className='info product-price'
							component={HashLink}
							to='/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#'
						>
							{t('Buy Now >')}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<HashLink
						to='/product/Dried-East-Coast-Sea-Cucumber-Split-Bag/#'
						className='product-image'
					>
						<img src='/images/recommend-products/blue-bag.jpg' alt='blue bag' />
					</HashLink>
					<div className='product-info'>
						<HashLink
							to='/product/Dried-East-Coast-Sea-Cucumber-Split-Bag/#'
							className='product-name'
						>
							{t('SEACOO Dried East Cost Sea Cucumber HG-Split 454g Bag')}
						</HashLink>
						<Typography
							variant='h6'
							className='info product-price'
							component={HashLink}
							to='/product/Dried-East-Coast-Sea-Cucumber-Split-Bag/#'
						>
							{t('Buy Now >')}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<HashLink
						to='/product/Dried-West-Coast-Sea-Cucumber-Bag/#'
						className='product-image'
					>
						<img
							src='/images/recommend-products/black-bag.jpg'
							alt='black bag'
						/>
					</HashLink>
					<div className='product-info'>
						<HashLink
							to='/product/Dried-West-Coast-Sea-Cucumber-Bag/#'
							className='product-name'
						>
							{t('SEACOO Dried West Coast Sea Cucumber 454g Bag')}
						</HashLink>
						<Typography
							variant='h6'
							className='info product-price'
							component={HashLink}
							to='/product/Dried-West-Coast-Sea-Cucumber-Bag/#'
						>
							{t('Buy Now >')}
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default RecommendProducts
