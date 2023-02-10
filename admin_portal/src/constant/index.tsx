/*eslint-disable*/
import {
	Home,
	Assignment,
	Apps,
	BorderColor,
	Assessment,
	Email,
	Send
} from '@material-ui/icons'

export const menuItems = [
	{
		name: '首页',
		url: '/',
		icon: () => <Home color='secondary' />
	},
	{
		name: '订单管理',
		url: '/orders/',
		icon: () => <Assignment color='secondary' />
	},
	{
		name: '库存',
		url: '/inventory/',
		icon: () => <Apps color='secondary' />
	},
	{
		name: '折扣系统',
		url: '/discount/',
		icon: () => <BorderColor color='secondary' />
	},
	{
		name: '统计数据',
		url: '/statistics/',
		icon: () => <Assessment color='secondary' />
	},
	{
		name: '站内信箱',
		url: '/mailbox/',
		icon: () => <Email color='secondary' />
	},
	{
		name: '订阅邮箱',
		url: '/subscription/',
		icon: () => <Send color='secondary' />
	}
]

export const generalOrderTableColumns = [
	{ title: '下单时间', field: 'orderTime' },
	{ title: '商品清单', field: 'products' },
	{
		title: '付款方式',
		field: 'paymentType'
	},
	{
		title: '实付',
		field: 'actualPrice',
		filtering: false
	},
	{
		title: '状态',
		field: 'status'
	},
	{
		title: '订单号',
		field: 'orderNumber'
	}
]

export const detailedOrderTableColumns = [
	{ title: '下单时间', field: 'orderTime' },
	{ title: '商品清单', field: 'products' },
	{ title: '订单来源', field: 'source' },
	{
		title: '付款方式',
		field: 'paymentMethod'
	},
	{
		title: '订单号',
		field: 'orderNumber'
	},
	{
		title: '实付',
		field: 'actualPrice'
	},
	{
		title: '折扣码',
		field: 'discountCode'
	},
	{
		title: '下单用户邮箱',
		field: 'email'
	},
	{
		title: '状态',
		field: 'status'
	},
	{
		title: '详情'
	}
]

export const productPricingDetail = [
	{
		name: 'Subtotal'
	},
	{
		name: 'Estimated Shipping'
	},
	{
		name: 'Tax'
	},
	{
		name: 'Discount'
	}
]

export const inventoryColumns = [
	{ title: '国家', field: 'country' },
	{ title: '缩略图', field: 'img' },
	{ title: '产品名称', field: 'productName' },
	{
		title: '价格',
		field: 'price'
	},
	{
		title: '需加税',
		field: 'taxable'
	},
	{
		title: '状态',
		field: 'status'
	}
]

export enum inventoryUpdateProduct {
	taxable = 'taxable',
	status = 'status',
	price = 'price',
	option = 'option'
}

export enum orderFilterType {
	paid = 'paid',
	shipped = 'shipped',
	cancelled = 'cancelled',
	all = 'all'
}

export enum paymentMethodType {
	stripe = 'STRIPE',
	PayPal = 'PAYPAL',
	ali = 'ALIPAY',
	wechat = 'WECHATPAY'
}

export enum Domains {
	all = 'all',
	seacoo = 'seacoo',
	seacooCN = 'seacoo-cn',
	beche = 'beche'
}
export enum ProductTaxable {
	yes = 'true',
	no = 'false'
}
export enum ProductStatus {
	published = 'published',
	outOfStock = 'outOfStock'
}
