import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { getProducts } from 'api'
import { Product } from 'models/index'
import ProductList from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'
import { isSeacooCN } from 'utils'

const ProductRouter = () => {
	const [products, setProducts] = useState([] as Product[])
	const getAllProducts = async () => {
		const productsResult = await getProducts(!isSeacooCN() ? 'CANADA' : 'CHINA')
		const cachedProducts = productsResult.data.data
		setProducts(cachedProducts)
	}
	useEffect(() => {
		getAllProducts()
	}, [])

	return (
		<div className='product-router'>
			<Route
				exact
				path={'/product'}
				render={(props: any) => <ProductList products={products} {...props} />}
			/>
			<Route
				exact
				path='/product/:productPathName'
				render={(props: any) => (
					<ProductDetail products={products} {...props} />
				)}
			/>
		</div>
	)
}

export default ProductRouter
