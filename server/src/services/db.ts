import { Pool } from 'pg'
import { GENERAL_STATUS, ORDER_STATUS } from '../constant'

const procedures: { [key: string]: string } = {
  // product query
  getClassifiedProducts: `
	SELECT "Category".*,  ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(products) ORDER BY products."lastUpdatedAt")) AS "products"
        FROM "Category"
        LEFT JOIN LATERAL (
                SELECT "Products".*, imgs."images", options."options", comments."comments", subproducts."relatedProducts"
                FROM "Products"
                LEFT JOIN LATERAL (
                        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('url', "url", 'priority', "priority") ORDER BY "priority")) AS "images"
                        FROM "Images"
                        WHERE "Images"."productID" = "Products".id
                ) imgs ON TRUE
                LEFT JOIN LATERAL (
                        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "id", 'label', "label", 'catalogue', "catalogue", 'priority', "priority", 'price', "price", 'labelZh', "labelZh") ORDER BY "priority" )) AS "options"
                        FROM "Options"
                        WHERE "Options"."productID" = "Products".id AND "Options"."status" = '${GENERAL_STATUS.ENABLED}'
                ) options ON TRUE
                LEFT JOIN LATERAL (
                        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('user', "user", 'email', "email", 'content', "content", 'rate', "rate", 'createdAt', "createdAt") ORDER BY "Comments"."createdAt" DESC)) AS "comments"
                        FROM "Comments"
                        WHERE "Comments"."productID" = "Products".id
                ) comments ON TRUE
                LEFT JOIN LATERAL (
                        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "Relations"."relatedProductID") ORDER BY "Relations"."priority")) AS "relatedProducts"
                        FROM "Relations"
                        WHERE "Relations"."productID" = "Products".id
                ) subproducts ON TRUE
        WHERE "Products".category = "Category".id
        ) AS products ON TRUE
        GROUP BY "Category".id
        ORDER BY "Category".priority`,
  getProducts: `
	SELECT "Products".*, imgs."images", options."options", comments."comments", subproducts."relatedProducts"
	FROM "Products"
	LEFT JOIN LATERAL (
			SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('url', "url", 'priority', "priority") ORDER BY "priority")) AS "images"
			FROM "Images"
			WHERE "Images"."productID" = "Products".id
	) imgs ON TRUE
	LEFT JOIN LATERAL (
			SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "id", 'label', "label", 'catalogue', "catalogue", 'priority', "priority", 'price', "price", 'labelZh', "labelZh", 'onSale', "onSale") ORDER BY "priority" )) AS "options"
			FROM "Options"
			WHERE "Options"."productID" = "Products".id AND "Options"."status" = '${GENERAL_STATUS.ENABLED}'
	) options ON TRUE
	LEFT JOIN LATERAL (
			SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('user', "user", 'email', "email", 'content', "content", 'rate', "rate", 'createdAt', "createdAt")  ORDER BY "Comments"."createdAt" DESC)) AS "comments"
			FROM "Comments"
			WHERE "Comments"."productID" = "Products".id
	) comments ON TRUE
	LEFT JOIN LATERAL (
			SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "Relations"."relatedProductID") ORDER BY "Relations"."priority")) AS "relatedProducts"
			FROM "Relations"
			WHERE "Relations"."productID" = "Products".id
	) subproducts ON TRUE
	WHERE "Products".country = $1
	ORDER BY "Products"."lastUpdatedAt"`,
  getSpecificProduct: `
        SELECT "Products".*, imgs."images", options."options", comments."comments", subproducts."relatedProducts"
        FROM "Products"
        LEFT JOIN LATERAL (
	        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('url', "url", 'priority', "priority") ORDER BY "priority")) AS "images"
                FROM "Images"
                WHERE "Images"."productID" = "Products".id
        ) imgs ON TRUE
        LEFT JOIN LATERAL (
                SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "id", 'label', "label", 'catalogue', "catalogue", 'priority', "priority", 'price', "price", 'onSale', "onSale"))) AS "options"
                FROM "Options"
                WHERE "Options"."productID" = "Products".id AND "Options"."status" = '${GENERAL_STATUS.ENABLED}'
        ) options ON TRUE
        LEFT JOIN LATERAL (
                SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('user', "user", 'email', "email", 'content', "content", 'rate', "rate", 'createdAt', "createdAt"))) AS "comments"
                FROM "Comments"
                WHERE "Comments"."productID" = "Products".id
        ) comments ON TRUE
        LEFT JOIN LATERAL (
        	SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "Relations"."relatedProductID") ORDER BY "Relations"."priority")) AS "relatedProducts"
                FROM "Relations"
        	WHERE "Relations"."productID" = "Products".id
        ) subproducts ON TRUE
        WHERE "Products".id = $1 ; `,
  getProductPrice: `
        SELECT "Products"."price", "Products"."id"
        FROM "Products"
        WHERE "Products"."id" = $1 ; `,
  getBechePowder: `
		SELECT "Products".*, images."images"
		FROM "Products"
		LEFT JOIN LATERAL (
	        SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('url', "url", 'priority', "priority") ORDER BY "priority")) AS "images"
                FROM "Images"
                WHERE "Images"."productID" = "Products".id
        ) images ON TRUE
		WHERE "Products".id = '7f87ea9b-c652-40ad-82f4-17db00ce3542'
	`,
  retrieveOrderProduct: `
        SELECT "Products".id, "Options".id as "selectedOption", "Products"."taxable", "Products".name, COALESCE("coverImage", "Images".url) AS "coverImage", "Options".label AS "shortDescription", COALESCE("Options".price, "Products".price) AS "price","Options"."labelZh" AS "shortDescriptionZh", "Products"."nameZh"
        FROM "Products"
        LEFT JOIN "Images" ON "Images"."productID" = "Products".id
        LEFT JOIN "Options" ON "Options"."productID" = "Products".id AND "Options".id = $1
        WHERE "Products"."id" = $2
        ORDER BY "Images".priority ASC
        LIMIT 1; `,
  newAddress: `
        INSERT INTO "Addresses" ("country", "province", "city", "street", "postalCode", "recipient", "phone")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING "id"; `,
  // order query
  newOrder: `
        INSERT INTO "Orders" ("orderNumber", "subtotal", "tax", "couponID", "shippingFee", "totalPrice", "email", "shippingAddress", "billingAddress", "paymentMethod", "domain", "status")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, '${ORDER_STATUS.UNPAID}' )
        RETURNING "id", "createdAt"; `,
  newOrderDetail: `
        INSERT INTO "OrderDetail" ("orderID", "price", "productID", "amount", "optionID")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING "id"; `,
  getOrderWithDetailsById: `
        SELECT "Orders".*, ROW_TO_JSON("Addresses") AS "addressShipping", ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(orderDetail))) AS "products"
        FROM "Orders", "Addresses",
        LATERAL (
			SELECT "Products".id, "Products".name, "Products"."coverImage", "Options".label AS description,"Options"."labelZh" AS "descriptionZh", "Products"."nameZh",
			COALESCE("Options".price, "Products".price) AS price, "amount"
	        FROM "OrderDetail"
	        INNER JOIN "Products" ON "Products".id = "OrderDetail"."productID"
	        LEFT JOIN "Options" ON "OrderDetail"."optionID" = "Options".id
	        WHERE "OrderDetail"."orderID" = $1
        ) orderDetail
        WHERE "Orders".id = $1 AND "Addresses".id = "Orders"."shippingAddress"
		GROUP BY "Orders".id, "Addresses".id;`,
  getOrderById: `
		SELECT *
		FROM "Orders"
		WHERE "Orders".id = $1`,
  getOrderByAdapayId: `
		SELECT *
		FROM "Orders"
		WHERE "Orders"."adapayId" = $1
	`,
  updateOrderToPaid: `
        UPDATE "Orders"
        SET "status" = '${ORDER_STATUS.PAID}'
        WHERE "id" = $1`,
  updateOrderToUnpaid: `
        UPDATE "Orders"
        SET "status" = '${ORDER_STATUS.UNPAID}'
        WHERE "id" = $1`,
  updateOrderToCancelled: `
        UPDATE "Orders"
        SET "status" = '${ORDER_STATUS.CANCELLED}'
        WHERE "id" = $1`,
  updateOrderToDelivered: `
        UPDATE "Orders"
        SET "status" = '${ORDER_STATUS.DELIVERED}'
        WHERE "id" = $1`,
  updateShippedOrder: `
		UPDATE "Orders"
		SET "status" = '${ORDER_STATUS.SHIPPED}'
		WHERE "id" = $1`,
  updateOrderPaymentMethod: `
		UPDATE "Orders"
		SET "paymentMethod"=$2
		WHERE "id" = $1
	`,
  getStoreOrderResult: `
		SELECT "Orders".id, "Orders"."orderNumber", "Orders".email, "Orders"."totalPrice", "Orders"."domain"
		FROM "Orders"
		WHERE id = $1
	`,
  createNewTransaction: `
		INSERT INTO "Transactions" ("orderID")
		VALUES ($1)
		RETURNING "id"
	`,
  findOrderIdByTransactionId: `
		SELECT "Transactions"."orderID"
		FROM "Transactions"
		WHERE id = $1
	`,
  updateTransactionToPaid: `
		UPDATE "Transactions"
		SET status='paid'
		WHERE id = $1
	`,
  updateOrderAdapayId: `
		update "Orders"
		set "adapayId"=$2
		where id=$1
	`,
  getPaidTransactionId: `
		select "Transactions".id
		from "Transactions"
		where "orderID"=$1
		and status='paid'
	`,
  // coupon query
  findCoupon: `
        SELECT *
        FROM "Coupons"
        WHERE ("code" = $1::VARCHAR OR "id"::VARCHAR = $1)
		AND "status" = '${GENERAL_STATUS.ENABLED}'
		AND "expireTime">$2
		AND "startTime"<$2
		AND "domain" = $3
		AND "numberOfUse">0
		`,
  findUsedCoupon: `SELECT *
        FROM "Coupons"
        WHERE ("code" = $1::VARCHAR OR "id"::VARCHAR = $1); `,
  createCoupon: `
        INSERT INTO "Coupons" ("code", "promotion", "discount", "status", "comment", "numberOfUse", "expireTime", "startTime","domain")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING * ; `,
  disableCoupon: `
        UPDATE "Coupons"
        SET "status" = '${GENERAL_STATUS.DISABLED}'
        WHERE "code" = $1::VARCHAR OR "id"::VARCHAR = $1
        RETURNING * ; `,
  enableCoupon: `
        UPDATE "Coupons"
        SET "status" = '${GENERAL_STATUS.ENABLED}'
		WHERE "code" = $1::VARCHAR OR "id"::VARCHAR = $1; `,
  decreaseCouponNumberOfUse: `
		UPDATE "Coupons"
		SET "numberOfUse" = "numberOfUse"-1
		WHERE "code" = $1::VARCHAR OR "id"::VARCHAR = $1; `,
  newMail: `
		INSERT INTO "Mails" ("name", "email", "content")
		VALUES ($1, $2, $3)
	`,
  getAllMails: `
		SELECT *
		FROM "Mails"
		ORDER BY "createdAt" DESC
	`,
  newSubscription: `
		INSERT INTO "Subscriptions" ("email")
		VALUES ($1)
		RETURNING "id"
	`,
  checkExistedEmail: `
		SELECT *
		FROM "Subscriptions"
		WHERE "email" = $1
	`,
  addSubscriptionCoupon: `
		UPDATE "Subscriptions"
		SET "coupon" = $2
		WHERE "id" = $1
	`,
  getAccountInfo: `
        SELECT "Account"."hashedPassword", "Account"."id"
        FROM "Account"
        WHERE "Account"."userName" = $1; `,
  adminGetOrders: `
		SELECT "Orders".id, email, "Orders"."orderNumber", "orderDetail", "Orders".status, "Orders".subtotal, "Orders".tax, "Orders"."shippingFee", "Orders"."totalPrice", "Orders"."paymentMethod", domain, coupon, row_to_json("Addresses") AS "shippingAddress", "Orders"."createdAt"
		FROM "Orders", "Addresses",
		LATERAL(
			SELECT COALESCE(
				json_agg(row_to_json("orderDetail")), '[]'::json) AS "orderDetail"
			FROM (
				SELECT "OrderDetail".price, "OrderDetail"."productID", "OrderDetail".amount, "OrderDetail"."optionID", "Products"."nameZh", "Products"."coverImage", "option"
				FROM "OrderDetail", "Products",
				LATERAL(
					SELECT COALESCE(
						json_agg(row_to_json("option")), '[]'::json) AS "option"
					FROM (
						SELECT "Options".price, "Options"."labelZh"
						FROM "Options"
						WHERE "OrderDetail"."optionID" = "Options".id
					) "option"
				) "option"
				WHERE "OrderDetail"."orderID" = "Orders".id
				AND "Products".id = "OrderDetail"."productID"
			) "orderDetail"
		) "orderDetail",
		LATERAL(
			SELECT
				json_agg(row_to_json("coupon")) AS "coupon"
			FROM (
				SELECT code
				FROM "Coupons"
				WHERE "Orders"."couponID" = id
			) "coupon"
		) "coupon"
		WHERE "Orders"."shippingAddress" = "Addresses".id
		AND ($1 = 'all' OR ("Orders".status = CAST($1 AS order_status)))
		AND (($2 = '' OR $3 = '') OR ("Orders"."createdAt" BETWEEN to_timestamp($2,'YYYY-MM-DD')::timestamp without time zone AND to_timestamp($3, 'YYYY-MM-DD')::timestamp without time zone))
		AND ($4 = '' OR ($4 != '' AND "Orders"."orderNumber" LIKE $4))
		AND ($6 = '' OR ("Orders".domain = CAST($6 AS domain_source)))
		AND ("Orders".status = 'paid'
		OR "Orders".status = 'shipped'
		OR "Orders".status = 'cancelled')
		ORDER BY "createdAt" DESC
		Limit 11
		offset $5
	`,
  adminGetUnshippedOrders: `
		SELECT "Orders".id, email, "Orders"."orderNumber", "orderDetail", "Orders".status, "Orders".subtotal, "Orders".tax, "Orders"."shippingFee", "Orders"."totalPrice", "Orders"."paymentMethod", domain, coupon,  row_to_json("Addresses") AS "shippingAddress", "Orders"."createdAt"
		FROM "Orders", "Addresses",
		LATERAL(
			SELECT COALESCE(
				json_agg(row_to_json("orderDetail")), '[]'::json) AS "orderDetail"
			FROM (
				SELECT "OrderDetail".price, "OrderDetail"."productID", "OrderDetail".amount, "OrderDetail"."optionID", "Products"."nameZh", "Products"."coverImage", "option"
				FROM "OrderDetail", "Products",
				LATERAL(
					SELECT COALESCE(
						json_agg(row_to_json("option")), '[]'::json) AS "option"
					FROM (
						SELECT "Options".price, "Options"."labelZh"
						FROM "Options"
						WHERE "OrderDetail"."optionID" = "Options".id
					) "option"
				) "option"
				WHERE "OrderDetail"."orderID" = "Orders".id
				AND "Products".id = "OrderDetail"."productID"
			) "orderDetail"
		) "orderDetail",
		LATERAL(
			SELECT
				json_agg(row_to_json("coupon")) AS "coupon"
			FROM (
				SELECT code
				FROM "Coupons"
				WHERE "Orders"."couponID" = id
			) "coupon"
		) "coupon"
		WHERE "Orders"."shippingAddress" = "Addresses".id
		AND "Orders".status='paid'
		ORDER BY "createdAt" ASC
		`,
  adminGetProducts: `
	SELECT id, "coverImage", "nameZh" as "productName", price, taxable, stock, status, options."options", country
	FROM "Products"
	LEFT JOIN LATERAL (
		SELECT ARRAY_TO_JSON(ARRAY_AGG(JSON_BUILD_OBJECT('id', "id", 'label', "label", 'price', "price"))) AS "options"
		FROM "Options"
		WHERE "Options"."productID" = "Products".id AND "Options"."status" = '${GENERAL_STATUS.ENABLED}'
	) options ON TRUE
	ORDER BY "Products"."lastUpdatedAt"
	`,
  adminUpdateProductTaxable: `
        UPDATE "Products"
        SET "taxable" =  $1
        WHERE "id" = $2
		RETURNING id, "coverImage", "nameZh" as "productName", price, taxable, stock, status, country`,
  adminUpdateProductStatus: `
        UPDATE "Products"
        SET "status" =  $1, "statusDescription" = $2, "statusDescriptionZh" = $3
        WHERE "id" = $4
        RETURNING id, "coverImage", "nameZh" as "productName", price, taxable, stock, status, country`,
  adminGetCouponsWithOrders: `
		Select *
		from "Coupons",
		Lateral (
			SELECT COALESCE(
				json_agg(row_to_json("orderDetail")), '[]'::json) AS "orderDetail"
			from (
				Select "Orders"."orderNumber"
				from "Orders"
				where "Orders"."couponID" = "Coupons".id
				and ("Orders"."status" = 'paid'
				or "Orders"."status" = 'shipped'
				or "Orders"."status" = 'cancelled')
			) "orderDetail"
		) order_detail
		Where "Coupons".status = 'enabled'
		ORDER BY "createdAt" DESC
        Limit 21
        offset $1
		`,
  adminUpdateProductPrice: `
			UPDATE "Products"
			SET "price" = $1
			WHERE "id" = $2
			RETURNING id, "coverImage", "nameZh" as "productName", price, taxable, stock, status, country
		`,
  adminUpdateProductOptionPrice: `
		UPDATE "Options"
		SET "price" = $1
		WHERE "productID" = $2
		AND "id" = $3
		RETURNING id, label, price
	`,
  adminGetAllSubscriptionEmails: `
		SELECT "Subscriptions"."email"
		FROM "Subscriptions"
	`
}

const query = async (key: string, value: string[]) => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
  })

  const query = procedures[key]

  const result = await pool.query(query, value)
  return { count: result.rowCount, data: result.rows }
}

export default query
