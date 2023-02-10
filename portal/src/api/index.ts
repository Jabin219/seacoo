import axios from 'axios'
import { Domains } from 'constant'
import { Comment, Message } from '../models/index'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

const getProducts = (country: string) =>
	axios.get('/products/all', { params: { country } })

const applyCoupon = (code: string, domain: Domains) =>
	axios.post('/orders/apply_coupon', { code, domain })

const sendReview = (comment: Comment) =>
	axios.post('/products/review', { comment })

const sendMessage = (message: Message) =>
	axios.post('/general/message', { message })

const createNewSubscription = (email: string) =>
	axios.post('/general/new_subscription', { email })

const analyzeIp = () => axios.get(`https://ipapi.co/json/`)

const getBechePowder = () => axios.get('/products/beche_powder')

export {
	getProducts,
	applyCoupon,
	sendReview,
	sendMessage,
	createNewSubscription,
	analyzeIp,
	getBechePowder
}
