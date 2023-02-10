import mjml2html from 'mjml'
import { Message } from '../../../models'

const newMessageHtml = (message: Message) =>
	mjml2html(`
    <mjml>
        <mj-head>
            <mj-attributes>
                <mj-text padding="0" line-height="30px" font-size="20px" />
                <mj-class name="bold" font-weight='600' />
                <mj-class name="guttertop" padding-top='24px' />
                <mj-class name="gutterbottom" padding-bottom='24px' />
                <mj-class name="cellFirst" padding='20px 0' />
                <mj-class name="cell" padding='20px' text-align='center' />
                <mj-all font-family="PT Serif" />
            </mj-attributes>
        </mj-head>
        <mj-body background-color="#ffffff" padding-top="50px" width="800px">
        <mj-section>
            <mj-column>
                <mj-text mj-class="bold">New Message</mj-text>
                <mj-text mj-class="gutterbottom">User: ${message.name},</mj-text>
                <mj-text mj-class="gutterbottom">Email: ${message.email},</mj-text>
                <mj-text mj-class="gutterbottom">${message.content}</mj-text>
            </mj-column>
        </mj-section>
    </mj-body>
    </mjml>
`)

export { newMessageHtml }
