import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		'& .additional-description': {
			'& .additional-description-img': {
				'& img': {
					width: '100%'
				}
			},
			'& h4 p': {
				fontSize: 20
			}
		},
		'& .description-img-group': {
			marginTop: 50,
			marginBottom: 50,
			'& img': {
				width: '100%',
				marginBottom: 10
			},
			'& p': {
				color: '#4d4d4e',
				fontSize: 14,
				letterSpacing: '0.17px',
				lineHeight: '18px'
			}
		}
	}
})
