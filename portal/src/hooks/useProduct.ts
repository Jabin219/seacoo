import { useState } from 'react'
import { Product } from 'models'

const useProduct = () => {
	const [product, setProduct] = useState({} as Product)
	const [relatedProducts, setRelatedProducts] = useState([] as Product[])
	const findProductByPathName = (
		products: Product[],
		productPathName: string
	) => {
		const searchedResult = products.find(item => {
			return item.pathName === productPathName
		})
		if (searchedResult) {
			setProduct(searchedResult)
			return
		}
	}

	const relatedProductsIds = product.relatedProducts

	const findRelatedProductsById = (
		products: Product[],
		relatedProducts: { id: string }[]
	) => {
		const array = [] as Product[]
		relatedProducts &&
			relatedProducts.map(relatedProduct => {
				let reProduct: Product
				const searchedResult = products.find((product: Product) => {
					return product.id === relatedProduct.id
				})
				if (searchedResult) {
					reProduct = searchedResult as Product
					array.push(reProduct)
					return
				}
				return array
			})
		return array
	}

	return {
		findProductByPathName,
		findRelatedProductsById,
		product,
		relatedProducts,
		setRelatedProducts,
		relatedProductsIds
	}
}

export default useProduct
