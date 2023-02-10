import React, { useEffect, useState } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { Product, Order } from 'models'

interface Props {
	products: Product[]
	unshippedOrders: Order[] | undefined
}

const MainSection = ({ products, unshippedOrders }: Props) => {
	const [productsOutOfStock, setProductsOutOfStock] = useState(0)
	enum productStatus {
		published = 'published',
		outOfStock = 'outOfStock'
	}
	const countOutOfStockProducts = () => {
		const count =
			products &&
			products.reduce(
				(accumulator, product) =>
					accumulator + (product.status === productStatus.outOfStock ? 1 : 0),
				0
			)
		setProductsOutOfStock(count)
	}
	useEffect(() => {
		countOutOfStockProducts()
		// eslint-disable-next-line
	}, [products])
	return (
		<Grid
			id='main-section'
			style={{
				width: '100%',
				height: 100,
				backgroundColor: 'white',
				borderRadius: 10,
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}
		>
			<Grid>
				<Typography variant='subtitle1'>
					{unshippedOrders ? unshippedOrders.length : '0'}
				</Typography>
				<Typography variant='subtitle2'>待发货</Typography>
			</Grid>
			<Grid>
				<Typography variant='subtitle1'>{productsOutOfStock}</Typography>
				<Typography variant='subtitle2'>需补货</Typography>
			</Grid>
			<Grid>
				<Typography variant='subtitle1'>-</Typography>
				<Typography variant='subtitle2'>交易量</Typography>
			</Grid>
			<Divider
				orientation='vertical'
				style={{
					height: '60%',
					backgroundColor: '#EEEEEE',
					width: '1px'
				}}
			/>
			<Grid>
				<Typography variant='subtitle1'>-</Typography>
				<Typography variant='subtitle2'>新消息</Typography>
			</Grid>
			<Grid>
				<Typography variant='subtitle1'>-</Typography>
				<Typography variant='subtitle2'>折扣使用</Typography>
			</Grid>
		</Grid>
	)
}

export default MainSection
