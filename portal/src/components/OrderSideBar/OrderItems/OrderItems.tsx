import React, { useContext } from 'react'

import { Typography, Grid, Divider } from '@material-ui/core'
import { useStyles } from '../style'
import { Product } from 'models'

import { useTranslation } from 'react-i18next'
import { CartContext } from 'context/CartContextProvider'

const OrderItems = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const { cart, priceFormatCN } = useContext(CartContext)

	return (
		<div className={classes.card} style={{ marginBottom: 50 }}>
			<div className='header'>
				<Typography variant='h2' className='title'>
					{t('ITEMS')}
				</Typography>
			</div>
			{cart.map((item: Product, index) => (
				<div key={index}>
					<Divider />
					<Grid
						key={item.id}
						className={classes.productCard}
						container
						spacing={1}
					>
						<Grid item xs={6}>
							<img
								style={{ width: '100%' }}
								src={item.coverImage || item.images[0].url}
								alt='product-image'
							/>
						</Grid>
						<Grid item xs className='infoBox column'>
							<div className='nameField'>
								<Typography className='productName' variant='body2'>
									{lng === 'en' ? item.name : item.nameZh}
								</Typography>
								{item.selectedOption && (
									<Typography className='subName' variant='body2'>
										{lng === 'en'
											? item.selectedOption.label
											: item.selectedOption.labelZh}
									</Typography>
								)}
							</div>

							<Typography className='item-quantity' variant='body2'>
								{lng === 'en' ? 'Quantity' : '数量'}: {item.amount}
							</Typography>
							<Typography className='bold' variant='body2'>
								{item.selectedOption
									? priceFormatCN(item.selectedOption.price)
									: priceFormatCN(item.price)}
							</Typography>
						</Grid>
					</Grid>
				</div>
			))}
		</div>
	)
}

export default OrderItems
