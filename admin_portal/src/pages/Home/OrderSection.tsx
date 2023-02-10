import React, { useContext, useEffect } from 'react'
import {
	TableCell,
	TableRow,
	Paper,
	Button,
	Typography
} from '@material-ui/core'
import Table from 'components/Table'
import { Order, OrderStatus } from 'models'
import moment from 'moment'
import { generalOrderTableColumns } from 'constant'
import { HashLink } from 'react-router-hash-link'
import { makeStyles } from '@material-ui/core/styles'
import OrderContext from 'context'
import { getPayMethod } from 'utils'

const useStyles = makeStyles(() => ({
	paper: {
		width: '72%',
		height: '100%',
		borderRadius: 10,
		borderColor: 'white',
		maxHeight: 600,
		'& button': {
			minWidth: 75
		}
	}
}))

const OrderSection = () => {
	const classes = useStyles()
	const {
		orders,
		hasNext,
		page,
		setPage,
		setSelectedStatus,
		setSelectedDate,
		setSearchedOrderNumber
	} = useContext(OrderContext)
	useEffect(() => {
		setSelectedStatus('all')
		setSelectedDate(undefined)
		setSearchedOrderNumber('')
		// eslint-disable-next-line
	}, [])
	return (
		<Paper variant='outlined' className={classes.paper}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					padding: '14px 20px 0px 25px'
				}}
			>
				<Typography variant='subtitle2' style={{ color: '#000' }}>
					订单
				</Typography>
				<Typography
					variant='button'
					to='/orders/#'
					component={HashLink}
					color='primary'
				>
					点击查看更多
				</Typography>
			</div>
			<div style={{ padding: '8px 20px 8px 25px' }}>
				<Table
					size='small'
					hasNext={hasNext}
					columns={generalOrderTableColumns}
					page={page}
					setPage={setPage}
					rows={orders}
					rowBuilder={(row: Order) => {
						const { orderDetail } = row
						if (row) {
							return (
								<TableRow tabIndex={-1} key={row.orderNumber}>
									<TableCell>
										<Typography variant='body2' color='textSecondary'>
											{moment(row.createdAt).format('YYYY/MM/DD')}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography
											variant='body2'
											style={{
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												fontWeight: 600,
												width: 118
											}}
										>
											{orderDetail.map(
												(orderDetail: any, index: number) =>
													orderDetail.nameZh +
													(index !== row.orderDetail.length - 1 ? ' / ' : '')
											)}
										</Typography>
									</TableCell>
									<TableCell>{getPayMethod(row.paymentMethod)}</TableCell>
									<TableCell>
										<Typography
											style={{
												fontSize: '14px',
												color: 'rgba(0,0,0,0.54'
											}}
										>
											${row.totalPrice}
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
												borderRadius: '5px'
											}}
										>
											{OrderStatus[row.status]}
										</Button>
									</TableCell>
									<TableCell>{row.orderNumber}</TableCell>
								</TableRow>
							)
						} else {
							return <></>
						}
					}}
				/>
			</div>
		</Paper>
	)
}

export default OrderSection
