import React from 'react'
import { isSeacooCN } from 'utils'
import FAQsCA from './FAQsCA'
import FAQsCN from './FAQsCN'
import MetaTags from 'react-meta-tags'
import { useTranslation } from 'react-i18next'

const FAQs = () => {
	const { t } = useTranslation()
	return (
		<div>
			<MetaTags>
				<title>{t('FAQ & Info | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						'For frequently asked questions, find the answers in Seacoo frequently-asked questions.'
					)}
				/>
			</MetaTags>
			{!isSeacooCN() ? <FAQsCA /> : <FAQsCN />}
		</div>
	)
}

export default FAQs
