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
			}
		}
	}
})

const ChineseFood = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>
					Sea Cucumber Recipe - Stir Fried Sea Cucumber with Tofu & Vegetables
				</title>
				<meta
					name='description'
					content='Delicious recipe for cooking sea cucumber in the traditional chinese way.'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					TRADITIONAL CHINESE FOOD RECIPES: NOURISH YOUR VITAL SUBSTANCES
				</Typography>
				<div className='sub-tag'>
					<span>Chinese Food</span>
					<span>Food Recipes</span>
				</div>
				<Typography>
					Sea Cucumbers are nutrient-rich marine animals from the Holothuroidea
					class of the Echinoderm family, which includes of sea stars, sea
					urchins, and sand dollars. According to traditional Chinese food, the
					sea cucumber nourishes the blood and is one of the most power source
					life in long-established Chinese traditional food.
					<br />
					Jing 精 nutritive essence, refined, perfected, extract, sperm, seed Qi
					氣 vitality, energy, force, vapor, breath, spirit, vigor, attitude
					Shen 神 spirit, soul, mind, god, deity, supernatural being.
				</Typography>
				<img
					src='/images/blog/traditionalcf/traditionalcf1.jpg'
					alt=''
					style={{ width: '100%' }}
				/>
				<Typography>
					Sea cucumber also notifies kidney 气 (treats disorders of the kidney
					system, including reproductive organs), and moistens dryness
					(especially of the intestines). It has a salty quality and warming
					nature.Common medicinal benefits of sea cucumber in China include
					reducing inflammation and relieving muscle pain, supporting joint
					health, strengthening the immune system, improving sleep and recovery,
					boosting energy levels, improving skin and anti-aging benefits.
				</Typography>
				<Typography variant='h4'>Food Recipes</Typography>
				<Typography>
					Sea cucumber also notifies kidney 气 (treats disorders of the kidney
					system, including reproductive organs), and moistens dryness
					(especially of the intestines). It has a salty quality and warming
					nature.Common medicinal benefits of sea cucumber in China include
					reducing inflammation and relieving muscle pain, supporting joint
					health, strengthening the immune system, improving sleep and recovery,
					boosting energy levels, improving skin and anti-aging benefits.
				</Typography>
				<img
					src='/images/blog/traditionalcf/traditionalcf2.jpg'
					alt={
						language === 'en'
							? 'Chinese Recipes sea cucumber Tofu'
							: '豆腐蔬菜炒海参'
					}
					style={{ width: '40%' }}
				/>
				<Typography variant='h4'>
					A.Stir Fried Sea Cucumber with Tofu and Vegetables
				</Typography>
				<Typography>
					Ingredients <br /> 1 canned abalone
					<br /> Fish Maw 花膠
					<br /> Sea Cucumber 海參
					<br /> Chinese Mushrooms
					<br /> Dried Scallop 江瑤柱
					<br /> Broccolli (or any veg)
					<br /> sliced ginger
					<br />
					Oyster sauce
					<br /> dark soya sauce
					<br />
					<br /> You can mix and match with the ingredients. Key is the abalone
					so can just add mushrooms and scallop if u dont have the sea cucumber
					and fish maw. We add them since chinese thinks its more classy.
					<br />
					<br /> 1. Quick rinse for all ingredients. Mushroom and scallop soak
					in a bowl of water, remove mushroom stem. Save the water for later
					use. As for the fish maw soak for 30mins until slightly soften. Rinse
					out the seacucumber and cut them in chunks.
					<br />
					<br /> 2. Now get a pot of water add in 2 slices of ginger. Put it to
					a boil, then throw in the fish maw for 1 min and take it out and rinse
					in cold water. Do the same with the sea cucumber in the same pot of
					ginger water. Drain them well.
					<br />
					<br /> 3. Open the can of abalone, these are cooked already and it
					taste great also on its own. Usually these cost around 400hkd a can.
					Ready all ingredients. <br />
					<br />
					4. Little oil med heat and fry the ginger slightly golden brown. Then
					throw in the bowl of mushrooms and scallop together with the water.
					Boil for a min or two then throw in the fish maw and sea cucumber. Add
					2 spoonful of oyster sauce and mix. Now throw in the sbalone with
					sauce then add in hot water until ingredients half covered. Add a
					spoon of dark soya sauce to get a brownish coloured stew. Change to
					low heat lids slightly opened and simmer it for 30mins to an hour.{' '}
					<br />
					<br />
					5. Cook until the sauce sightly thickens then give it a taste. Leave
					it aside for a few hours best is over night in fridge so the fish maw
					and sea cucumber can be more tasty. 6.Reheat the stew and added boiled
					some vegetables any kind and combine them. DONE!
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default ChineseFood
