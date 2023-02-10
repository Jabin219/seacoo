import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import { ProductData } from 'constant'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BecheCollagen = () => {
	const { t } = useTranslation()
	return (
		<div className='product-beche2'>
			<Grid container>
				<Grid item xs={6} className='product-beche2-left'>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<LazyLoadImage
							src='/images/home/collagen-drink.png'
							alt={t('Beche Sea Cucumber Collagen Drink')}
						/>
					</HashLink>
				</Grid>
				<Grid item xs className='product-right'>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<Typography variant='h5' className='product-name'>
							Bêche <br />
							{t('Sea Cucumber + Collagen Drink')}
						</Typography>
					</HashLink>

					<Typography className='product-description'>
						{t("Women's Health Support")}
					</Typography>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<Button
							className='btn-shop'
							color='primary'
							variant='contained'
							style={{ marginRight: 30 }}
						>
							{t('Shop')}
						</Button>
					</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}
export default BecheCollagen
