import { paymentMethodType } from "constant"

export const getCurrencySymbol = (country: string) => {
	switch (country) {
		case 'CANADA':
			return 'CAD$ '
		case 'CA':
			return 'CAD$ '
		case 'CHINA':
			return '￥ '
		case 'CN':
			return '￥ '
		default:
			return 'CAD$ '
	}
}
export const getPayMethod = (paymentMethod: string) => {
	switch (paymentMethod) {
		case paymentMethodType.stripe:
			return '信用卡'
		case paymentMethodType.PayPal:
			return 'PayPal'
		case paymentMethodType.ali:
			return '支付宝'
		case paymentMethodType.wechat:
			return '微信'
		default:
			return '-'
	}
}
