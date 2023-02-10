import { useState } from 'react'
import { Mail } from 'models'
import { getAllMails } from 'api'

const useMails = () => {
	const [mails, setMails] = useState<Mail[]>()
	const getMails = async () => {
		const getMailsResult = await getAllMails()
		setMails(getMailsResult.data.data)
	}

	return { mails, setMails, getMails }
}

export default useMails
