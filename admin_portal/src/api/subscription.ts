import axios from 'axios'

const getAllSubscriptionEmails = () =>
	axios.get('/admin/get_subscription_emails')

export { getAllSubscriptionEmails }
