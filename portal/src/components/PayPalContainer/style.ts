import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		position: 'relative',
		'& .MuiGrid-container': {
			'& .paypal-button-container': {
				'& .paypal-buttons': {
					zIndex: 1
				}
			},
			'& .back-button-container': {
				'& .button-back': {
					minWidth: 0,
					height: 45,
					borderRadius: 5,
					'& span': {
						fontSize: 16,
						fontWeight: 600
					}
				}
			}
		}
	},
	backdrop: {
		zIndex: 9,
		color: '#fff'
	}
})
