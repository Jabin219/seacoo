import React from 'react'
import { Snackbar as MuiSnackbar } from '@material-ui/core'
import useStyles from './style'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

export interface Props {
	open: boolean
	content: string
	onClose: () => void
	status: 'success' | 'error' | ''
}
const Alert = (props: AlertProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Snackbar = (props: Props) => {
	const { open, onClose, content, status } = props
	const classes = useStyles()
	return (
		<MuiSnackbar
			open={open}
			autoHideDuration={3000}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			classes={{ anchorOriginTopCenter: classes.anchorOriginTopCenter }}
			className={classes.snackbar}
			onClose={onClose}
		>
			<Alert onClose={onClose} severity={status as any}>
				{content}
			</Alert>
		</MuiSnackbar>
	)
}

export default Snackbar
