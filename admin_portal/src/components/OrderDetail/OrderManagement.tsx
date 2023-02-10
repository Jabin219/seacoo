import React, { useContext, useState } from 'react'
import {
	Button,
	Divider,
	Grid,
	MenuItem,
	Select,
	Typography
} from '@material-ui/core'
import { Order, OrderStatus } from 'models'
import OrderContext from 'context'
import CarrierSelector from './CarrierSelector'
import { useStyles } from './style'

interface Props {
	orderToDisplay: Order
	setOpen: (open: boolean) => void
}

const OrderManagement = ({ orderToDisplay, setOpen }: Props) => {
	const classes = useStyles()
	const [reasonCancelOrder, setReasonCancelOrder] = useState('outOfStock')
	const [shippingCarrier, setShippingCarrier] = useState('')
	const [coldChainCarrier, setColdChainCarrier] = useState('')
	const [trackingNumber, setTrackingNumber] = useState('')
	const [trackingNumberColdChain, setTrackingNumberColdChain] = useState('')
	const [error, setError] = useState(false)
	const { handleUpdateShippedOrder, handleUpdateCancelledOrder } =
		useContext(OrderContext)
	const handleChangeReasonCancelOrder = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setReasonCancelOrder(event.target.value as string)
	}
	const handleChangeShippingCarrier = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setShippingCarrier(event.target.value as string)
	}
	const handleClickUpdateShippedOrder = () => {
		if (!shippingCarrier || !trackingNumber) {
			setError(true)
			return
		}
		handleUpdateShippedOrder(
			orderToDisplay.id,
			orderToDisplay.email,
			shippingCarrier,
			trackingNumber,
			coldChainCarrier,
			trackingNumberColdChain
		)
		setOpen(false)
		setError(false)
	}
	const handleClickUpdateCancelledOrder = () => {
		handleUpdateCancelledOrder(orderToDisplay.id)
		setOpen(false)
	}
	return (
		<Grid item xs={5} className={classes.root}>
			<div
				style={{
					display: 'flex',
					height: '25%',
					flexDirection: 'column'
				}}
			>
				<Button
					disableRipple
					style={{
						height: 20,
						width: 70,
						backgroundColor:
							orderToDisplay.status === 'paid'
								? '#FFB74D'
								: orderToDisplay.status === ('shipped' || 'delivered')
								? '#B4DEB6'
								: '#E0E0E0',
						borderRadius: '5px',
						marginBottom: 10,
						whiteSpace: 'nowrap'
					}}
				>
					{OrderStatus[orderToDisplay.status]}
				</Button>
				<div style={{ display: 'flex', marginBottom: 10 }}>
					<Typography variant='h3'>订单来源:&nbsp;</Typography>
					<Typography variant='h4' style={{ fontWeight: 'bold', fontSize: 18 }}>
						{orderToDisplay.domain}
					</Typography>
				</div>
				<div style={{ display: 'flex' }}>
					<Typography variant='h3'>折扣码:&nbsp;</Typography>
					<Typography variant='h4' color='primary'>
						{orderToDisplay.coupon ? orderToDisplay.coupon[0].code : '无'}
					</Typography>
				</div>
			</div>
			{orderToDisplay.status === 'paid' && (
				<>
					<Divider />
					<div
						style={{
							display: 'flex',
							marginTop: '5%',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}
					>
						<div
							style={{
								height: '40%',
								backgroundColor: '#F5F5F5',
								borderRadius: 10,
								marginBottom: 20
							}}
						>
							<div
								style={{
									margin: '15px 27px auto 27px',
									paddingBottom: 30,
									display: 'flex',
									height: 80,
									flexDirection: 'column',
									justifyContent: 'space-between'
								}}
							>
								<Typography variant='h4'>取消订单并通知顾客</Typography>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between'
									}}
								>
									<Select
										variant='outlined'
										value={reasonCancelOrder}
										onChange={handleChangeReasonCancelOrder}
										style={{ width: '70%', height: 37, marginLeft: 0 }}
									>
										<MenuItem value={'outOfStock'}>商品缺货</MenuItem>
									</Select>
									<Button
										variant='contained'
										onClick={() => {
											handleClickUpdateCancelledOrder()
										}}
									>
										取消订单
									</Button>
								</div>
							</div>
						</div>
						<CarrierSelector
							orderToDisplay={orderToDisplay}
							setColdChainCarrier={setColdChainCarrier}
							setTrackingNumber={setTrackingNumber}
							setTrackingNumberColdChain={setTrackingNumberColdChain}
							handleChangeShippingCarrier={handleChangeShippingCarrier}
							handleClickUpdateShippedOrder={handleClickUpdateShippedOrder}
							error={error}
							shippingCarrier={shippingCarrier}
							trackingNumber={trackingNumber}
							coldChainCarrier={coldChainCarrier}
							setError={setError}
						/>
					</div>
				</>
			)}
		</Grid>
	)
}
export default OrderManagement
