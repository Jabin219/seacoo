import mjml2html from 'mjml'
import moment from 'moment'
import { Order, Product } from '../../../models'
const orderConfirmationBecheHtml = (order: Order) =>
	mjml2html(`
    <mjml>
  <mj-head>
    <mj-attributes>
      <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat"></mj-font>
      <mj-all font-family="Montserrat" font-size="16px" padding="0px"></mj-all>
    </mj-attributes>
    <mj-style>
    .title-container{
      margin-top: 43px !important;
      }
      .title div {
      font-size: 21px !important;
      line-height: 30px !important;
      }
      .order-info-container {
      margin-top: 30px !important;
      }
      .order-info div {
      font-weight: 600 !important;
      font-size: 18px !important;
      color: #4D4D4E !important;
      line-height: 25px !important;
      }
      .table-container {
      margin-top: 40px !important;
      }
      .divider p {
      margin:50px auto !important;
      }
      .summary-container{
      margin-top: 30px !important;
      }
      .summary div {
      font-weight: 600 !important;
      font-size: 18px !important;
      color: #4D4D4E !important;
      line-height: 25px !important;
      letter-spacing: 0.21px !important;
      }
      .footer-container {
      margin-top:40px !important;
      }
    </mj-style>
  </mj-head>
  <mj-body width="800px">
    <mj-section>
      <mj-column>
        <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/beche-confirm-header.jpg"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section css-class="title-container">
      <mj-column>
        <mj-text css-class="title">Dear ${
					order.addressShipping.recipient
				},</mj-text>
        <mj-text css-class="title">Thank you for your purchase! Details for your order are below.
          We'll send you tracking information as soon as your order ships.</mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column background-color="#F5F5F5" padding="20px" css-class="order-info-container">
        <mj-text css-class="order-info">Time: ${moment(order.createdAt).format(
					'YYYY/MM/DD hh:mm'
				)}</mj-text>
        <mj-text css-class="order-info">Order Number: ${
					order.orderNumber
				}</mj-text>
        <mj-text css-class="order-info">Total Payment: $${
					order.totalPrice
				}</mj-text>
        <mj-text css-class="order-info">Shipping Address: ${
					order.addressShipping.street
				},&nbsp;
          ${order.addressShipping.city},&nbsp;
          ${order.addressShipping.province},&nbsp;
          ${order.addressShipping.country},&nbsp;
          ${order.addressShipping.postalCode}
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column css-class="table-container">
        <mj-table>
          <tr style="text-align:left; padding:15px 0; background-color:#f5f5f5">
            <th style="padding: 10px 15px 10px 10px; word-break:keep-all;">Product</th>
            <th style="padding: 0 15px; word-break:keep-all;">Qty</th>
            <th style="padding: 0 0 0 15px; word-break:keep-all;">Price</th>
          </tr>
          ${order.products.map(
						(product: Product) =>
							`<tr>
            <td style="padding: 10px 15px 10px 0; display:flex;">
              <img src=${
								product.coverImage
							} style="margin-right:20px; width: 100px; height:100px;" />
              <mj-text css-class='product-name'>${product.name}</mj-text>
            </td>
            <td style="padding: 10px 15px; word-break:keep-all; vertical-align:top;">x${
							product.amount
						}</td>
            <td style="padding: 10px 0 0 15px; word-break:keep-all; vertical-align:top;">$${product.price.toFixed(
							2
						)}</td>
          </tr>`
					)}
        </mj-table>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-divider border-width="1px" border-style="solid" border-color="#E0E0E0" css-class="divider" />
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column css-class="summary-container">
        <mj-text css-class="summary" align="right">Discount: $${
					order.discount ? '-' + Number(order.discount).toFixed(2) : 0
				}</mj-text>
        <mj-text css-class="summary" align="right">Shipping Fee: $${
					order.shippingFee
				}</mj-text>
        <mj-text css-class="summary" align="right">Tax: $${order.tax}</mj-text>
        <mj-text css-class="summary" align="right">Total: $${
					order.totalPrice
				}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-button background-color="#0080B9" font-size="16px" padding-top="140px" width="300px" height="50px" href="https://beche.ca/">See Our Site</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`)

export default orderConfirmationBecheHtml
