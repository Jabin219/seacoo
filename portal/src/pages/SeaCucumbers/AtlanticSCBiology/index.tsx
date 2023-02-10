import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './style'

import { useTranslation } from 'react-i18next'

import RecommendProducts from '../../../components/RecommendProducts'

import MetaTags from 'react-meta-tags'

const AtlanticSCBiology = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<>
			<MetaTags>
				<title>
					{t('What is Atlantic Sea Cucumber and its Biology Fact?')}
				</title>
				<meta
					name='description'
					content={t(
						'Atlantic sea cucumber is produced on the eastern coast of Canada. It is one of the most abundant and widespread species of holothurians within the North Atlantic Ocean and the Barents Sea.'
					)}
				/>
			</MetaTags>
			<div className={classes.article}>
				<Typography variant='h2' className='title'>
					{t('Atlantic Sea Cucumber Biology')}
				</Typography>
				<Typography variant='h4' className='subtitle'>
					{t('Overview')}
				</Typography>
				<Typography>
					{t(
						'Atlantic sea cucumber (Cucumaria frondosa) is produced on the eastern coast of Canada and cover vast areas of the substrate at depths of less than 30 meters (100 ft). It is one of the most abundant and widespread species of holothurians within the North Atlantic Ocean and the Barents Sea (Russia), being most abundant along the eastern coast of North America.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/atlanticSCBiology/atlanticSCBiology1.png'
					alt={
						language === 'en' ? 'Underwater World SEA LIFE' : '海底世界海洋生物'
					}
				/>
				<Typography variant='h4' className='subtitle'>
					{t('Characteristic of Atlantic Sea Cucumber')}
				</Typography>
				<Typography>
					{t(
						'These sea cucumbers reach around 20 cm (8 in) in length and have ten branched oral tentacles ranging in color from orange to black. This species has a football shape with a leathery skin ranging in color from yellowish white to dark brownish-black and is covered with five rows of retractile tube feet. The young are about 1 mm to 6 mm long and are translucent orange and pink. Three of these bands of tube feet are found on bottom whereas the top rows are often reduced. Adults have a reduced numbers of spicules (skeletal structures) shaped like rounded plates with many holes. The sexes can be identified by the conspicuous tube-shaped (female) or heart-shaped (male) gonopore located under the crown of oral tentacles.'
					)}
					<br />
					<br />
					{t(
						'Atlantic sea cucumbers are commonly distributed down to 100 m in waters off Nova Scotia and Newfoundland. They exhibit a 1：1 sex ratio and colonize bedrock, boulder, gravel and sandy habitats. They attach to the substrate using tube feet and move little. They are suspension feeders that filter food from the water column.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/atlanticSCBiology/atlanticSCBiology2.png'
					alt={language === 'en' ? 'underwater perspective' : '海参水下视角'}
				/>
				<Typography variant='h4' className='subtitle'>
					{t('Habitat of Atlantic Sea Cucumber')}
				</Typography>
				<Typography>
					{t(
						'The habitat has rare human activity all the year round with no industries around it. Compared with the production areas of sea cucumbers such as the Bohai Sea and the Yellow Sea in China, it can be said that it is a true “zero pollution”. The water temperature in the production area of Atlantic sea cucumber does not exceed 14°C, and it freezes on the surface in winter. Under such circumstances, sea cucumbers are in a dormant or semi-dormant state for a long period of time, and the growth cycle is extremely long. Therefore, the nutrient content of Atlantic sea cucumber is also higher than those grow in “warm water” environment because of long period of accumulation.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/atlanticSCBiology/atlanticSCBiology3.png'
					alt={
						language === 'en' ? 'sea cucumber breeding base' : '海参养殖基地'
					}
				/>
			</div>
			<RecommendProducts />
		</>
	)
}

export default AtlanticSCBiology
