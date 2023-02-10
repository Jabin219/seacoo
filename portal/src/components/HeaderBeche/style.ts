import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	header: {
		display: 'flex',
		height: 80,
		backgroundColor: 'rgba(0,0,0,0.38)',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '20px 80px 15px 30px',
		'& .logo': {
			'& img': {
				width: 106,
				height: 43
			}
		},
		'& .cart-icon': {
			'& .MuiSvgIcon-root': { color: '#fff', fontSize: 40 },
			'& .MuiBadge-badge': { backgroundColor: '#f00' }
		}
	}
})
