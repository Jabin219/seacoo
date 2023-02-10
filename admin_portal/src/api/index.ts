import axios from 'axios'
import { setToken, loginRequest } from 'api/auth'
import {
	getAllOrders,
	updateCancelledOrder,
	updateShippedOrder,
	getUnshippedOrders
} from 'api/order'
import {
	getAllProducts,
	updateProductTaxable,
	updateProductStatus,
	updateProductPrice
} from 'api/product'
import { getAllMails } from './mail'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL
axios.defaults.headers = { authorization: localStorage.getItem('token') }
axios.interceptors.response.use(
	response => response,
	error => {
		const statusCode = error.response ? error.response.status : null
		if (statusCode === 403) {
			localStorage.clear()
			window.location.href = '/'
		}
		throw error
	}
)

export {
	setToken,
	loginRequest,
	getAllOrders,
	getUnshippedOrders,
	getAllProducts,
	updateProductTaxable,
	updateProductStatus,
	updateShippedOrder,
	updateCancelledOrder,
	updateProductPrice,
	getAllMails
}
