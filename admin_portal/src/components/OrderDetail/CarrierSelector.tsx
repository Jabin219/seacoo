import React from 'react'
import { Button, MenuItem, TextField, Typography } from '@material-ui/core'
import { ShippingCarriers } from './constant'
import { Domains } from 'constant'
import { Order } from 'models'

interface Props {
	orderToDisplay: Order
	setColdChainCarrier: (carrier: string) => void
	setTrackingNumber: (trackingNumber: string) => void
	setTrackingNumberColdChain: (trackingNumber: string) => void
	setError: (error: boolean) => void
	error: boolean
	handleChangeShippingCarrier: (
		event: React.ChangeEvent<{ value: unknown }>
	) => void
	handleClickUpdateShippedOrder: () => void
	shippingCarrier: string
	trackingNumber: string
	coldChainCarrier: string
}

const CarrierSelector = ({
	orderToDisplay,
	setColdChainCarrier,
	setTrackingNumber,
	setTrackingNumberColdChain,
	error,
	setError,
	handleChangeShippingCarrier,
	handleClickUpdateShippedOrder,
	shippingCarrier,
	trackingNumber,
	coldChainCarrier
}: Props) => {
	return (
		<div
			style={{
				height: '55%',
				backgroundColor: '#F5F5F5',
				borderRadius: 10,
				paddingBottom: 20
			}}
		>
			<div
				style={{
					margin: '15px 27px 20px 27px',
					display: 'flex',
					height: 125,
					flexDirection: 'column',
					justifyContent: 'space-between'
				}}
			>
				<Typography variant='h4' style={{ marginBottom: 10 }}>
					发货并通知客户
				</Typography>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<TextField
						select
						required
						variant='outlined'
						value={shippingCarrier}
						onChange={handleChangeShippingCarrier}
						style={{
							width: '35%',
							height: 37,
							marginLeft: 0,
							marginBottom: 10
						}}
						error={error && !shippingCarrier}
						helperText={error && !shippingCarrier && '请选择快递商'}
						label={!shippingCarrier && 'shipping carrier'}
					>
						<MenuItem value='' disabled>
							Shipping Carrier
						</MenuItem>
						{orderToDisplay.domain !== Domains.seacooCN
							? ShippingCarriers.CA.map(carrier => (
									<MenuItem key={carrier.name} value={carrier.name}>
										{carrier.name}
									</MenuItem>
							  ))
							: ShippingCarriers.CN.map(carrier => (
									<MenuItem key={carrier.name} value={carrier.name}>
										{carrier.name}
									</MenuItem>
							  ))}
					</TextField>
					<TextField
						required
						label={!trackingNumber && 'tracking number'}
						variant='outlined'
						size='small'
						name='trackingNumber'
						style={{ width: '60%', marginBottom: 10 }}
						error={error && !trackingNumber}
						helperText={error && !trackingNumber && '请输入运单号'}
						onChange={e => {
							setTrackingNumber(e.target.value)
							setError(false)
						}}
					/>
				</div>
				{orderToDisplay.domain === 'seacoo-cn' && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<TextField
							select
							variant='outlined'
							value={coldChainCarrier}
							onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
								setColdChainCarrier(event.target.value as string)
							}}
							style={{ width: '35%', height: 37, marginLeft: 0 }}
							label={!coldChainCarrier && '冷链运货商（无）'}
						>
							<MenuItem value=''>冷链运货商（无）</MenuItem>
							<MenuItem value='顺丰冷链'>顺丰冷链</MenuItem>
						</TextField>
						<TextField
							label={!trackingNumber && 'tracking number'}
							variant='outlined'
							size='small'
							name='trackingNumber'
							style={{ width: '60%', marginBottom: 10 }}
							onChange={e => {
								setTrackingNumberColdChain(e.target.value)
							}}
						/>
					</div>
				)}
				<Button
					variant='contained'
					color='primary'
					style={{ width: 90, marginLeft: 'auto' }}
					onClick={() => {
						handleClickUpdateShippedOrder()
					}}
				>
					确认发货
				</Button>
			</div>
		</div>
	)
}

export default CarrierSelector
