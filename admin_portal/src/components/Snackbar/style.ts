import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	content: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	snackbar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		borderRadius: 5,
		paddingLeft: 24,
		paddingRight: 12,
		paddingTop: 14,
		paddingBottom: 14,
		marginTop: 64
	},
	anchorOriginTopCenter: {
		top: 80
	},
	iconButton: {
		width: 10,
		height: 10,
		padding: 13
	}
}))
export default useStyles
