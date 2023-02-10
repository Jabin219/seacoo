import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ChowderNutrients = () => {
	return (
		<div>
			<div style={{ width: 382, margin: '0 auto' }}>
				<LazyLoadImage
					src='/images/products/chowder/nutrients/nutrients.jpg'
					width={382}
					height={320}
					effect='blur'
				/>
			</div>
		</div>
	)
}

export default ChowderNutrients
