import React, { useEffect, useContext } from 'react'
import MainSection from './MainSection'
import PageViewSection from './PageViewSection'
import SalesSection from './SalesSection'
import MailSection from './MailSection'
import OrderSection from './OrderSection'
import InventorySection from './InventorySection'
import useProducts from 'hooks/products'
import useMails from 'hooks/mails'
import OrderContext from 'context'

const Home = () => {
	const { products, getProducts } = useProducts()
	const { unshippedOrders } = useContext(OrderContext)
	const { getMails, mails } = useMails()
	useEffect(() => {
		getProducts()
		getMails()
		// eslint-disable-next-line
	}, [])
	return (
		<div
			style={{
				width: '94%',
				minHeight: 1024,
				margin: '33px auto'
			}}
		>
			<MainSection products={products} unshippedOrders={unshippedOrders} />
			<div
				style={{
					width: '100%',
					height: 295,
					margin: '25px 0px',
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<PageViewSection />
				<SalesSection />
				<MailSection mails={mails} />
			</div>
			<div
				style={{
					width: '100%',
					height: 700,
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<OrderSection />
				<InventorySection products={products} />
			</div>
		</div>
	)
}

export default Home
