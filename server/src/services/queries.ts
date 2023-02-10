const PRODUCT_QUERIES = {
	GET_PRODUCTS: 'getProducts',
	GET_PRODUTCS_CLASSIFIED: 'getClassifiedProducts',
	GET_PRODUCT: 'getSpecificProduct',
	GET_PRICE: 'getProductPrice',
	RETRIEVE_ORDER_PRODUCT: 'retrieveOrderProduct',
	GET_BECHE: 'getBechePowder'
}

const ORDER_QUERIES = {
	NEW_ORDER: 'newOrder',
	GET_ORDER_WITH_DETAILS_BY_ID: 'getOrderWithDetailsById',
	GET_ORDER: 'getOrderById',
	GET_ORDER_BY_ADAPAY_ID: 'getOrderByAdapayId',
	NEW_ORDER_DETAIL: 'newOrderDetail',
	NEW_ADDRESS: 'newAddress',
	UPDATED_ORDER_TO_PAID: 'updateOrderToPaid',
	UPDATED_ORDER_TO_UNPAID: 'updateOrderToUnpaid',
	UPDATE_ORDER_TO_CANCELLED: 'updateOrderToCancelled',
	FIND_COUPON: 'findCoupon',
	CREATE_COUPON: 'createCoupon',
	DISABLE_COUPON: 'disableCoupon',
	ENABLE_COUPON: 'enableCoupon',
	FIND_USED_COUPON: 'findUsedCoupon',
	DECREASE_COUPON_NUMBER_OF_USE: 'decreaseCouponNumberOfUse',
	GET_STORE_ORDER_RESULT: 'getStoreOrderResult',
	CREATE_NEW_TRANSACTION: 'createNewTransaction',
	FIND_ORDER_BY_TRANSACTION: 'findOrderIdByTransactionId',
	UPDATE_TRANSACTION_TO_PAID: 'updateTransactionToPaid',
	UPDATE_PAYMENT_METHOD: 'updateOrderPaymentMethod',
	UPDATE_ORDER_ADAPAY_ID: 'updateOrderAdapayId',
	GET_PAID_TRANSACTION_ID: 'getPaidTransactionId'
}

const MAIL_QUERIES = {
	NEW_MAIL: 'newMail',
	GET_ALL_MAILS: 'getAllMails'
}

const SUBSCRIPTION_QUERIES = {
	NEW_SUBSCRIPTION: 'newSubscription',
	ADD_COUPON: 'addSubscriptionCoupon',
	CHECK_EXISTED_EMAIL: 'checkExistedEmail',
	GET_ALL_SUBSCRIBE_EMAIL: 'adminGetAllSubscriptionEmails'
}

const ADMIN_LOGIN_QUERIES = {
	GET_ACCOUNT_INFO: 'getAccountInfo'
}

const ADMIN_ORDER_QUERIES = {
	GET_UNSHIPPED_ORDERS: 'adminGetUnshippedOrders',
	UPDATE_SHIPPED_ORDER: 'updateShippedOrder',
	UPDATE_ORDER_TO_CANCELLED: 'updateOrderToCancelled',
	GET_ORDERS: 'adminGetOrders'
}

const ADMIN_COUPON_QUERIES = {
	GET_COUPONS_WITH_ORDERS: 'adminGetCouponsWithOrders'
}

const ADMIN_PRODUCT_QUERIES = {
	GET_PRODUCTS: 'adminGetProducts',
	UPDATE_PRODUCT_TAXABLE: 'adminUpdateProductTaxable',
	UPDATE_PRODUCT_STATUS: 'adminUpdateProductStatus',
	UPDATE_PRODUCT_PRICE: 'adminUpdateProductPrice',
	UPDATE_PRODUCT_OPTION_PRICE: 'adminUpdateProductOptionPrice'
}

export {
	PRODUCT_QUERIES,
	ORDER_QUERIES,
	ADMIN_LOGIN_QUERIES,
	ADMIN_ORDER_QUERIES,
	ADMIN_PRODUCT_QUERIES,
	ADMIN_COUPON_QUERIES,
	MAIL_QUERIES,
	SUBSCRIPTION_QUERIES
}
