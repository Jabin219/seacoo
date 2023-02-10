import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import { ProductData } from 'constant'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BechePowder = () => {
	const { t } = useTranslation()
	return (
		<div className='product-beche1'>
			<Grid container>
				<Grid item xs={7} className='product-left'>
					<HashLink to={`/product/${ProductData.bechePowder.pathName}/#`}>
						<Typography variant='h5' className='product-name'>
							Bêche <br />
							{t('Sea Cucumber Supplement')}
						</Typography>
					</HashLink>

					<Typography className='product-description'>
						{t(
							'Tap into a natural source of antioxidants with Bêche, add the natural benefits of wild Canadian Sea Cucumber supplement to your own health regimen today.'
						)}
					</Typography>
					<HashLink to={`/product/${ProductData.bechePowder.pathName}/#`}>
						<Button
							className='btn-shop'
							color='primary'
							variant='contained'
							style={{ marginRight: 30 }}
						>
							{t('Shop')}
						</Button>
					</HashLink>

					<a href='https://beche.ca/' target='_blank' rel='noreferrer'>
						{t('Learn more')}
					</a>
				</Grid>

				<Grid item xs className='product-beche1-right'>
					<HashLink to={`/product/${ProductData.bechePowder.pathName}/#`}>
						<LazyLoadImage
							src='/images/home/sea-cucumber-powder.png'
							alt={t('sea cucumber powder')}
						/>
					</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}
export default BechePowder
