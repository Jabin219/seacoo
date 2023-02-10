import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

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
			marginBottom: 200,
			'& .MuiGrid-item': {
				'& .img-container': {
					width: 218,
					height: 218,
					margin: '0 auto',
					'& img': { marginBottom: 10 },
					'& p': {
						width: 200,
						margin: '0 auto',
						fontSize: 14,
						letterSpacing: 0.17,
						lineHeight: '20px',
						'& span': {
							fontWeight: 700
						}
					}
				}
			}
		}
	}
})

const ChowderDirection = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='title-container'>
				<Typography variant='h6'>如何</Typography>
				<Typography variant='h5'>加热海参鱼胶佛跳墙</Typography>
			</div>
			<Grid container>
				<Grid item xs>
					<div className='img-container'>
						<LazyLoadImage
							src='/images/products/chowder/direction/boil.png'
							alt=''
							effect='blur'
							width={218}
							height={218}
						/>
						<Typography>
							<span>煮法：</span>
							取出小碗，打开碗盖，撕开易拉罐，将冷冻的固态食材倒入小锅，小火加热至浓汤化开即可食用。
						</Typography>
					</div>
				</Grid>
				<Grid item xs>
					<div className='img-container'>
						<LazyLoadImage
							src='/images/products/chowder/direction/steam.png'
							alt=''
							effect='blur'
							width={218}
							height={218}
						/>
						<Typography>
							<span>蒸法：</span>
							取出小碗，打开碗盖，撕开易拉罐，放入蒸锅加热至浓汤化开即可食用。
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ChowderDirection
