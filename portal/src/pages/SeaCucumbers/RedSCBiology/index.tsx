import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './style'

import { useTranslation } from 'react-i18next'

import RecommendProducts from '../../../components/RecommendProducts'

import MetaTags from 'react-meta-tags'

const RedSeaCucumberBiology = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<>
			<MetaTags>
				<title>
					{t('What is Alaska Red Sea Cucumber and its Biology Fact?')}
				</title>
				<meta
					name='description'
					content={t(
						'Alaska red sea cucumber has rich nutritional value and it is mainly produced in deep-sea cold water areas off the eastern coast of the Pacific, such as Vancouver.'
					)}
				/>
			</MetaTags>
			<div className={classes.article}>
				<Typography variant='h2' className='title'>
					{t('Alaska Red Sea Cucumber Biology')}
				</Typography>
				<Typography variant='h4' className='subtitle'>
					{t('Overview')}
				</Typography>
				<Typography>
					{t(
						'Alaska red sea cucumber belongs to the Echinodermata, Holothuroidea, Synallactida, Stichopodidae, and Apostichopus, and has rich nutritional value. It is mainly produced in the North American coastal areas off the eastern coast of the Pacific, and deep-sea cold water areas such as Vancouver and Washington.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/redSCBiology/rscbiology1.png'
					alt={
						language === 'en'
							? 'Alaska Red Sea Cucumber Biology'
							: '阿拉斯加红刺参生物学'
					}
				/>
				<Typography variant='h4' className='subtitle'>
					{t('Characteristic of Alaska Sea Cucumber')}
				</Typography>
				<Typography>
					{t(
						'Alaska red sea cucumber is a medium-sized sea cucumber species. It is in the same Genus and Family as Liao sea cucumber (Apostichopus Japonicus). It has rich nutritive value and delicious taste, and belongs to high-end sea cucumber species. It can grow to a length of 50 cm (1 ft 8 in) and a width of 5 cm (2 in). It has a soft, cylindrical body, with red-brown to yellowish leathery skin. It has an endoskeleton just below the skin. The mouth and anus are on opposite ends of the body. The mouth is surrounded by twenty retractable tentacles that are used to bring food in. Five rows of tube feet extend from the mouth to the anus. They use their tube feet located on the underside of their body to attach themselves to rocks.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/redSCBiology/rscbiology2.png'
					alt={language === 'en' ? 'Sea cucumber feet' : '海参的脚'}
				/>
				<Typography variant='h4' className='subtitle'>
					{t('Habitat of Alaska Sea Cucumber')}
				</Typography>
				<Typography>
					{t(
						'It is a common species distributed from Mexico to Southeast Alaska and has been observed at least as far west and north as the Alaska Peninsula, Aleutian Islands, and Bering Sea. The abundance of sea cucumbers in Southeast Alaska is greatest in the southern and western portions in protected bays and inlets.'
					)}
					<br />
					<br />
					{t(
						'These sea cucumbers exist in a range of habitat types ranging from shell debris and gravel, mud and silt, and even exist on rock and boulders. A study conducted in Southeast Alaska showed that the most common habitat for sea cucumbers was shell debris and gravel. It occupies a broad range of subtidal habitats from nearshore shallows to over 100 fathoms. P. californicus appears to favor locations with moderate current, avoiding mud bottoms and areas subject to inundation by freshwater or glacial runoff.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/redSCBiology/rscbiology3.png'
					alt={language === 'en' ? 'sea area Without pollution' : '零污染海域'}
				/>
			</div>
			<RecommendProducts />
		</>
	)
}

export default RedSeaCucumberBiology
