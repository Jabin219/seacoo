import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import { ProductData } from 'constant'

export default function BecheCollagen() {
	return (
		<div className='product-collagen'>
			<Grid container>
				<Grid item xs={6} className='product-collagen-left'>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<img
							src='/images/home/collagen-drink.png'
							alt='Beche海参胶原蛋白饮'
						/>
					</HashLink>
				</Grid>
				<Grid item xs className='product-right'>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<Typography variant='h5' className='product-name'>
							Bêche <br />
							海参+胶原蛋白冲剂
						</Typography>
					</HashLink>

					<Typography className='product-description'>
						纯天然有机胶原蛋白与海参精华粉的完美结合，加倍抗氧化，营养更均衡。
					</Typography>
					<HashLink to={`/product/${ProductData.becheCollagen.pathName}/#`}>
						<Button
							className='btn-shop'
							color='primary'
							variant='contained'
							style={{ marginRight: 30 }}
						>
							购买
						</Button>
					</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}
