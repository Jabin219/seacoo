import React from 'react'
import { isSeacooCN } from 'utils'
import ShippingAndReturnsCA from './ShippingAndReturnsCA'
import ShippingAndReturnsCN from './ShippingAndReturnsCN'
import MetaTags from 'react-meta-tags'
import { useTranslation } from 'react-i18next'

const ShippingAndReturns = () => {
	const { t } = useTranslation()
	return (
		<div>
			<MetaTags>
				<title>{t('Shipping & Returns | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						'Enjoy free shipping on eligible orders when shipping within Canada. We are making effort in getting your orders processed and shipped faster.'
					)}
				/>
			</MetaTags>
			{!isSeacooCN() ? <ShippingAndReturnsCA /> : <ShippingAndReturnsCN />}
		</div>
	)
}

export default ShippingAndReturns
