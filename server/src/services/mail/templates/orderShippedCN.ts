import mjml2html from 'mjml'
import { Order } from '../../../models'
const orderShippedCNHtml = (
	order: Order,
	shippingMethod: string,
	trackingNumber: string,
	coldChainCarrier: string,
	trackingNumberColdChain: string
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
      margin-top:10px !important;
      margin-bottom:10px !important;
      color: #4d4d4e !important;
      text-align: center !important;
      font-size: 20px !important;
      }
      span {
      color: #0080B9 !important;
      text-decoration: underline !important;
      }
      .footer-container {
      margin-top:50px !important;
      }
    </mj-style>
  </mj-head>
  <mj-body width="800px">
    <mj-section>
      <mj-column>
        <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/cn-confirm-head.jpg"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section css-class="main-body-container">
      <mj-column>
        <mj-text css-class="bold">尊敬的客户，您好！</mj-text>
        <mj-text css-class="main-body">您的订单${
					order.orderNumber
				}已发货，由<span>${shippingMethod}</span>承运。</mj-text>
        <mj-text css-class="main-body">快递运单号为：</mj-text>
        <mj-text css-class="tracking">${trackingNumber}</mj-text>
        ${
					coldChainCarrier &&
					trackingNumberColdChain &&
					`<mj-text css-class="main-body">需保温的冷冻生鲜商品单独发<span>${coldChainCarrier}</span>，</mj-text>
        <mj-text css-class="main-body">冷链运输单号为：</mj-text>
        <mj-text css-class="tracking">${trackingNumberColdChain}</mj-text>`
				}
      </mj-column>
    </mj-section>
    <mj-section css-class="footer-container">
      <mj-column>
        <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/cn-confirm-footer.jpg"></mj-image>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`)

export default orderShippedCNHtml
