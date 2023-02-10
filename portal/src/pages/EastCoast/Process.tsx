import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { processImages } from './images'
const Process = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.process}>
			<Typography variant='h2'>{t('PROCESS')}</Typography>
			<Grid container spacing={3}>
				{processImages.map(image => {
					return (
						<Grid item xs={2} key={image.alt}>
							<img src={image.src} alt={t(image.alt)} />
							<Typography variant='h6'>{t(image.description)}</Typography>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
}

export default Process
