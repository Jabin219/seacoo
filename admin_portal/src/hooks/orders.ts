import { useState, useEffect, useContext } from 'react'
import { FilterOptions, Order } from 'models'
import { getAllOrders, getUnshippedOrders } from 'api/order'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { updateShippedOrder, updateCancelledOrder } from 'api'
import { NotificationContext } from 'context/NotificationContext'
import { Domains } from 'constant'

const useOrders = () => {
	const [orders, setOrders] = useState<Order[]>([])
	const [unshippedOrders, setUnshippedOrders] = useState<Order[]>()
	const [page, setPage] = useState(0)
	const [hasNext, setHasNext] = useState(false)
	const [selectedStatus, setSelectedStatus] = useState<string>('all')
	const [selectedDate, setSelectedDate] = useState<
		MaterialUiPickersDate | undefined
	>(undefined)
	const [selectedDomain, setSelectedDomain] = useState<Domains>(Domains.all)
	const [searchedOrderNumber, setSearchedOrderNumber] = useState('')
	const { displayNotification } = useContext(NotificationContext)
	const getOrders = async (
		filterOptions: FilterOptions | undefined,
		page: number
	) => {
		const result = await getAllOrders(filterOptions, page, searchedOrderNumber)
		setOrders(result.data.data)
		setHasNext(result.data.hasNext)
	}
	const getAllUnshippedOrders = async () => {
		const result = await getUnshippedOrders()
		setUnshippedOrders(result.data.data as Order[])
	}

	const handleUpdateShippedOrder = async (
		id,
		email,
		shippingCarrier,
		trackingNumber,
		coldChainCarrier,
		trackingNumberColdChain
	) => {
		const updateResult = await updateShippedOrder(
			id,
			email,
			shippingCarrier,
			trackingNumber,
			coldChainCarrier,
			trackingNumberColdChain
		)
		if (updateResult.data.status === 'success') {
			unshippedOrders &&
				setUnshippedOrders([
					...unshippedOrders.filter((order: Order) => order.id !== id)
				])
			const findIndexResult = orders.findIndex((order: Order) => {
				return order.id === id
			})
			if (orders[findIndexResult]) {
				orders[findIndexResult].status = 'shipped'
				setOrders([...orders])
			}
			displayNotification('订单发货成功', 'success')
		} else {
			displayNotification('订单发货失败，请稍后再试', 'error')
		}
	}

	const handleUpdateCancelledOrder = async id => {
		const updateResult = await updateCancelledOrder(id)
		if (updateResult.data.status === 'success') {
			unshippedOrders &&
				setUnshippedOrders([
					...unshippedOrders.filter((order: Order) => order.id !== id)
				])
			const findIndexResult = orders.findIndex((order: Order) => {
				return order.id === id
			})

			if (orders[findIndexResult]) {
				orders[findIndexResult].status = 'cancelled'
				setOrders([...orders])
			}
			displayNotification('取消订单成功', 'success')
		} else {
			displayNotification('订单发货失败，请稍后再试', 'error')
		}
	}

	useEffect(() => {
		getOrders(
			{ date: selectedDate, status: selectedStatus, domain: selectedDomain },
			page
		)
		getAllUnshippedOrders()
		// eslint-disable-next-line
	}, [selectedDate, selectedStatus, page, searchedOrderNumber, selectedDomain])

	return {
		orders,
		setOrders,
		hasNext,
		unshippedOrders,
		setUnshippedOrders,
		page,
		setPage,
		selectedStatus,
		setSelectedStatus,
		selectedDate,
		setSelectedDate,
		searchedOrderNumber,
		setSearchedOrderNumber,
		handleUpdateShippedOrder,
		handleUpdateCancelledOrder,
		selectedDomain,
		setSelectedDomain
	}
}

export default useOrders
