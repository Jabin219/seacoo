import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'

import MetaTags from 'react-meta-tags'

import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		width: 1200,
		paddingTop: 50,
		margin: '0 auto',
		'& .content': {
			width: '100%',
			paddingRight: 30,
			'& .title': {
				color: '#333',
				fontSize: 34,
				fontWeight: 600,
				letterSpacing: '0.6px',
				lineHeight: 1.4,
				borderBottom: '1px solid #f1f1f1',
				padding: '0 0 20px',
				margin: '0 0 15px'
			},
			'& .sub-tag': {
				marginTop: 75,
				marginBottom: 10,
				'& span': {
					color: '#4A90E2',
					margin: '10px 10px 10px 0',
					paddingRight: 10,
					borderRight: '1px solid #4A90E2',
					fontSize: 15,
					fontWeight: 600
				}
			},
			'& p': {
				color: '#929292',
				fontSize: 16,
				margin: '0 0 20px',
				lineHeight: 1.8,
				letterSpacing: 1
			},
			'& h4': {
				fontSize: 17,
				fontWeight: 600,
				margin: '0 0 20px',
				color: '#333',
				lineHeight: 1.4
			},
			'& img': {
				margin: '0 0 20px'
			},
			'& .blog-summary': {
				padding: 24,
				backgroundColor: '#EBEBEB',
				borderLeft: '4px solid #4A90E2',
				marginBottom: 20,
				'& h2': {
					color: '#4A90E2',
					fontSize: 20,
					fontWeight: 700,
					margin: '0 0 20px',
					lineHeight: 1.4
				},
				'& p': {
					fontSize: 16,
					color: '#777777',
					fontWeight: 600,
					margin: '0 0 20px'
				}
			}
		}
	}
})

const SeaCucumber = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>Health Benefits - Excellent Source of Nutrients|Seacoo</title>
				<meta
					name='description'
					content='Sea cucumber is low in calories and fat, and high in protein, making them a weight loss-friendly food. It is good for pregnancy.'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					Sea Cucumber: An Unusual Food With Health Benefits
				</Typography>
				<div className='sub-tag'>
					<span>Uses</span>
					<span>Nutrition Facts</span>
				</div>
				<Typography>
					While you may not be familiar with sea cucumbers, they’re considered a
					delicacy in many Asian cultures.Not to be confused with vegetables,
					sea cucumbers are marine animals.
					<br />
					They live on sea floors throughout the world, but the greatest
					population is found in the Pacific Ocean.Most sea cucumbers resemble
					large worms or caterpillars and have soft, tubular bodies.
					<br /> They are gathered by divers or farmed commercially in large,
					artificial ponds.
					<br /> In addition to their culinary appeal, sea cucumbers are used in
					traditional folk medicine to treat a wide variety of ailments.This
					article looks into the nutritional benefits of sea cucumbers and
					whether they are worth adding to your diet.
				</Typography>
				<img
					src='/images/blog/seacucumber/seacucumber1.jpg'
					alt={language === 'en' ? 'How Are Sea Cucumbers Used' : '海参怎么用'}
					style={{ width: '45%' }}
				/>
				<Typography variant='h4'>How Are Sea Cucumbers Used?</Typography>
				<Typography>
					While you may not be familiar with sea cucumbers, they’re considered a
					delicacy in many Asian cultures. Not to be confused with vegetables,
					sea cucumbers are marine animals.
					<br /> They live on sea floors throughout the world, but the greatest
					population is found in the Pacific Ocean.Most sea cucumbers resemble
					large worms or caterpillars and have soft, tubular bodies. <br />
					They are gathered by divers or farmed commercially in large,
					artificial ponds. <br />
					In addition to their culinary appeal, sea cucumbers are used in
					traditional folk medicine to treat a wide variety of ailments.This
					article looks into the nutritional benefits of sea cucumbers and
					whether they are worth adding to your diet.
					<br />
				</Typography>
				<div className='blog-summary'>
					<Typography variant='h2'>SUMMARY</Typography>
					<Typography>
						Sea cucumber is a popular ingredient in Asian and Middle Eastern
						cuisine <br /> and has been used in Traditional Chinese medicine.
					</Typography>
				</div>
				<img
					src='/images/blog/seacucumber/seacucumber2.jpg'
					alt={
						language === 'en'
							? 'Global Sea Cucumber Sales Market'
							: '全球海参销售市场'
					}
					style={{ display: 'block', width: '90%', margin: '20px auto' }}
				/>
				<Typography variant='h2' className='title'>
					Sea cucumbers are an excellent source of nutrients.
				</Typography>
				<Typography>
					Four ounces (112 grams) of sea cucumber delivers : <br />
					Calories: 60
					<br />
					Protein: 14 grams <br />
					Fat: less than one gram <br />
					Vitamin A: 8% of the RDI
					<br /> B2 (Riboflavin): 60% of the RDI
					<br /> B3 (Niacin): 16% of the RDI
					<br /> Calcium: 4% of the RDI
					<br /> Magnesium: 4% of the RDI
					<br /> Sea cucumbers are very low in calories and fat and high in
					protein, making them a weight loss-friendly food.They also contain
					many powerful substances, including antioxidants, which are good for
					your health.Sea cucumbers are high in protein, with most species
					consisting of 41–63% protein.Adding protein sources to meals and
					snacks helps keep you full by slowing down the emptying of your
					stomach.
					<br /> This can help you eat less and stabilize your blood sugar
					levels.Foods rich in protein, such as sea cucumbers, may be especially
					beneficial for people with diabetes who are looking to control their
					blood sugar levels .Plus, diets rich in protein may benefit heart
					health, help lower blood pressure and improve bone density.
				</Typography>
				<div className='blog-summary'>
					<Typography variant='h2'>SUMMARY</Typography>
					<Typography>
						Sea cucumbers are packed with nutrients. They’re low in calories and
						<br />
						fat and high in protein, making them a weight loss-friendly food.
						<br />
						<br />
					</Typography>
				</div>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default SeaCucumber
