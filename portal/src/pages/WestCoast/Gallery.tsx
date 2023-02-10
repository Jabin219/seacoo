import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { galleryImages } from './images'
import { useStyles } from './style'

const Gallery = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.gallery}>
			<Typography variant='h2' style={{ fontWeight: 600 }}>
				{t('GALLERY')}
			</Typography>
			<Grid container spacing={5}>
				{galleryImages.map(image => {
					return (
						<Grid item xs={2} key={image.alt}>
							<img src={image.src} alt={t(image.alt)} />
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
}

export default Gallery
