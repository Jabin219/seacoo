import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from './style'
import { becheDetailImages } from 'constant/becheDetailImages'

const BecheFeatures = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container spacing={8} className='additional-description'>
				<Grid item xs={6} className='additional-description-img'>
					<img src='/images/products/beche/product-img2.jpg' alt='' />
				</Grid>
				<Grid
					item
					xs={6}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center'
					}}
				>
					<Typography
						variant='h4'
						className='title'
						style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
					>
						Product Details
					</Typography>
					<br />
					<br />
					<div>
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							Medicinal Ingredients:
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							Sea Cucumber&nbsp; (Cucumaria frondosa, Whole) ………………….600mg
						</Typography>
						<br />
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							Recommended Dose:
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							Adult – Take 1 capsules once daily.
						</Typography>
						<br />
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							Recommended Use:
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							Source of antioxidants. Source of amino acids involved in muscle
							protein synthesis.
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid container className='description-img-group' spacing={2}>
				{becheDetailImages.map(image => (
					<Grid item xs={4} key={image.title}>
						<div>
							<img src={image.src} alt={image.alt} />
							<Typography style={{ fontWeight: 'bold' }}>
								{image.title}
							</Typography>
							<br />
							<Typography>{image.details}</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default BecheFeatures
