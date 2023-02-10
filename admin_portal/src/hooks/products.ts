import { useState, useContext } from 'react'
import { Option, Product } from 'models'
import { getAllProducts } from 'api'
import {
	updateProductTaxable,
	updateProductStatus,
	updateProductPrice
} from 'api'
import { inventoryUpdateProduct } from 'constant'
import { NotificationContext } from 'context/NotificationContext'

const useProducts = () => {
	const { displayNotification } = useContext(NotificationContext)
	const [products, setProducts] = useState<Product[]>([])
	const getProducts = async () => {
		const result = await getAllProducts()
		setProducts(result.data.data)
	}
	let updateResult: any
	const updateProduct = async (
		fieldName: string,
		value: string,
		productId: string,
		optionId: string,
		statusDescriptionZh?: string,
		statusDescriptionEn?: string
	) => {
		if (fieldName === inventoryUpdateProduct.taxable) {
			updateResult = await updateProductTaxable(value, productId)
			updateUI(productId, '')
		} else if (fieldName === inventoryUpdateProduct.status) {
			updateResult = await updateProductStatus(
				value,
				productId,
				statusDescriptionZh as string,
				statusDescriptionEn as string
			)
			updateUI(productId, '')
		} else if (fieldName === inventoryUpdateProduct.price) {
			updateResult = await updateProductPrice(value, productId, '')
			updateUI(productId, '')
		} else if (fieldName === inventoryUpdateProduct.option) {
			updateResult = await updateProductPrice(value, productId, optionId)
			updateUI(productId, optionId)
		}
	}
	const updateUI = (productId: string, optionId: string) => {
		if (updateResult.data.status === 'success') {
			const modifiedProducts = [...products]
			const modifiedProductIndex = modifiedProducts.findIndex(
				product => product.id === productId
			)
			if (!optionId) {
				modifiedProducts[modifiedProductIndex] = {
					options: modifiedProducts[modifiedProductIndex].options && [
						...modifiedProducts[modifiedProductIndex].options
					],
					...updateResult.data.data,
					isEditable: false
				}
			} else {
				const modifiedOptionIndex = modifiedProducts[
					modifiedProductIndex
				].options.findIndex((option: Option) => option.id === optionId)
				modifiedProducts[modifiedProductIndex].options[modifiedOptionIndex] = {
					...updateResult.data.data,
					isEditable: false
				}
				modifiedProducts[modifiedProductIndex] = {
					...modifiedProducts[modifiedProductIndex],
					isEditable: false
				}
			}
			setProducts(modifiedProducts)
			displayNotification('产品更新成功', 'success')
		} else {
			displayNotification('产品更新失败，请稍后再试', 'error')
		}
	}
	const setEditable = (id: string, state: boolean) => {
		const newProducts = [...products]
		const selectedProductIndex = newProducts.findIndex(
			product => product.id === id
		)
		if (selectedProductIndex >= 0) {
			newProducts[selectedProductIndex].isEditable = state
		} else {
			newProducts.forEach((product, index) => {
				if (product.options) {
					const selectedOptionIndex = product.options.findIndex(
						option => option.id === id
					)
					if (selectedOptionIndex >= 0) {
						newProducts[index].options[selectedOptionIndex].isEditable = state
					}
				}
			})
		}
		setProducts(newProducts)
	}

	return {
		getProducts,
		products,
		updateProduct,
		setEditable
	}
}

export default useProducts
