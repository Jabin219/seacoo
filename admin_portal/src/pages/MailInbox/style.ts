import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		'& .mail-list-container': {
			height: '100vh',
			backgroundColor: '#fff',
			overflow: 'auto'
		}
	},
	mailList: {
		backgroundColor: '#fff',
		'& .MuiListItem-root': {
			padding: '10px 25px',
			'& .time': {
				fontSize: 12,
				color: 'rgba(0,0,0,0.54)',
				letterSpacing: 1,
				lineHeight: '32px'
			},
			'& h2': {
				color: '#000',
				fontSize: 16,
				letterSpacing: 0.17,
				lineHeight: '32px'
			}
		},
		'& .selected': {
			backgroundColor: 'rgba(238,238,238,0.5)'
		},
		'& .unselected': {
			cursor: 'pointer'
		}
	},
	mailContent: {
		backgroundColor: '#fff',
		width: 700,
		margin: '0 auto',
		'& .content-container': {
			padding: '20px 40px 75px 40px',
			'& h2': {
				fontSize: 20,
				marginBottom: 20,
				textAlign: 'center'
			},
			'& h4': {
				fontSize: 16,
				color: '#000',
				fontWeight: 600,
				marginBottom: 10
			},
			'& p': {
				fontSize: 14,
				color: '#000',
				fontWeight: 400,
				marginBottom: 10,
				wordBreak: 'break-word'
			}
		}
	}
})
