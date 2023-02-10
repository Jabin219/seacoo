import React from 'react'
import { isSeacooCN } from 'utils'
import TermOfUseCA from './TermOfUseCA'
import TermOfUseCN from './TermOfUseCN'
import MetaTags from 'react-meta-tags'
import { useTranslation } from 'react-i18next'

const TermOfUse = () => {
	const { t } = useTranslation()
	return (
		<div>
			<MetaTags>
				<title>{t('Term and Conditions | Seacoo')}</title>
				<meta
					name='description'
					content={t('Term of use. The website is operated by Seacoo.')}
				/>
			</MetaTags>
			{!isSeacooCN() ? <TermOfUseCA /> : <TermOfUseCN />}
		</div>
	)
}

export default TermOfUse
