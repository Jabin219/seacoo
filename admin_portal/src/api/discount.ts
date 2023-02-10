import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import axios from 'axios'
import { Domains } from 'constant'

const createPercentageCoupon = (
	code: string,
	discountPercentage: number,
	numberOfUse: number,
	comment: string,
	expireTime: MaterialUiPickersDate | null,
	startTime: MaterialUiPickersDate | null,
	domain: Domains
) =>
	axios.post('/admin/create_percentage_coupon', {
		code,
		discountPercentage,
		numberOfUse,
		comment,
		expireTime,
		startTime,
		domain
	})

const getCouponsWithOrders = (page: number) =>
	axios.get('/admin/get_coupons_with_orders', { params: { page } })

const disableCoupon = (couponId: string) =>
	axios.post('/admin/disable_coupon', { couponId })

export { createPercentageCoupon, getCouponsWithOrders, disableCoupon }
