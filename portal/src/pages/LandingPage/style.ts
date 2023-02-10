import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	landing: {
		maxWidth: 780,
		margin: '50px auto',
		marginTop: 0,
		marginBottom: 200,
		'& img': {
			width: '100%',
			marginBottom: 50
		},
		'& .mini-title': {
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
		'& .text': {
			marginBottom: 30
		}
	}
})
