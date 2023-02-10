import { TAX_CA } from './canadaTax'

const PRODUCT_STATUS = {
	PUBLISHED: 'published',
	OUT_OF_STOCK: 'outOfStock'
}

const ORDER_STATUS = {
	UNPAID: 'unpaid',
	PAID: 'paid',
	CANCELLED: 'cancelled',
	SHIPPED: 'shipped',
	DELIVERED: 'delivered'
}

const GENERAL_STATUS = {
	ENABLED: 'enabled',
	DISABLED: 'disabled'
}

const RESPONSE_MESSAGE = {
	SUCCESS: 'success',
	FAIL: 'fail',
	NOT_FOUND: 'notFound',
	ERROR: 'error',
	UNAUTHORIZED: 'Unauthorized'
}

const PROMOTION_WAY = {
	DISCOUNT: 'discount',
	FIXED_PRICE: 'fixed'
}

const PAYMENT_METHOD = {
	STRIPE: 'STRIPE',
	PAYPAL: 'PAYPAL',
	WECHATPAY: 'WECHATPAY',
	ALIPAY: 'ALIPAY'
}

enum DOMAINS {
	SEACOO = 'seacoo',
	SEACOOCN = 'seacoo-cn',
	BECHE = 'beche'
}

export {
	PRODUCT_STATUS,
	ORDER_STATUS,
	GENERAL_STATUS,
	RESPONSE_MESSAGE,
	PROMOTION_WAY,
	TAX_CA,
	PAYMENT_METHOD,
	DOMAINS
}
