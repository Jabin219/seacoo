import React, { useState, useContext } from 'react'
import {
	TableCell,
	TableRow,
	Paper,
	Button,
	Dialog,
	Typography
} from '@material-ui/core'
import moment from 'moment'
import Table from 'components/Table'
import { Order, OrderStatus } from 'models'
import { detailedOrderTableColumns } from 'constant'
import OrderDetail from 'components/OrderDetail'
import OrderContext from 'context'
import { useStyles } from './style'
import Filters from './Filters'
import { getCurrencySymbol, getPayMethod } from 'utils'
const OrderHistorySection = () => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [orderToDisplay, setOrderToDisplay] = useState<Order>()
	const {
		page,
		setPage,
		orders,
		hasNext,
		setSelectedStatus,
		setSelectedDate,
		setSearchedOrderNumber,
		setSelectedDomain
	} = useContext(OrderContext)
	const handleClick = (orderToDisplay: Order) => () => {
		setOpen(true)
		setOrderToDisplay(orderToDisplay)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleReset = async () => {
		setSelectedStatus('all')
		setSelectedDate(undefined)
		setSearchedOrderNumber('')
		setSelectedDomain('all')
	}

	return (
		<div className={classes.root}>
			<Paper
				variant='outlined'
				style={{
					width: '100%',
					height: '100%',
					borderRadius: 0,
					borderColor: 'white'
				}}
			>
				<Filters handleReset={handleReset} />
				<Table
					size='medium'
					hasNext={hasNext}
					columns={detailedOrderTableColumns}
					page={page}
					setPage={setPage}
					rows={orders}
					rowBuilder={(row: Order) => {
						const { orderDetail } = row
						if (row) {
							return (
								<TableRow tabIndex={-1} key={row.orderNumber}>
									<TableCell>
										{moment(row.createdAt).format('YYYY/MM/DD HH:mm')}
									</TableCell>
									<TableCell>
										<Typography
											style={{
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												fontSize: '14px',
												color: 'rgba(0,0,0,0.54',
												width: 250
											}}
										>
											{orderDetail.map(
												(orderDetail: any, index: number) =>
													orderDetail.nameZh +
													(index !== row.orderDetail.length - 1 ? ' / ' : '')
											)}
										</Typography>
									</TableCell>
									<TableCell>{row.domain}</TableCell>
									<TableCell>{getPayMethod(row.paymentMethod)}</TableCell>
									<TableCell>{row.orderNumber}</TableCell>
									<TableCell>
										<Typography
											style={{
												fontSize: '14px',
												color: 'rgba(0,0,0,0.54'
											}}
										>
											{getCurrencySymbol(row.shippingAddress.country) +
												row.totalPrice}
										</Typography>
									</TableCell>
									<TableCell style={{ textAlign: 'center' }}>
										{row.coupon ? row.coupon[0].code : '无'}
									</TableCell>
									<TableCell>
										<Typography
											style={{
												fontSize: '14px',
												color: 'rgba(0,0,0,0.54'
											}}
										>
											{row.email}
										</Typography>
									</TableCell>
									<TableCell>
										<Button
											disableRipple
											style={{
												height: 25,
												backgroundColor:
													row.status === 'paid'
														? '#FFB74D'
														: row.status === ('shipped' || 'delivered')
														? '#B4DEB6'
														: '#E0E0E0',
												borderRadius: '5px',
												whiteSpace: 'nowrap'
											}}
										>
											{OrderStatus[row.status]}
										</Button>
									</TableCell>
									<TableCell>
										<Button
											disableRipple
											color='primary'
											onClick={handleClick(row)}
											style={{
												textTransform: 'uppercase',
												fontWeight: 600
											}}
										>
											View
										</Button>
									</TableCell>
								</TableRow>
							)
						}
					}}
				/>
				<Dialog
					open={open}
					onClose={handleClose}
					classes={{ paper: classes.paper }}
				>
					<OrderDetail
						orderToDisplay={orderToDisplay!}
						setOpen={setOpen}
						entrance='order-history'
					/>
				</Dialog>
			</Paper>
		</div>
	)
}

export default OrderHistorySection
