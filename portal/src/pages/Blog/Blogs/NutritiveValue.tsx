import React from 'react'

import { Typography, makeStyles } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'

import MetaTags from 'react-meta-tags'

import { useTranslation } from 'react-i18next'
const useStyles = makeStyles({
	nutritive: {
		maxWidth: 600,
		margin: '50px auto',
		'& .title': {
			color: '#4d4d4e',
			fontSize: 30,
			fontWeight: 600,
			textAlign: 'center',
			marginBottom: 50
		},
		'& .subtitle': {
			color: '#0080b9',
			fontSize: 18,
			fontWeight: 'bold',
			marginBottom: 30
		},
		'& p': {
			color: '#4d4d4e',
			fontSize: 14,
			lineHeight: '18px',
			marginBottom: 20
		},
		'& img': {
			display: 'block',
			margin: '0 auto',
			marginBottom: 80
		}
	}
})

const NutritiveValue = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div>
			<MetaTags>
				<title>Nutrition Values - The Benefits of Sea Cucumber|SEACOO</title>
				<meta
					name='description'
					content='Canadian Sea cucumber has an irreplaceable effect in strengthing the immunity system, promoting bone growth and quick repair, improving male function and skin condition, and anti-ageing.'
				/>
			</MetaTags>
			<div className={classes.nutritive}>
				<Typography variant='h2' className='title'>
					Nutritive Value
				</Typography>
				<Typography variant='h4' className='subtitle'>
					Anti-oxidation & Anti-aging
				</Typography>
				<Typography>
					In 2010, during the Annual Meeting & Food Expo (Chicago, USA,
					2010.07), scientists pointed out that the tissue of Canadian sea
					cucumber shows ACE activity and has excellent absorption capacity of
					free radical. Large accumulation of free radicals inside human bodies
					that cannot be metabolized account for accelerating aging.
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive1.png'
					alt={language === 'en' ? 'Anti-aging food' : '抗老化食品'}
				/>

				<Typography variant='h4' className='subtitle'>
					Promote growth & Quick repair
				</Typography>
				<Typography>
					In 2010, during the Annual Meeting & Food Expo (Chicago, USA,
					2010.07), scientists pointed out that the tissue of Canadian sea
					cucumber shows ACE activity and has excellent absorption capacity of
					free radical. Large accumulation of free radicalsinside human bodies
					that cannot be metabolized account for accelerating aging.
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive2.png'
					alt={
						language === 'en' ? 'Family Health Supplements' : '家庭健康营养品'
					}
				/>

				<Typography variant='h4' className='subtitle'>
					Improve male function & Skin care
				</Typography>
				<Typography>
					The content of arginine in Canadian sea cucumber is much higher than
					that of other marine products. Arginine is an important component of
					male sperm cells and has a good tonic effect on males. Arginine is
					also a raw material for the synthesis of human collagen and can
					stimulate regeneration and repair of cells. Collagen has rich content
					of glycine and basic amino acids, which are the basis of haemopoiesis,
					nourishing blood and promoting calcium absorption. It has an
					irreplaceable effect on women’s beauty and skin care.
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive3.png'
					alt={language === 'en' ? "Men's health supporter" : '男性功能增强'}
				/>

				<Typography variant='h4' className='subtitle'>
					Preferred supplementary tonic during pregnancy
				</Typography>
				<Typography>
					Canadian sea cucumber after dehydration contains about 15 grams of
					protein per 100 grams and 18 kinds of amino acids that human must
					have. It is very helpful for the normal development of fetus. Canadian
					sea cucumber also contains DHA, commonly known as “brain gold,” which
					is not only an essential substance for building normal immunity, but
					also an important nutrient for the development of brain nerve cells.
					Daily consumption of Canadian sea cucumbers by pregnant woman can
					provide sufficient ‘brain gold’ for the fetus, making the child’s
					nervous system healthily develop and truly make the child “not lose
					from the start”.
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive4.png'
					alt={language === 'en' ? 'best Pregnancy foods' : '最好的孕期食品'}
				/>
				<br />
				<br />
			</div>
			<RecommendProducts />
		</div>
	)
}

export default NutritiveValue
