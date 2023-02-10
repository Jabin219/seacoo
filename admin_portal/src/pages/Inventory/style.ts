import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
	root: {
		width: '70%',
		minWidth: 880,
		margin: '39px auto',
		height: '100%',
		borderRadius: 0,
		borderColor: 'white',
		'& .MuiTableCell-head': {
			textAlign: 'center'
		},
		'& .MuiTableCell-body': {
			textAlign: 'center',
			'& p': {
				textAlign: 'center'
			}
		}
	},
	paper: {
		width: 300,
		height: 122
	},
	updateStatusWindow: {
		width: 600,
		height: 390,
		position: 'relative',
		'& .update-status-window-container': {
			padding: 25
		},
		'& .button-container': {
			position: 'absolute',
			right: 30,
			bottom: 10
		},
		'& .MuiDialogActions-spacing > :not(:first-child)': {
			margin: 0
		}
	}
}))
