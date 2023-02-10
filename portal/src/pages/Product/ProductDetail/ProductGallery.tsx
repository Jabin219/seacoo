import { Grid, GridList, GridListTile } from '@material-ui/core'
import { Product } from 'models'
import React from 'react'

interface Props {
	product: Product
	largeImg: any
	setLargeImg: (largeImg: any) => void
	video: string
	setVideo: (video: string) => void
}

const ProductGallery = ({
	product,
	largeImg,
	setLargeImg,
	video,
	setVideo
}: Props) => {
	return (
		<Grid item xs={6} className='product-image'>
			<div className='large-img-holder'>
				{largeImg && (
					<img className='large-img' src={largeImg} alt='largeImg' />
				)}
				{video && <video src={`${product.video}`} controls />}
			</div>
			<GridList cols={4} className='mini-img-group'>
				{product.videoImage && (
					<GridListTile className='mini-img-holder'>
						<img
							src={product.videoImage}
							width={'100%'}
							height={'100%'}
							onClick={() => {
								setVideo(product.video)
								setLargeImg('')
							}}
						/>
					</GridListTile>
				)}
				{product.images &&
					product.images.map(image => {
						return (
							<GridListTile key={image.url} className='mini-img-holder'>
								<img
									src={image.url}
									alt=''
									onClick={() => {
										setLargeImg(image.url)
										setVideo('')
									}}
								/>
							</GridListTile>
						)
					})}
			</GridList>
		</Grid>
	)
}

export default ProductGallery
