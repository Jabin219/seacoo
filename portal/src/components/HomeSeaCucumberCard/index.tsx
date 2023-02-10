import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const HomeSeaCucumberCard = (props: any) => {
	const {
		productClass,
		productPath,
		productRegion,
		productName,
		productAlias,
		productDescription,
		learnMorePath
	} = props
	const { t } = useTranslation()
	return (
		<div className={productClass}>
			<div className='text' style={{ padding: '127px 260px 20px 70px' }}>
				<div className='product-name'>
					<HashLink to={productPath}>
						<Typography variant='h6'>
							{t(productRegion)}
							<br /> {t(productName)}
						</Typography>
						<Typography>({productAlias})</Typography>
					</HashLink>
				</div>

				<Typography className='product-description'>
					{t(productDescription)}
				</Typography>
				<div className='buttons'>
					<HashLink to={productPath} style={{ display: 'block' }}>
						<Button className='btn-shop' color='primary' variant='contained'>
							{t('Shop')}
						</Button>
					</HashLink>
					<HashLink to={learnMorePath}>{t('Learn more')}</HashLink>
				</div>
			</div>
			<HashLink to={productPath} className='overlay'></HashLink>
		</div>
	)
}

export default HomeSeaCucumberCard
