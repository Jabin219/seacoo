import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	product: {
		marginTop: 50,
		maxWidth: 1440,
		margin: '0 auto',
		'& .logo': {
			maxWidth: 250,
			margin: '0 auto',
			marginTop: 200,
			'& img': {
				width: '100%'
			}
		}
	},
	productDetailSummary: {
		paddingBottom: 80,
		borderBottom: '1px solid rgba(0,0,0,0.1)',
		padding: '0 30px',
		'& .product-image': {
			'& .large-img-holder': {
				height: 500,
				marginBottom: 20,
				'& .large-img': {
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center center'
				}
			},
			'& .mini-img-group': {
				flexWrap: 'nowrap',
				'& img': {
					objectFit: 'cover',
					objectPosition: 'center center',
					cursor: 'pointer'
				}
			}
		},

		'& .product-info': {
			'& button': {
				minWidth: '0 !important',
				maxWidth: 350
			},
			'& .product-name': {
				color: '#4d4d4e',
				fontSize: 30,
				fontWeight: 600,
				letterSpacing: 0.36,
				lineHeight: '42px',
				marginBottom: 10
			},
			'& .out-of-stock': {
				fontSize: 23,
				color: '#E02020',
				fontWeight: 600,
				letterSpacing: 0.17,
				lineHeight: '18px',
				marginTop: 70
			},
			'& .product-price': {
				color: '#0280b9',
				fontSize: 30,
				fontWeight: 'bold',
				marginBottom: 10
			},
			'& .product-intro': {
				color: '#4d4d4e',
				fontSize: 14,
				letterSpacing: '0.17px',
				lineHeight: '18px',
				marginBottom: 30
			},
			'& .product-ship, .product-ship-info, .product-quantity': {
				color: '#4d4d4e',
				fontSize: 14,
				fontWeight: 600,
				letterSpacing: '0.17px',
				lineHeight: '18px',
				marginBottom: 5
			},
			'& .product-ship-info': {
				fontWeight: 500,
				marginBottom: 20
			},
			'& .product-quantity-detail': {
				width: 150,
				height: 50,
				marginBottom: 30,
				border: '1px solid rgba(0,0,0,0.1)',
				alignItems: 'center',
				'& button': {
					width: '100%'
				},
				'& h4': {
					textAlign: 'center',
					fontSize: 20,
					fontWeight: 'bold'
				}
			},
			'& .btn-add-to-cart, .btn-buy-now': {
				display: 'block',
				height: 60,
				width: '80%',
				fontSize: 16,
				fontWeight: 'bold',
				letterSpacing: '0.19px',
				textAlign: 'center'
			},
			'& .btn-add-to-cart': {
				marginBottom: 20,
				color: '#fff'
			},
			'& .btn-add-to-cart:hover': {
				backgroundColor: '#4DA7CF'
			},
			'& .btn-buy-now:hover': {
				color: '#4DA7CF',
				borderColor: '#4DA7CF'
			}
		}
	},
	productDetailDescription: {
		padding: '0 30px'
	},
	tabs: {
		marginBottom: 80,
		marginTop: 10,
		'& .MuiTabs-root': {
			'& button': {
				fontSize: 20,
				margin: 0,
				marginRight: 40,
				fontWeight: 600,
				padding: '0 15px 0 15px',
				textTransform: 'none',
				'& .MuiTouchRipple-root': {
					display: 'none'
				}
			},
			'& .visiting': {
				color: '#0080B9',
				fontWeight: 'bold'
			}
		}
	},
	footBanner: {
		height: 260,
		marginTop: 200,
		backgroundImage: 'url(/images/beche/banner.jpg)',
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& h4': {
			color: '#fff',
			fontWeight: 700,
			fontSize: 40
		}
	}
})
