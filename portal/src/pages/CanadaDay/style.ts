import { makeStyles } from '@material-ui/styles'
export const useStyles = makeStyles({
	root: {
		maxWidth: 1440,
		margin: '0 auto',
		'& .MuiButton-root': {
			display: 'block',
			margin: '0 auto',
			textTransform: 'none',
			borderRadius: '30px !important',
			padding: '5px 40px 5px 40px',
			'& a': {
				textDecoration: 'none',
				color: '#fff'
			}
		}
	},
	image: {
		width: '100%'
	},
	introduction: {
		maxWidth: 1100,
		margin: '50px auto',
		'& p': {
			fontSize: 22,
			marginBottom: 20
		},
		'& .overstriking': {
			fontWeight: 700
		},
		'& .red': {
			fontWeight: 700,
			color: '#f00'
		}
	},
	recommendProducts: {
		marginTop: 25,
		marginBottom: 50,
		maxWidth: 1440,
		margin: '0 auto',
		'& a': {
			textDecoration: 'none',
			color: '#4d4d4e',
			display: 'block'
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
					fontSize: 20,
					color: '#0080B9',
					fontWeight: 'bold'
				}
			}
		}
	}
})
