import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	productList: {
		'& .banner': {
			height: 300,
			backgroundImage: 'url(/images/productList/product-list-banner.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItem: 'center',
			'& .title': {
				fontSize: 50,
				fontWeight: 'bold',
				color: '#fff',
				letterSpacing: 0.6,
				lineHeight: '61px',
				textAlign: 'center'
			},
			'& .divider': {
				display: 'block',
				margin: '0 auto',
				marginTop: 10,
				width: 50,
				borderBottom: '4px solid #fff'
			},
			'& .sub-title': {
				marginTop: 15,
				fontSize: 20,
				color: '#fff',
				fontWeight: 600,
				letterSpacing: 0.24,
				lineHeight: '24px',
				textAlign: 'center'
			}
		},
		'& .beche-banner': {
			width: '100%',
			height: 300,
			backgroundImage: 'url(/images/productList/beche-banner.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItem: 'center',
			marginBottom: 60,
			'& .title': {
				fontSize: 50,
				fontWeight: 'bold',
				color: '#fff',
				letterSpacing: 0.6,
				lineHeight: '61px',
				textAlign: 'center'
			},
			'& .divider': {
				display: 'block',
				margin: '0 auto',
				marginTop: 10,
				width: 50,
				borderBottom: '4px solid #fff'
			},
			'& .sub-title': {
				marginTop: 15,
				fontSize: 20,
				color: '#fff',
				fontWeight: 600,
				letterSpacing: 0.24,
				lineHeight: '24px',
				textAlign: 'center'
			}
		},
		'& .frozen-banner': {
			width: '100%',
			height: 300,
			backgroundImage: 'url(/images/productList/frozen-banner.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItem: 'center',
			marginBottom: 60,
			'& .title': {
				fontSize: 50,
				fontWeight: 'bold',
				color: '#fff',
				letterSpacing: 0.6,
				lineHeight: '61px',
				textAlign: 'center'
			},
			'& .divider': {
				display: 'block',
				margin: '0 auto',
				marginTop: 10,
				width: 50,
				borderBottom: '4px solid #fff'
			},
			'& .sub-title': {
				marginTop: 15,
				fontSize: 20,
				color: '#fff',
				fontWeight: 600,
				letterSpacing: 0.24,
				lineHeight: '24px',
				textAlign: 'center'
			}
		}
	},
	products: {
		maxWidth: 1200,
		margin: '60px auto 0 auto',
		'& .product': {
			marginBottom: 60,
			'& .img-container': {
				display: 'block',
				width: 332,
				height: 332,
				margin: '0 auto'
			},
			'& .properties': {
				fontSize: 14,
				letterSpacing: 0.17,
				lineHeight: '18px',
				textAlign: 'center',
				marginTop: 10
			},
			'& .product-name': {
				display: 'block',
				margin: '0 auto',
				fontSize: 18,
				color: '#4d4d4e',
				textDecoration: 'none',
				fontWeight: 'bold',
				textAlign: 'center',
				marginTop: 10
			},
			'& .product-price': {
				fontSize: 20,
				color: '#0080b9',
				letterSpacing: 0.24,
				lineHeight: '24px',
				fontWeight: 'bold',
				textAlign: 'center',
				marginTop: 10
			}
		}
	}
})
