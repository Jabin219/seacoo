import React from 'react'
import {
	Avatar,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText
} from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import { makeStyles } from '@material-ui/core/styles'
import { Product } from 'models'

const useStyles = makeStyles(() => ({
	root: {
		width: '26%',
		height: '100%',
		borderRadius: 10,
		borderColor: 'white',
		maxHeight: 600
	},
	inventory: {
		width: '100%',
		maxHeight: 600,
		overflow: 'auto',
		'& .inventory-list': {
			maxHeight: 540
		}
	}
}))

interface Props {
	products: Product[]
}

const InventorySection = ({ products }: Props) => {
	const classes = useStyles()
	return (
		<Paper variant='outlined' className={classes.root}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					padding: '14px 20px 0px 25px'
				}}
			>
				<Typography variant='subtitle2' style={{ color: '#000' }}>
					库存
				</Typography>

				<Typography
					variant='button'
					to='/inventory/#'
					component={HashLink}
					color='primary'
				>
					查看全部
				</Typography>
			</div>
			<div className={classes.inventory}>
				{products && (
					<List className='inventory-list'>
						{products.map((row, index) => (
							<ListItem dense alignItems='flex-start' key={index}>
								<ListItemAvatar>
									<Avatar
										alt=''
										src={row.coverImage}
										style={{
											width: 70,
											height: 70,
											borderRadius: 10,
											marginRight: 10
										}}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<Typography variant='h3' style={{ paddingTop: 10 }}>
											{`${row.productName}\n\n`}
										</Typography>
									}
									secondary={
										<Typography variant='body1' color='textPrimary'>
											{`单价: $${row.price}`}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				)}
			</div>
		</Paper>
	)
}

export default InventorySection
