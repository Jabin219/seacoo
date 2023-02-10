import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	shippingReturns: {
		maxWidth: 780,
		margin: '50px auto',
		'& .title': {
			fontFamily: 'PT Serif',
			fontSize: 20,
			fontWeight: 'bold',
			letterSpacing: '0.24px',
			textAlign: 'center',
			marginBottom: 50
		},
		'& .mini-title': {
			fontFamily: 'PT Serif',
			fontSize: 14,
			fontWeight: 'bold',
			letterSpacing: '0.21px',
			lineHeight: '18px',
			marginBottom: 5
		},
		'& p': {
			fontSize: 14,
			letterSpacing: '0.21px',
			lineHeight: '20px'
		},
		'& .question': {
			marginBottom: 30
		}
	}
})
