import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	productDetail: {
		margin: '0 auto',
		marginTop: 50,
		marginBottom: 100,
		maxWidth: 1440,
		'& a': {
			textDecoration: 'none',
			color: '#4d4d4e'
		}
	},
	productDetailHeader: {
		padding: '0 30px',
		marginBottom: 50,
		'& a': {
			color: '#4D4D4E'
		}
	},
	productDetailInfo: {
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
				},
				'& video': {
					width: '100%',
					height: '100%',
					objectFit: 'fill'
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
			'& .product-ship, .product-ship-info, .product-options, .product-quantity, .more-info': {
				color: '#4d4d4e',
				fontSize: 14,
				fontWeight: 600,
				letterSpacing: '0.17px',
				lineHeight: '18px',
				marginBottom: 10
			},
			'& .product-ship-info': {
				fontWeight: 500,
				marginBottom: 0
			},
			'& .out-of-stock': {
				fontSize: 23,
				color: '#E02020',
				fontWeight: 600,
				letterSpacing: 0.17,
				lineHeight: '18px',
				marginTop: 70
			},
			'& .more-info': {
				fontWeight: 500,
				textDecoration: 'underline',
				marginBottom: 20
			},
			'& .product-options-info': {
				marginBottom: 20,
				'& button': {
					width: '100%',
					marginBottom: 5
				}
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
		marginTop: 50,
		padding: '0 30px',
		'& .body2-header': {
			marginBottom: 80,
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
				'& .visited': {
					color: '#0080B9',
					fontWeight: 'bold'
				}
			}
		},
		'& .btn-learn-more': {
			display: 'block',
			fontSize: 16,
			fontWeight: 'bold',
			letterSpacing: '0.19px',
			minWidth: 0,
			padding: '17px 83px 17px 83px',
			margin: '0 auto',
			marginTop: 80,
			textTransform: 'none',
			'& span': {
				color: '#0080B9',
				textAlign: 'center'
			},
			'& .MuiTouchRipple-root': {
				display: 'none'
			}
		}
	},

	moreProducts: {
		marginTop: 100,
		'& .title': {
			padding: '0 30px',
			marginBottom: 10,
			'& h5': {
				fontSize: 20,
				fontWeight: 700,
				letterSpacing: '0.24px'
			}
		},
		'& .more-products': {
			borderTop: '1px solid rgba(0,0,0,0.1)',
			width: '100%',
			margin: 0,
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
					display: 'block',
					fontSize: 20,
					fontWeight: 'bold',
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
