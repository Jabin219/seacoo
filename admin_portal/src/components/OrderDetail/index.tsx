import React from 'react'
import { Divider, Grid } from '@material-ui/core'
import { Order } from 'models'
import OrderManagement from './OrderManagement'
import OrderInformation from './OrderInformation'

interface Props {
	orderToDisplay: Order
	setOpen: (open: boolean) => void
	entrance: string
}

const OrderDetail = ({ orderToDisplay, setOpen, entrance }: Props) => {
	return (
		<Grid
			container
			style={{
				justifyContent: 'space-around',
				height: '95%',
				width: '95%',
				margin: 'auto'
			}}
			key={orderToDisplay.id}
		>
			<OrderInformation orderToDisplay={orderToDisplay!} entrance={entrance} />
			<Divider orientation='vertical' variant='middle' />
			<OrderManagement orderToDisplay={orderToDisplay!} setOpen={setOpen} />
		</Grid>
	)
}
export default OrderDetail
