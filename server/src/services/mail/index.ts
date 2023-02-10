import nodemailer from 'nodemailer'
import {
	orderConfirmationHtml,
	newReviewHtml,
	newMessageHtml,
	orderShippedHtml,
	newSubscriptionHtml,
	orderConfirmationBecheHtml
} from './templates'
import { getOrder } from '../order'
import { Comment, Message } from '../../models'
import { DOMAINS, PROMOTION_WAY } from '../../constant'
import { ORDER_QUERIES } from '../queries'
import query from '../db'
import orderShippedBecheHtml from './templates/orderShippedBeche'
import orderConfirmationCNHtml from './templates/orderConfirmationCN'
import orderShippedCNHtml from './templates/orderShippedCN'
import axios from 'axios'
import { getExchangeRate } from '../ottPay'
const createTestTransporter = async () => {
	const testAccount = await nodemailer.createTestAccount()

	// create reusable transporter object using the default SMTP transport
	return nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass // generated ethereal password
		}
	})
}
const createFormalTransporter = () =>
	nodemailer.createTransport({
		host: process.env.MAIL_SERVER_HOST,
		port: Number(process.env.MAIL_SERVER_PORT),
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.MAIL_SERVER_USER, // generated ethereal user
			pass: process.env.MAIL_SERVER_PASSWORD // generated ethereal password
		}
	})

const createPromoTransporter = () => {
	return nodemailer.createTransport({
		host: process.env.MAIL_SERVER_HOST,
		port: Number(process.env.MAIL_SERVER_PORT),
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.PROMO_MAIL_USER, // generated ethereal user
			pass: process.env.PROMO_MAIL_PASSWORD // generated ethereal password
		}
	})
}
const createBecheTransporter = () => {
	return nodemailer.createTransport({
		host: process.env.MAIL_SERVER_HOST,
		port: Number(process.env.MAIL_SERVER_PORT),
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.BECHE_ORDER_USER, // generated ethereal user
			pass: process.env.BECHE_ORDER_PASSWORD // generated ethereal password
		}
	})
}

// send mail with defined transport object
const handleSendConfirmationEmail = async (
	orderID: string,
	toEmail: string
) => {
	const order = await getOrder(orderID)
	if (!order) {
		return false
	}
	let discount = 0
	if (order.couponID) {
		const couponResult = await query(ORDER_QUERIES.FIND_USED_COUPON, [
			order.couponID
		])
		const checkedCoupon = couponResult.data[0]
		if (checkedCoupon) {
			if (checkedCoupon.promotion === PROMOTION_WAY.DISCOUNT) {
				discount = order.subtotal * ((100 - checkedCoupon.discount) / 100)
			} else if (checkedCoupon.promotion === PROMOTION_WAY.FIXED_PRICE) {
				discount = checkedCoupon.fixedPrice
			} else {
				discount = 0
			}
		} else {
			discount = 0
		}
	}
	order.discount = discount.toFixed(2)
	let transporter
	let html
	let mailFrom
	let subject
	const domainSource = order.domain
	switch (domainSource) {
		case DOMAINS.SEACOO:
			transporter = createFormalTransporter()
			html = orderConfirmationHtml(order).html
			mailFrom = `"Seacoo Canada Order"${process.env.MAIL_SERVER_USER}`
			subject = 'Order Confirmation'
			break
		case DOMAINS.BECHE:
			transporter = createBecheTransporter()
			html = orderConfirmationBecheHtml(order).html
			mailFrom = `"Bêche Canada Order"${process.env.BECHE_ORDER_USER}`
			subject = 'Order Confirmation'
			break
		case DOMAINS.SEACOOCN: {
			const exchangeRate = await getExchangeRate()
			transporter = createFormalTransporter()
			html = orderConfirmationCNHtml(order, exchangeRate).html
			mailFrom = `"SEACOO 官网"${process.env.MAIL_SERVER_USER}`
			subject = '订单确认'
			break
		}
		default:
			break
	}
	return transporter.sendMail({
		from: mailFrom, // sender address
		to: toEmail + ', ' + process.env.EMAIL_ORDER_INBOX, // list of receivers
		subject: subject, // Subject line
		html: html // html body
	})
}

const handleSendOrderShippedEmail = async (
	orderID: string,
	toEmail: string,
	shippingMethod: string,
	trackingNumber: string,
	coldChainCarrier: string,
	trackingNumberColdChain: string
) => {
	const order = await getOrder(orderID)
	if (!order) {
		return false
	}
	let discount = 0
	if (order.couponID) {
		const couponResult = await query(ORDER_QUERIES.FIND_USED_COUPON, [
			order.couponID
		])
		const checkedCoupon = couponResult.data[0]
		if (checkedCoupon) {
			if (checkedCoupon.promotion === PROMOTION_WAY.DISCOUNT) {
				discount = order.subtotal * ((100 - checkedCoupon.discount) / 100)
			} else if (checkedCoupon.promotion === PROMOTION_WAY.FIXED_PRICE) {
				discount = checkedCoupon.fixedPrice
			} else {
				discount = 0
			}
		} else {
			discount = 0
		}
	}
	order.discount = discount.toFixed(2)
	let transporter
	let html
	let mailFrom
	let subject
	const domainSource = order.domain
	switch (domainSource) {
		case DOMAINS.SEACOO:
			transporter = createFormalTransporter()
			html = orderShippedHtml(order, shippingMethod, trackingNumber).html
			mailFrom = `"Seacoo Canada Order"${process.env.MAIL_SERVER_USER}`
			subject = 'Your order has been shipped!'
			break
		case DOMAINS.BECHE:
			transporter = createBecheTransporter()
			html = orderShippedBecheHtml(order, shippingMethod, trackingNumber).html
			mailFrom = `"Bêche Canada Order"${process.env.BECHE_ORDER_USER}`
			subject = 'Your order has been shipped!'
			break
		case DOMAINS.SEACOOCN:
			transporter = createFormalTransporter()
			html = orderShippedCNHtml(
				order,
				shippingMethod,
				trackingNumber,
				coldChainCarrier,
				trackingNumberColdChain
			).html
			mailFrom = `"SEACOO 官网"${process.env.MAIL_SERVER_USER}`
			subject = '订单已发货'
			break
			break
		default:
			break
	}
	return transporter.sendMail({
		from: mailFrom, // sender address
		to: toEmail + ', ' + process.env.EMAIL_ORDER_INBOX, // list of receivers
		subject: 'Your order has been shipped!', // Subject line
		html: html // html body
	})
}

const handleSendNewReview = async (comment: Comment) => {
	const transporter = createFormalTransporter()
	const html = newReviewHtml(comment).html

	return transporter.sendMail({
		from: process.env.MAIL_SERVER_USER, // sender address
		to: process.env.EMAIL_INFO_INBOX, // list of receivers
		subject: 'New Review', // Subject line
		html: html // html body
	})
}

const handleSendNewMessage = async (message: Message) => {
	const transporter = createFormalTransporter()

	const html = newMessageHtml(message).html
	return transporter.sendMail({
		from: process.env.MAIL_SERVER_USER,
		to: process.env.EMAIL_INFO_INBOX, // list of receivers
		subject: 'New Contact Message', // Subject line
		html: html // html body
	})
}

const handleSendNewSubscriptionMail = async (
	couponCode: string,
	toEmail: string
) => {
	const transporter = createPromoTransporter()

	const html = newSubscriptionHtml(couponCode).html
	return transporter.sendMail({
		from: `"Seacoo Canada"${process.env.PROMO_MAIL_USER}`,
		to: toEmail, // list of receivers
		subject: 'Welcome to Seacoo! Here is your 10% off Promo Code', // Subject line
		html: html // html body
	})
}

const handleSendNewRsglMessage = async (message: Message) => {
	const transporter = createFormalTransporter()

	const html = newMessageHtml(message).html
	return transporter.sendMail({
		from: process.env.MAIL_SERVER_USER,
		to: process.env.RSGL_INBOX, // list of receivers
		subject: 'New Contact Message', // Subject line
		html: html // html body
	})
}

export {
	handleSendConfirmationEmail,
	handleSendNewReview,
	handleSendNewMessage,
	handleSendNewRsglMessage,
	handleSendOrderShippedEmail,
	handleSendNewSubscriptionMail
}
