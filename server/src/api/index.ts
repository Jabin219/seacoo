import { Router } from 'express'
import products from './routes/products'
import orders from './routes/orders'
import stripeRoutes from './routes/stripeRoutes'
import payPalRoutes from './routes/payPalRoutes'
import ottRoutes from './routes/ottRoutes'
import adapayRoutes from './routes/adapayRoutes'
import adminAuth from './adminRoutes/auth'
import adminOrders from './adminRoutes/orders'
import adminProducts from './adminRoutes/products'
import adminCoupon from './adminRoutes/coupon'
import adminMails from './adminRoutes/mail'
import adminSubscription from './adminRoutes/subscription'
import general from './routes/general'
import test from './routes/test'

// guaranteed to get dependencies
export default () => {
	const app = Router()
	products(app)
	orders(app)
	stripeRoutes(app)
	payPalRoutes(app)
	ottRoutes(app)
	adapayRoutes(app)
	adminAuth(app)
	adminOrders(app)
	adminProducts(app)
	adminCoupon(app)
	adminMails(app)
	adminSubscription(app)
	general(app)
	test(app)

	return app
}
