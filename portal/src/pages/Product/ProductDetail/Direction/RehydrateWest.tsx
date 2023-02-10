import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& .title-container': {
			lineHeight: '24px',
			marginBottom: 50,
			'& h6': {
				color: '#0080b9',
				fontSize: 14,
				letterSpacing: 0.17,
				textAlign: 'center',
				fontWeight: 700
			},
			'& h5': {
				fontSize: 20,
				letterSpacing: 0.24,
				fontWeight: 700
			}
		},
		'& .MuiGrid-container': {
			maxWidth: 1080,
			margin: '0 auto',
			'& .MuiGrid-item': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: 70,
				'& .step-image': {
					width: 163,
					height: 163,
					marginBottom: 25,
					'& img': {
						width: '100%'
					}
				},
				'& .text': {
					fontSize: 14,
					lineHeight: '18px',
					letterSpacing: 0.17
				}
			},
			'& .last-step': {
				margin: '0 auto'
			}
		}
	}
})

const RehydrateWest = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.root}>
			<div className='title-container'>
				<Typography variant='h6'>{t('How to')}</Typography>
				<Typography variant='h5'>
					{t('Rehydrate West Coast Sea Cucumber')}
				</Typography>
			</div>
			<Grid container spacing={7}>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step1.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						1.&nbsp;
						{t(
							'Place dry sea cucumber into a clean, oil-free container filled with fresh cold water.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step2.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						2.&nbsp;
						{t(
							'Store the container with water and sea cucumber in the refrigerator for 24 hours, changing the water after 12 hours.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step3.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						3.&nbsp;
						{t(
							'Take them out of the container, cut the sea cucumber in half lengthwise and rinse out the inside thoroughly to remove any remaining sand or natural impurities.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step4.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						4.&nbsp;
						{t(
							'Heat the sea cucumber with water until water start to boiling.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step5.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						5.&nbsp;
						{t(
							'Turn down the heat to medium after water boiling, then continue cooking for 30 minutes.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step6.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						6.&nbsp;
						{t(
							'Put the cooked sea cucumber into a clean container filled with fresh cold water, and store in the refrigerator for 24 hours.'
						)}
					</Typography>
				</Grid>
				<Grid item xs={4} className='last-step'>
					<div className='step-image'>
						<img
							src='/images/products/west-coast-bag/direction/step7.png'
							alt='step'
						/>
					</div>

					<Typography className='text'>
						7.&nbsp;
						{t(
							'After dry sea cucumber all get re-hydrated, they can be stored in refrigerator for 12 months.'
						)}
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default RehydrateWest
