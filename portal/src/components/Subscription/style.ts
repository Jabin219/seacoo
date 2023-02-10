import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		position: 'relative',
		'& svg': {
			position: 'absolute',
			color: '#fff',
			right: 19,
			top: 17,
			cursor: 'pointer'
		},
		'& img': { width: '100%', marginBottom: 30 },
		'& h6': {
			'& span': {
				display: 'block',
				color: '#0080b9',
				fontSize: 14,
				fontWeight: 'bold',
				lineHeight: '18px',
				textAlign: 'center',
				margin: '0 auto',
				marginBottom: 24
			},
			'& .semi-zh': {
				fontSize: 17
			}
		},

		'& h1': {
			fontSize: 50,
			fontWeight: 800,
			letterSpacing: 0.36,
			lingHeight: '20px',
			textAlign: 'center',
			marginBottom: 24
		},
		'& .MuiTypography-body2': {
			'& span': {
				display: 'block',
				fontSize: 20,
				letterSpacing: 0.21,
				lineHeight: '23px',
				textAlign: 'center',
				maxWidth: 550,
				margin: '0 auto',
				marginBottom: 24
			},
			'& .body-zh': {
				fontSize: 17
			}
		},
		'& .MuiTextField-root': {
			width: 500,
			display: 'block',
			margin: '0 auto',
			marginBottom: 40,
			'& .MuiInputLabel-root': {
				fontSize: 14,
				fontWeight: 500,
				fontFamily: 'Montserrat'
			}
		},
		'& button': {
			display: 'block',
			margin: '0 auto',
			width: 312,
			height: 52,
			marginBottom: 50
		}
	}
})
