import React from 'react'
import { useTranslation } from 'react-i18next'

const CollagenNutrients = () => {
	const lng = useTranslation().i18n.language
	return (
		<div>
			{lng === 'en' ? (
				<img
					src='/images/products/beche-collagen/nutrients/collagen-nutrients.png'
					alt='nutrients'
					width='390'
					height='600'
					style={{ display: 'block', margin: '0 auto' }}
				/>
			) : (
				<img
					src='/images/products/beche-collagen/nutrients/collagen-nutrients-zh.jpg'
					alt='nutrients'
					width='390'
					height='600'
					style={{ display: 'block', margin: '0 auto' }}
				/>
			)}
		</div>
	)
}

export default CollagenNutrients
