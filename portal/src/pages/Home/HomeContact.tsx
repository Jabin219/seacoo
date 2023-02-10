import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeContact = () => {
	const { t } = useTranslation()
	return (
		<div className='home-contact'>
			<Grid container>
				<Grid item xs className='home-contact-left'>
					<LazyLoadImage
						src='/images/home/Dry sea cucumber packing.png'
						alt='Dry sea cucumber packing'
					/>
				</Grid>
				<Grid item xs className='home-contact-right'>
					<Typography variant='h5'>
						{t('CFIA approved processing plant')}
					</Typography>
					<Typography variant='body2' className='text'>
						{t(
							'Two processing plants in each of Halifax and Vancouver been processing total of 6 million lbs of Canadian sea cucumber each year, with a professional quality control team under CFIA approval.'
						)}
					</Typography>
					<Typography variant='body2'>
						{t('Interested in Wholesale or OEM requirements?')}
					</Typography>
					<HashLink to='/contact/#'>{t('Contact us')}</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}
export default HomeContact
