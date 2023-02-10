import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { isSeacooCN } from 'utils'
import { useStyles } from './style'

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
						to={`/product/Dried-West-Coast-Sea-Cucumber-Bag/#`}
						className='product-image'
					>
						<img
							src='/images/recommend-products/black-bag.jpg'
							alt='black bag'
						/>
					</HashLink>
					<div className='product-info'>
						<HashLink
							to={`/product/Dried-West-Coast-Sea-Cucumber-Bag/#`}
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
				<Grid item xs={4}>
					<HashLink
						to={`/product/Dried-West-Coast-Sea-Cucumber-Box/#`}
						className='product-image'
					>
						<img
							src='/images/recommend-products/black-box.jpg'
							alt='black box'
						/>
					</HashLink>
					<div className='product-info'>
						<HashLink
							to={`/product/Dried-West-Coast-Sea-Cucumber-Box/#`}
							className='product-name'
						>
							{t('SEACOO Dried West Coast Sea Cucumber 454g Gift Box')}
						</HashLink>
						<Typography
							variant='h6'
							className='info product-price'
							component={HashLink}
							to='/product/Dried-West-Coast-Sea-Cucumber-Box/#'
						>
							{t('Buy Now >')}
						</Typography>
					</div>
				</Grid>
				{isSeacooCN() ? (
					<Grid item xs={4}>
						<HashLink
							to={`/product/Sea-Cucumber-Fish-Maw-Chowder/#`}
							className='product-image'
						>
							<img src='/images/recommend-products/chowder.jpg' alt='佛跳墙' />
						</HashLink>
						<div className='product-info'>
							<HashLink
								to={`/product/Sea-Cucumber-Fish-Maw-Chowder/#`}
								className='product-name'
							>
								海参鱼胶佛跳墙
							</HashLink>
							<Typography
								variant='h6'
								className='info product-price'
								component={HashLink}
								to='/product/Sea-Cucumber-Fish-Maw-Chowder/#'
							>
								{t('Buy Now >')}
							</Typography>
						</div>
					</Grid>
				) : (
					<Grid item xs={4}>
						<HashLink
							to={`/product/Bêche-Sea-Cucumber-Supplement/#`}
							className='product-image'
						>
							<img src='/images/recommend-products/beche.jpg' alt='beche' />
						</HashLink>
						<div className='product-info'>
							<HashLink
								to={`/product/Bêche-Sea-Cucumber-Supplement/#`}
								className='product-name'
							>
								{t('Bêche Sea Cucumber Powder Supplement')}
							</HashLink>
							<Typography
								variant='h6'
								className='info product-price'
								component={HashLink}
								to='/product/Bêche-Sea-Cucumber-Supplement/#'
							>
								{t('Buy Now >')}
							</Typography>
						</div>
					</Grid>
				)}
			</Grid>
		</div>
	)
}

export default RecommendProducts
