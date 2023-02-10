import { useState } from 'react'
import { getAllSubscriptionEmails } from 'api/subscription'
import { Data } from 'react-csv/components/CommonPropTypes'

const useSubscriptions = () => {
	const [subscribeEmails, setSubscribeEmails] = useState<Data>([])
	const getSubscriptionEmails = async () => {
		const getMailsResult = await getAllSubscriptionEmails()
		setSubscribeEmails(getMailsResult.data.data)
	}

	return { subscribeEmails, setSubscribeEmails, getSubscriptionEmails }
}

export default useSubscriptions
