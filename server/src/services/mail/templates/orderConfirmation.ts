import mjml2html from 'mjml'
import { Order, Product } from '../../../models'

const orderConfirmationHtml = (order: Order) =>
	mjml2html(`
    <mjml>
		<mj-head>
			<mj-attributes>
				<mj-text padding="0" line-height="30px" font-size="20px" />
				<mj-all font-family="PT Serif" />
				<mj-class name="bold" font-weight="600" />
				<mj-class name="guttertop" padding-top="24px" />
				<mj-class name="gutterbottom" padding-bottom='24px' />
				<mj-class name="cellFirst" padding='20px 0' />
				<mj-class name="cell" padding='20px' text-align='center' />
				<mj-all font-family="PT Serif" />
			</mj-attributes>
		</mj-head>
		<mj-body background-color="#ffffff" padding-top="50px" width="800px">
			<mj-section>
				<mj-column>
					<mj-text mj-class="bold">Order Confirmation</mj-text>
					<mj-text mj-class="bold gutterbottom">Order Number #${
						order.orderNumber
					}</mj-text>
					<mj-text mj-class="gutterbottom">Dear ${
						order.addressShipping.recipient
					},</mj-text>
					<mj-text mj-class="gutterbottom">
						Thank you for your purchase! Details for your order are below.</br>
						We'll send you tracking information as soon as your order ships.
					</mj-text>
				</mj-column>
			</mj-section>
			<mj-section>
				<mj-column>
					<mj-table font-size="20px" padding="0">
						<tr style="background-color:#D8D8D8;text-align:center;">
							<th style="padding: 10px 15px;font-weight:600;">Name</th>
							<th style="padding: 10px 15px;font-weight:600;">Option</th>
							<th style="padding: 10px 15px;font-weight:600;">Unit Price</th>
							<th style="padding: 10px 15px;font-weight:600;">Qty</th>
							<th style="padding: 10px 15px;font-weight:600;">Subtotal</th>
						</tr>
						${order.products.map(
							(product: Product) =>
								`<tr>
									<td style='padding: 20px;'>${product.name}
									</td>
									<td style='text-align:center;'>${
										product.description ? product.description : '-'
									}</td>
									<td style='text-align:center;'>$ ${product.price.toFixed(2)}</td>
									<td style='text-align:center;'>${product.amount}</td>
									<td style='text-align:center;'>$ ${(product.amount * product.price).toFixed(
										2
									)}</td>
								</tr>`
						)}
					</mj-table>
					<mj-text mj-class="guttertop" align="right">Items: &#36; ${Number(
						order.subtotal
					).toFixed(2)}</mj-text>
					<mj-text align="right">Discount: &#36; ${
						order.discount ? '-' + Number(order.discount).toFixed(2) : 0
					}</mj-text>
					<mj-text align="right">Subtotal: &#36; ${Number(
						order.subtotal - order.discount
					).toFixed(2)}</mj-text>
					<mj-text align="right">Shipping: &#36; ${order.shippingFee}</mj-text>
					<mj-text align="right">Tax: &#36; ${order.tax}</mj-text>
					<mj-text mj-class="gutterbottom" align="right">Total: &#36; ${
						order.totalPrice
					}</mj-text>
					<mj-text>Delivering to: </mj-text>
					<mj-text mj-class="bold gutterbottom">${order.addressShipping.recipient}</br>
						${order.addressShipping.street + ` ` + order.addressShipping.city}</br>
						${
							order.addressShipping.province +
							` ` +
							order.addressShipping.postalCode
						} </mj-text>
					<mj-text mj-class="gutterbottom">Shipping:</br>
						Orders will typically ship within two business days of purchase, pending</br>
						availability and credit card verification.</mj-text>
					<mj-text mj-class="gutterbottom">If you have any questions, please reply to this email.</mj-text>
					<mj-text>Thank you again for your order!</mj-text>
				</mj-column>
			</mj-section>
			<mj-section>
				<mj-column>
					<mj-image width="100px" padding="10px 0 20px 0" align="left" src=${
						process.env.MAIL_SRC_LOGO
					}></mj-image>
					<mj-text font-size="18px">
						SEACOO</br>
						Direct Line: 1-902-706-1821 Toll Free 1-866-200-2661</br>
						Email: info@seacoo.com Web: seacoo.com
					</mj-text>
					<br/>
					<mj-spacer height="30px" />
					<mj-text font-size="10px" line-height="12px" color="#ccc">
						This email message is confidential, may be legally privileged, and is intended for the exclusive use of the addressee. If you received this message in error or are not the intended recipient, you should destroy the email message and any attachments or copies, and you are prohibited from retaining, distributing, disclosing, or using any information contained. Please inform us of the delivery error by return email. Thank you for your cooperation.
						<br/>
						<br/>
						Le présent message électronique est confidentiel et peut être couvert par le secret professionnel. Il est à l’usage exclusif du destinataire. Si vous recevez ce message par erreur ou si vous n’en êtes pas le destinataire prévu, vous devez détruire le message et toute pièce jointe ou copie et vous êtes tenu de ne pas conserver, distribuer, divulguer ni utiliser tout renseignement qu’il contient. Veuillez nous informer de toute erreur d’envoi en répondant à ce message. Merci de votre collaboration.
					</mj-text>
				</mj-column>
			</mj-section>
		</mj-body>
    </mjml>
`)

export default orderConfirmationHtml
