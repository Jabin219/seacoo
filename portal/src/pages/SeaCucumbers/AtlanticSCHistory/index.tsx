import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './style'

import { useTranslation } from 'react-i18next'

import RecommendProducts from '../../../components/RecommendProducts'

import MetaTags from 'react-meta-tags'

const AtlanticSCHistory = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<>
			<div className={classes.article}>
				<MetaTags>
					<title>
						{t('How Atlantic Sea Cucumber is harvested? - Industry History')}
					</title>
					<meta
						name='description'
						content={t(
							'Canadian Atlantic Sea Cucumber is harvested from the eastern coast of Nova Scotia. The value of the species was derived from its hypertrophic gluten.'
						)}
					/>
				</MetaTags>
				<Typography variant='h2' className='title'>
					{t('Atlantic sea cucumber Industry History')}
				</Typography>
				<img
					src='/images/seacucumber/atlanticSCHistory/atlanticSCHistory1.jpg'
					alt={language === 'en' ? 'wild-caught sea cucumber' : '野生捕捞海参'}
				/>
				<Typography>
					{t(
						'Canadian Atlantic sea cucumber (Cucumaria frondosa) officially began commercial fishing in 1998. The first fishing area locates at the eastern coast of Nova Scotia. The original commercial value of the species was derived from its hypertrophic gluten which was later widely used as Chinese food ingredients. Since 2005, with the continuous decline in the quality of China’s sea cucumber breeding environment, Canada’s wild and pollution-free sea cucumbers have begun to enter the list of health care product. Today, Atlantic sea cucumber has been accepted by the majority of those with intention of health care.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/atlanticSCHistory/atlanticSCHistory2.jpg'
					alt={language === 'en' ? 'Live sea cucumber' : '鲜活海参'}
				/>
				<Typography>
					{t(
						'Atlantic sea cucumber grows wildly and is subjected to trawl fishing. The cost of breeding is zero and the labor cost is low. The economical fishing of Atlantic sea cucumber is under the strict supervision of the Canadian government and its economic benefit is significant. Since the mid-1990s, the annual catch of Atlantic sea cucumber has increased significantly to 3,500 tons.'
					)}
				</Typography>
				<br />
				<br />
				<br />
				<br />
				<Typography variant='h4'>
					{t('Best Thing We Do. Only Thing We Focus.')}
				</Typography>
				<br />
				<br />
				<br />
				<br />
			</div>
			<RecommendProducts />
		</>
	)
}

export default AtlanticSCHistory
