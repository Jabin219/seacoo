import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		maxWidth: '1920px',
		margin: '0 auto',
		position: 'relative',
		'& .close-icon': {
			position: 'absolute',
			right: 20,
			top: '20%',
			zIndex: 9,
			cursor: 'pointer'
		},
		'& ul': {
			height: 40,
			'& .slide': {
				backgroundColor: '#EEEEEE',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				'& p': {
					fontSize: 18,
					textDecoration: 'none',
					letterSpacing: 0.17,
					lineHeight: '18px',
					display: 'inline-block',
					'& .free-shipping': {
						fontWeight: 700
					}
				},
				'& .landing': {
					display: 'inline-block',
					color: '#4d4d4e',
					textDecoration: 'underline'
				},
				'& .MuiTypography-body2': {
					letterSpacing: 0.17,
					lineHeight: '18px',
					fontSize: 18,
					'& .subscribe': {
						cursor: 'pointer',
						textDecoration: 'underline'
					},
					'& .off': {
						fontWeight: 700
					}
				}
			}
		}
	},
	unShow: {
		display: 'none'
	}
})
