import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useTranslation } from 'react-i18next'

const Alert = (props: AlertProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

interface Props {
	open: boolean
	snackClose: () => void
	snackType: string
	snackSeverity: string
}

const SnackBar = ({ open, snackClose, snackType, snackSeverity }: Props) => {
	const { t } = useTranslation()
	const getSnackbarContent = (snackType: string) => {
		switch (snackType) {
			case 'add-to-cart':
				return t('1 item has been added to your cart!')
				break
			case 'send-review':
				return t('Your comment has been posted!')
				break
			case 'send-message':
				return t('Your message has been sent!')
				break
			case 'subscription':
				return t('Promotion code has been sent to your email!')
				break
			case 'already-subscribe':
				return t('You have already subscribed. Thanks!')
				break
			case 'payment-failed':
				return t('Sorry, payment failed!')
				break
			default:
				break
		}
		return ''
	}
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={open}
			autoHideDuration={3000}
			onClose={snackClose}
		>
			<Alert onClose={snackClose} severity={snackSeverity}>
				{getSnackbarContent(snackType)}
			</Alert>
		</Snackbar>
	)
}

export default SnackBar
