import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	recommendProducts: {
		marginTop: 25,
		marginBottom: 50,
		maxWidth: 1200,
		margin: '0 auto',
		'& a': {
			textDecoration: 'none',
			color: '#4d4d4e'
		},
		'& .title': {
			marginBottom: 10,
			'& h5': {
				fontSize: 20,
				fontWeight: 700,
				letterSpacing: '0.24px',
				paddingLeft: 10
			}
		},
		'& .MuiDivider-root': {
			backgroundColor: 'rgba(0,0,0,0.1)'
		},
		'& .recommend-products': {
			margin: 0,
			width: '100%',
			'& .product-image': {
				display: 'block',
				width: 332,
				height: 332,
				margin: '0 auto',
				cursor: 'pointer',
				'& img': {
					width: '100%',
					height: '100%',
					objectFit: 'cover'
				}
			},
			'& .product-info': {
				width: 310,
				margin: '0 auto',
				textAlign: 'center',
				marginTop: 15,
				'& .product-name': {
					fontSize: 20,
					fontWeight: 500,
					marginBottom: 10,
					cursor: 'pointer'
				},
				'& .product-price': {
					display: 'block',
					fontSize: 20,
					color: '#0080B9',
					fontWeight: 'bold'
				}
			}
		}
	}
})
