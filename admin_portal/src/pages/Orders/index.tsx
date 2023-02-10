import React, { useContext } from 'react'
import UnshippedOrderSection from './UnshippedOrderSection'
import OrderHistorySection from './OrderHistorySection'
import { Tabs, Tab } from '@material-ui/core'
import OrderContext from 'context'

interface TabPanelProps {
	children?: React.ReactNode
	index: any
	value: any
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props

	return (
		<div role='tabpanel' hidden={value !== index} {...other}>
			{value === index && <div style={{ marginTop: 20 }}>{children}</div>}
		</div>
	)
}
const Orders = () => {
	const [value, setValue] = React.useState(0)
	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
	}
	const { unshippedOrders } = useContext(OrderContext)

	return (
		<div
			style={{
				width: '94%',
				margin: '39px auto'
			}}
		>
			<div style={{ position: 'static', backgroundColor: 'white' }}>
				<Tabs
					value={value}
					textColor='primary'
					onChange={handleChange}
					indicatorColor='primary'
					aria-label='simple tabs example'
				>
					<Tab
						disableTouchRipple
						label={`待发货 (${
							unshippedOrders && unshippedOrders.length > 0
								? unshippedOrders.length
								: 0
						})`}
					/>
					<Tab disableTouchRipple label='历史订单' />
				</Tabs>
			</div>
			<TabPanel value={value} index={0}>
				<UnshippedOrderSection />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<OrderHistorySection />
			</TabPanel>
		</div>
	)
}

export default Orders
