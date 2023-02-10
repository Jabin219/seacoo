import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { processImages } from './images'
import { useStyles } from './style'

const Process = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.process}>
			<Typography variant='h2'>{t('PROCESS')}</Typography>
			<Grid container spacing={5}>
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
