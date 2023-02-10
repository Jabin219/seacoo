import mjml2html from 'mjml'

const newSubscriptionHtml = (couponCode: string) =>
	mjml2html(`
	<mjml>
		<mj-head>
			<mj-attributes>
			<mj-text padding="0px" line-height="30px" font-size="20px"></mj-text>
			<mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat"></mj-font>
			<mj-class name="text" font-weight="300" font-size="20px" color="#4D4D4E" letter-spacing="0.21px" line-height="24px"></mj-class>
			<mj-all font-family="Montserrat"></mj-all>
			</mj-attributes>
			<mj-head>
				<mj-preview>We'd love to share the best Canadian wild sea cucumber products with you! As a special treat, enjoy 10% off your first online purchase. Enter your code at checkout.</mj-preview>
			</mj-head>
		</mj-head>
		<mj-body background-color="#ffffff" css-class="email-body" width='800px' >
			<mj-section>
				<mj-image src="https://seacoo-dev.s3.amazonaws.com/src/seacoo-email1.jpg"></mj-image>
			</mj-section>
			<mj-section>
				<mj-column width="80%" padding-left='20px' padding-right='20px'>
					<mj-text mj-class="text">We'd love to share the best Canadian wild seacucumbers products with you! As a special treat, enjoy 10% off your first online purchase. Enter your code at checkout.</mj-text>
				</mj-column>
			</mj-section>
			<mj-section>
			<mj-column width="80%" padding-left='20px' padding-right='20px'>
				<mj-button background-color="#EEEEEE" color="#4D4D4E" inner-padding="10px 25px" padding-bottom="45px" height="60px" font-weight="700" font-size="40px" line-height="49px" width="250px">${couponCode}</mj-button>
				<mj-button background-color="#0080B9" color="white" border-radius="26px" padding-bottom="30px" width="200px" height="52px" font-weight="600" font-size="18px" line-height="19px" href="https://www.seacoo.com/product/">Shop Now</mj-button>
			</mj-column>
			</mj-section>
			<mj-section border-bottom="1px solid rgba(0,0,0,0.1)">
			<mj-column width="80%" padding-left='20px' padding-right='20px'>
				<mj-text mj-class="text" padding-bottom="20px">Valid for 30 days for NEW customers only.</mj-text>
				<mj-text mj-class="text" padding-bottom="20px" font-weight="600">
				Please Note:
				</mj-text>
				<mj-text mj-class="text" padding-bottom="20px">
				This code is only valid for one single purchase within the next 30 days. All products in the online store can be chosen. The code cannot be combined with other offers. In addition, This offer has no cash alternative.
				</mj-text>
				<mj-text mj-class="text" padding-bottom="50px">
				If you have any questions, please contact us.</mj-text>
			</mj-column>
			</mj-section>
			<mj-section padding-top="40px">
			<mj-column width="80%" padding-left='20px' padding-right='20px'>
				<mj-text mj-class="text" padding-bottom="5px">Email: info@seacoo.com</mj-text>
				<mj-text mj-class="text" padding-bottom="5px">Toll Free: +1 (866) 200 2661</mj-text>
				<mj-text mj-class="text">Our website: https://www.seacoo.com</mj-text>
			</mj-column>
			</mj-section>
		</mj-body>
	</mjml>
`)

export { newSubscriptionHtml }
