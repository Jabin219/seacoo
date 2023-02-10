import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	article: {
		maxWidth: 600,
		margin: '50px auto',
		'& .title': {
			color: '#4d4d4e',
			fontSize: 30,
			fontWeight: 600,
			textAlign: 'center',
			marginBottom: 50
		},
		'& p': {
			color: '#4d4d4e',
			fontSize: 14,
			lineHeight: '18px',
			marginBottom: 20
		},
		'& img': {
			marginBottom: 30
		},
		'& h4': {
			color: '#4d4d4e',
			fontSize: 30,
			textAlign: 'center'
		}
	}
})
