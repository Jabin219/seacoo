import mjml2html from 'mjml'
import { Order } from '../../../models'
const orderShippedBecheHtml = (
	order: Order,
	shippingMethod: string,
	trackingNumber: string
) =>
	mjml2html(`
  <mjml>
  <mj-head>
    <mj-attributes>
      <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat"></mj-font>
      <mj-all font-family="Montserrat" font-size="16px" padding="0px"></mj-all>
    </mj-attributes>
    <mj-style>
      .main-body-container{
      margin-top: 50px !important;
      }
      .bold div {
      text-align: center !important;
      font-weight: 600 !important;
      font-size: 20px !important;
      margin-bottom: 20px !important;
      line-height : 28px !important;
      }
      .main-body div{
      width: 60% !important;;
      margin: 0 auto !important;;
      text-align: center !important;
      font-size: 14px !important;
      line-height :20px !important;
      color:#4d4d4e !important;
      }
      .tracking div{
      margin-top:20px !important;
      color: #4d4d4e !important;
      text-align: center !important;
      font-size: 20px !important;
      }
      span {
      color: #0080B9 !important;
      text-decoration: underline !important;
      }
    </mj-style>
  </mj-head>
  <mj-body width="800px">
    <mj-section>
      <mj-column>
        <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/beche-confirm-header.jpg"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section css-class="main-body-container">
      <mj-column>
        <mj-text css-class="bold">Your order is ON THE WAY!</mj-text>
        <mj-text css-class="main-body">Dear customer, your order #${order.orderNumber} has been shipped by <span>${shippingMethod}</span>.</mj-text>
        <mj-text css-class="main-body">The tracking number is:</mj-text>
        <mj-text css-class="tracking">${trackingNumber}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`)

export default orderShippedBecheHtml
