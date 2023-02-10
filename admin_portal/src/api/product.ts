import axios from 'axios'

const getAllProducts = () => axios.get('/admin/get_products')
const updateProductTaxable = (productTaxable: string, productId: string) =>
	axios.post('/admin/update_product_taxable', { productTaxable, productId })
const updateProductStatus = (
	productStatus: string,
	productId: string,
	statusDescriptionZh: string,
	statusDescriptionEn: string
) =>
	axios.post('/admin/update_product_status', {
		productStatus,
		productId,
		statusDescriptionZh,
		statusDescriptionEn
	})
const updateProductPrice = (
	productPrice: string,
	productId: string,
	optionId: string
) =>
	axios.post('/admin/update_product_price', {
		productPrice,
		productId,
		optionId
	})

export {
	getAllProducts,
	updateProductTaxable,
	updateProductStatus,
	updateProductPrice
}
