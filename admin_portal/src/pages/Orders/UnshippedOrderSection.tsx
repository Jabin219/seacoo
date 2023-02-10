import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import OrderDetail from 'components/OrderDetail'
import { Order } from 'models'
import OrderContext from 'context'

const useStyles = makeStyles({
	orderContainer: {
		height: 450,
		marginBottom: 20,
		backgroundColor: 'white',
		paddingTop: 50,
		paddingBottom: 30
	}
})

const UnshippedOrderSection = () => {
	const classes = useStyles()
	const { unshippedOrders } = useContext(OrderContext)
	return (
		<div>
			{unshippedOrders &&
				(unshippedOrders as Order[]).map((unshippedOrder: Order) => (
					<div className={classes.orderContainer} key={unshippedOrder.id}>
						<OrderDetail
							orderToDisplay={unshippedOrder}
							setOpen={() => {}}
							entrance='unshipped-orders'
						/>
					</div>
				))}
		</div>
	)
}
export default UnshippedOrderSection
