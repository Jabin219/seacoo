import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { isSeacooCN } from 'utils'

const useStyles = makeStyles({
	root: {
		'& .lazy-load-image-background': {
			display: 'block !important',
			margin: '0 auto'
		}
	}
})

const EastNutrients = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{!isSeacooCN() ? (
				<LazyLoadImage
					src='/images/products/east-coast-bag/nutrients/east-nutrients.jpg'
					alt='nutrients'
					width={390}
					height={600}
					effect='blur'
				/>
			) : (
				<LazyLoadImage
					src='/images/products/east-coast-bag/nutrients/east-nutrients-cn.png'
					alt='nutrients'
					width={530}
					height={350}
					effect='blur'
				/>
			)}
		</div>
	)
}

export default EastNutrients
