import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	termOfUse: {
		maxWidth: 780,
		margin: '100px auto',
		lineHeight: '18px',
		'& .title': {
			fontSize: 20,
			fontWeight: 'bold',
			textAlign: 'center',
			marginBottom: 50
		},
		'& .subtitle': {
			fontSize: 14,
			fontWeight: 'bold'
		}
	}
})
