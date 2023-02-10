import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		maxWidth: 1080,
		margin: '0 auto',
		'& img': {
			display: 'block',
			width: 199,
			height: 235,
			margin: '0 auto',
			marginBottom: 10
		},
		'& p': {
			width: 133,
			margin: '0 auto',
			fontSize: 14,
			letterSpacing: 0.17,
			lineHeight: '18px'
		}
	}
})

const CollagenDirection = () => {
	const classes = useStyles()
	const lng = useTranslation().i18n.language
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs>
					<img
						src='/images/products/beche-collagen/direction/step1.png'
						alt='step'
					/>
					<Typography>
						1.&nbsp;
						{lng === 'en'
							? 'Open the tube, pour powders into container.'
							: '撕开包装，将粉末倒入容器中'}
					</Typography>
				</Grid>
				<Grid item xs>
					<img
						src='/images/products/beche-collagen/direction/step2.png'
						alt='step'
					/>
					<Typography>
						2.&nbsp;
						{lng === 'en' ? 'Add 200ml water.' : '添加200ml水至容器中'}
					</Typography>
				</Grid>
				<Grid item xs>
					<img
						src='/images/products/beche-collagen/direction/step3.png'
						alt='step'
					/>
					<Typography>
						3.&nbsp;{lng === 'en' ? 'Stir and mix.' : '搅拌均匀'}
					</Typography>
				</Grid>
				<Grid item xs>
					<img
						src='/images/products/beche-collagen/direction/step4.png'
						alt='step'
					/>
					<Typography>
						4.&nbsp;{lng === 'en' ? 'Ready to Drink!' : '即刻饮用'}
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default CollagenDirection
