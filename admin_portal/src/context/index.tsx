import React, { createContext } from 'react'
import useOrders from 'hooks/orders'

const Order = () => {
	const {
		orders,
		setOrders,
		unshippedOrders,
		setUnshippedOrders,
		selectedDate,
		selectedStatus,
		setSelectedStatus,
		setSelectedDate,
		page,
		setPage,
		hasNext,
		searchedOrderNumber,
		setSearchedOrderNumber,
		handleUpdateShippedOrder,
		handleUpdateCancelledOrder,
		selectedDomain,
		setSelectedDomain
	} = useOrders()
	const orderContext = {
		orders,
		setOrders,
		unshippedOrders,
		setUnshippedOrders,
		selectedDate,
		selectedStatus,
		setSelectedStatus,
		setSelectedDate,
		page,
		setPage,
		hasNext,
		searchedOrderNumber,
		setSearchedOrderNumber,
		handleUpdateShippedOrder,
		handleUpdateCancelledOrder,
		selectedDomain,
		setSelectedDomain
	}
	return orderContext
}
const OrderContext = createContext<any>({})
export default OrderContext
export const OrderProvider = ({ children }: any): JSX.Element => {
	return (
		<OrderContext.Provider value={Order()}>{children}</OrderContext.Provider>
	)
}
