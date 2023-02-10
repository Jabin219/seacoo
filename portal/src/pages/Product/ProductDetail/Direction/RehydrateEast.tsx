import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& img': {
			width: '80%'
		}
	}
})

const RehydrateEast = () => {
	const classes = useStyles()
	const lng = useTranslation().i18n.language
	return (
		<div className={classes.root}>
			{lng === 'en' ? (
				<img
					src='/images/products/east-coast-bag/direction/direction-en.jpg'
					alt='steps'
				/>
			) : (
				<img
					src='/images/products/east-coast-bag/direction/direction-zh.jpg'
					alt='steps'
				/>
			)}
		</div>
	)
}

export default RehydrateEast
