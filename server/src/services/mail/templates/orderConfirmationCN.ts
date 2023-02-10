import mjml2html from 'mjml'
import { Order, Product } from '../../../models'
import moment from 'moment'
const orderConfirmationCNHtml = (order: Order, exchangeRate) =>
	mjml2html(`
	<mjml>
  <mj-head>
    <mj-attributes>
      <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat"></mj-font>
      <mj-all font-family="Montserrat" font-size="16px" padding="0px"></mj-all>
    </mj-attributes>
    <mj-style>
      td {
        font-size:16px !important;
        color: #000000 !important;
      }
      th {
        color: #000000 !important;
      }
      .body-container{
      width: 85% !important;
      }
      .title-container{
      margin-top: 43px !important;
      }
      .title div {
      font-weight: 600 !important;
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
      .summary div {
      font-weight: 600 !important;
      font-size: 18px !important;
      color: #4D4D4E !important;
      line-height: 25px !important;
      }
      .footer-container {
      margin-top:40px !important;
      }
    </mj-style>
  </mj-head>
  <mj-body width=800>
    <mj-section>
      <mj-column>
        <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/cn-confirm-head.jpg"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section css-class="body-container">
      <mj-section css-class="title-container">
        <mj-column>
          <mj-text css-class="title">尊敬的客户，您好！</mj-text>
          <mj-text css-class="title">感谢您对SEACOO一如既往的信赖与支持，您的订单详情如下：</mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column background-color='#F5F5F5' padding='20' css-class="order-info-container">
          <mj-text css-class="order-info">下单时间：${moment(
						order.createdAt
					).format('YYYY/MM/DD hh:mm')}</mj-text>
          <mj-text css-class="order-info">订单号：${order.orderNumber}</mj-text>
          <mj-text css-class="order-info">订单总额：${(
						order.totalPrice * exchangeRate
					).toFixed(2)}</mj-text>
          <mj-text css-class="order-info">收货人：</mj-text>
          <mj-text css-class="order-info">${
						order.addressShipping.recipient
					}</mj-text>
          <mj-text css-class="order-info">${
						order.addressShipping.phone
					}</mj-text>
          <mj-text css-class="order-info">${
						order.addressShipping.province +
						order.addressShipping.city +
						order.addressShipping.street
					}</mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column css-class="table-container">
          <mj-table color="">
            <tr style="text-align:left; background-color:#F5F5F5;">
              <th style="padding: 10px 0 10px 15px; word-break:keep-all;">商品</th>
              <th style="word-break:keep-all;">件数</th>
              <th style="word-break:keep-all;">单价</th>
            </tr>
            ${order.products.map(
							(product: Product) =>
								`<tr>
              <td style="padding: 10px 15px 10px 0; display:flex;">
                <img src=${
									product.coverImage
								} style="margin-right:20px; width: 100px; height:100px;" />
                <mj-text css-class='product-name'>${product.nameZh}</mj-text>
              </td>
              <td style="padding: 10px 15px 10px 0; vertical-align:top;">x${
								product.amount
							}</td>
              <td style="padding: 10px 15px 10px 0; vertical-align:top;">￥${(
								product.price * exchangeRate
							).toFixed(2)}</td>
            </tr>`
						)}
          </mj-table>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
            <mj-text css-class="summary" align="right">小计：¥ ${(
							order.subtotal * exchangeRate
						).toFixed(2)}</mj-text>
            <mj-text css-class="summary" align="right">运费：¥ ${(
							order.shippingFee * exchangeRate
						).toFixed(2)}</mj-text>
            <mj-text css-class="summary" align="right">折扣：¥ ${
							order.discount
								? '-' + Number(order.discount * exchangeRate).toFixed(2)
								: 0
						}</mj-text>
            <mj-text css-class="summary" align="right">总价：¥ ${(
							order.totalPrice * exchangeRate
						).toFixed(2)}</mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-button background-color="#0080B9" font-size="16px" padding-top="40px" href="https://www.seacoo-cn.com">
            更多信息
          </mj-button>
        </mj-column>
      </mj-section>
      <mj-section css-class="footer-container">
        <mj-column>
          <mj-image src="https://seacoo-dev.s3.amazonaws.com/seacoo-email/cn-confirm-footer.jpg"></mj-image>
        </mj-column>
      </mj-section>
    </mj-section>
  </mj-body>
</mjml>
`)

export default orderConfirmationCNHtml
