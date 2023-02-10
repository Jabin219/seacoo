import mjml2html from 'mjml'
import { Comment } from '../../../models'

const newReviewHtml = (comment: Comment) =>
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
                <mj-text mj-class="bold">New Review</mj-text>
                <mj-text mj-class="bold gutterbottom">Product: ${comment.productName}</mj-text>
                <mj-text mj-class="gutterbottom">User: ${comment.user},</mj-text>
                <mj-text mj-class="gutterbottom">Email: ${comment.email},</mj-text>
                <mj-text mj-class="gutterbottom">Rate: ${comment.rate},</mj-text>
                <mj-text mj-class="gutterbottom">${comment.content}</mj-text>
            </mj-column>
        </mj-section>
    </mj-body>
    </mjml>
`)

export { newReviewHtml }
