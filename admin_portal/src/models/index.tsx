import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Domains } from 'constant'

export type LoginRequestData = {
	userName: string
	password: string
}

export type Order = {
	domain: Domains
	coupon: any
	createdAt: string
	email: string
	id: string
	orderDetail: any[]
	orderNumber: string
	shippingAddress: any
	shippingFee: string
	status: string
	subtotal: string
	tax: string
	totalPrice: string
	paymentMethod: string
}

export type Product = {
	id: string
	coverImage: string
	productName: string
	price: string
	taxable: string
	stock: string
	status: string
	options: Option[]
	isEditable: boolean
	country: string
	statusDescription: string
	statusDescriptionZh?: string
}

export type Option = {
	id: string
	price: string
	label: string
	isEditable: boolean
}

export type Mail = {
	id: string
	name: string
	email: string
	content: string
	createdAt: Date
}

export type FilterOptions = {
	date: MaterialUiPickersDate | undefined
	status: string
	domain: Domains
}

export enum OrderStatus {
	cancelled = '订单取消',
	unpaid = '未付款',
	paid = '待发货',
	shipped = '已发货',
	delivered = '已发货'
}

export enum ProductTaxable {
	true = '是',
	false = '否'
}

export enum ProductStatus {
	published = '在售',
	outOfStock = '缺货'
}
