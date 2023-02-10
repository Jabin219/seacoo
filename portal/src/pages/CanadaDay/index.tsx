import { Button, Divider, Grid, Typography } from '@material-ui/core'
import { useStyles } from './style'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const CanadaDay = () => {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const { language } = i18n
	const bannerWidth = 1440
	const bannerHeight = bannerWidth / 2.88
	return (
		<>
			<div className={classes.root}>
				<LazyLoadImage
					className={classes.image}
					src={
						language === 'en'
							? '/images/canada-day/canada-day-en.jpg'
							: '/images/canada-day/canada-day-zh.jpg'
					}
					alt='Canada Day Event'
					maxWidth={bannerWidth}
					height={bannerHeight}
					effect='blur'
				/>
				<div className={classes.introduction}>
					<Typography>
						{t(
							'As the most professional sea cucumber specialist in North America, SEACOO has been focusing on premium wild-caught sea cucumber for ten years. We are confident to bring you reliable quality products.'
						)}
					</Typography>
					<Typography
						dangerouslySetInnerHTML={{
							__html: t(
								"To celebrate Canada Day, we want to share joy with you! The limited time <span class='overstriking'>SITEWIDE 15% OFF</span> from July 1st 00：01 AM to July 7th 11：59 PM (GMT-3). Enter the coupon code <span class='red'>CANADADAY21</span> at the Checkout."
							)
						}}
					></Typography>
					<Typography>
						{t('Enjoy the best Canadian sea cucumber from pure ocean!')}
					</Typography>
					<Typography>
						{t('* For customers in U.S. and Canada only')}
					</Typography>
				</div>
				<Button color='primary' variant='contained'>
					<HashLink to='/product/#'>{t('Shop Now')}</HashLink>
				</Button>
			</div>
			<div className={classes.recommendProducts}>
				<div className='title'>
					<Typography variant='h5'>{t('Recommend Products')}</Typography>
				</div>
				<Divider />
				<Grid className='recommend-products' container spacing={10}>
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
							<HashLink
								to={`/product/Dried-West-Coast-Sea-Cucumber-Bag/#`}
								className='info product-price'
							>
								{t('Buy Now >')}
							</HashLink>
						</div>
					</Grid>
					<Grid item xs={4}>
						<HashLink
							to={`/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#`}
							className='product-image'
						>
							<img src='/images/recommend-products/red-bag.jpg' alt='red bag' />
						</HashLink>
						<div className='product-info'>
							<HashLink
								to={`/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#`}
								className='product-name'
							>
								{t('SEACOO Dried East Cost Sea Cucumber Whole 454g bag')}
							</HashLink>
							<HashLink
								to={`/product/Dried-East-Coast-Sea-Cucumber-Whole-Bag/#`}
								className='info product-price'
							>
								{t('Buy Now >')}
							</HashLink>
						</div>
					</Grid>
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
							<HashLink
								to={`/product/Dried-West-Coast-Sea-Cucumber-Bag/#`}
								className='info product-price'
							>
								{t('Buy Now >')}
							</HashLink>
						</div>
					</Grid>
				</Grid>
			</div>
		</>
	)
}
export default CanadaDay
