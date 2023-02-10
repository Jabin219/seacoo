import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import { ProductData } from 'constant'

export default function BecheChowder() {
	return (
		<div className='product-chowder'>
			<Grid container spacing={5}>
				<Grid item xs={6} className='product-left'>
					<HashLink to={`/product/${ProductData.chowder.pathName}/#`}>
						<Typography variant='h5' className='product-name'>
							SEACOO新品
							<br />
							海参鱼胶佛跳墙
						</Typography>
					</HashLink>

					<Typography className='product-description'>
						佛跳墙选用加拿大北极海参、大西洋鳕鱼胶等汇聚到一起，加入高汤，文火煨制而成。
						<br />
						一天一夜文火熬煮，浓香四溢。
					</Typography>
					<HashLink to={`/product/${ProductData.chowder.pathName}/#`}>
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

				<Grid item xs={6} className='product-chowder-right'>
					<HashLink to={`/product/${ProductData.chowder.pathName}/#`}>
						<img src='/images/home/chowder.jpg' alt='佛跳墙' />
					</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}
