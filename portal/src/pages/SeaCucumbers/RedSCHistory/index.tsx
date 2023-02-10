import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './style'

import { useTranslation } from 'react-i18next'

import RecommendProducts from '../../../components/RecommendProducts'

import MetaTags from 'react-meta-tags'

const RedSCHistory = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<>
			<MetaTags>
				<title>
					{t('How Alaska Red Sea Cucumber is harvested? - Industry History')}
				</title>
				<meta
					name='description'
					content={t(
						'Alaska red sea cucumber, the only sea cucumber species harvested commercially in British Columbia, is widely recognized for its stout muscle and high nutritional value.'
					)}
				/>
			</MetaTags>
			<div className={classes.article}>
				<Typography variant='h2' className='title'>
					{t('Alaska red sea cucumber Industry History')}
				</Typography>

				<Typography>
					{t(
						'The Alaska red sea cucumber (Parastichopus californicus), also named giant red sea cucumber, is the only sea cucumber species harvested commercially in British Columbia. The commercial fishery is a limited entry fishery with 85 license eligibilities. The fishery commences in October and is scheduled for 8 weeks.'
					)}
					<br />
					<br />
					{t(
						'Alaska red sea cucumber is widely recognized in the Chinese market for its stout muscle and high nutritional value. China is the largest market for sea cucumber, where the skins have been used for centuries as a medicinal food.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/redSCHistory/redSCHistory1.jpg'
					alt={language === 'en' ? 'Vancouver Fishing Village' : '温哥华渔村'}
				/>
				<Typography>
					{t(
						'Harvest is by hand picking while SCUBA diving. All of the fresh sea cucumbers are sent to processing plants by refrigerated trucks to ensure their liveliness, and they are processed immediately using natural and healthy methods to ensure good quality. No ingredients are added during processing. The average annual catch of Alaskan red sea cucumber in recent years is about 500 tons.'
					)}
				</Typography>
				<img
					src='/images/seacucumber/redSCHistory/redSCHistory2.jpg'
					alt={
						language === 'en' ? 'sea cucumber Industry History' : '海参行业历史'
					}
				/>
				<Typography>
					{t(
						'Harvest is by hand picking while SCUBA diving. All of the fresh sea cucumbers are sent to processing plants by refrigerated trucks to ensure their liveliness, and they are processed immediately using natural and healthy methods to ensure good quality. No ingredients are added during processing. The average annual catch of Alaskan red sea cucumber in recent years is about 500 tons.'
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

export default RedSCHistory
