import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	banner: {
		height: 542,
		width: '100%',
		backgroundImage: 'url(/images/eastcoast/eastcoast-banner.jpg)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& img': {
			marginBottom: 30,
			width: '8%'
		},
		'& h2': {
			fontFamily: 'Montserrat',
			fontWeight: 500,
			fontSize: 80,
			color: '#fff',
			marginBottom: 20
		},
		'& h4': {
			fontSize: 40,
			color: '#fff'
		}
	},
	introPortal: {
		height: 500,
		backgroundColor: '#E6E6E6',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		'& .portal-container': {
			height: '85%',
			width: '75%',
			margin: '0 auto',
			'& .history-portal': {
				backgroundImage: 'url(/images/eastcoast/industryHistory.jpg)'
			},
			'& .biology-portal': {
				backgroundImage: 'url(/images/eastcoast/seaCucumberBiology.jpg)'
			},
			'& .nutrition-value-portal': {
				backgroundImage: 'url(/images/eastcoast/nutritionValue.jpg)'
			},
			'& .history-portal, .biology-portal, .nutrition-value-portal': {
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				marginRight: '3%',
				'& a': {
					textDecoration: 'none',
					'& h4': {
						textAlign: 'center',
						color: '#fff',
						fontSize: 27,
						cursor: 'pointer'
					}
				},

				'& div': {
					height: '50%'
				},
				'& .title': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center'
				},
				'& .shadow': {
					width: '100%',
					margin: '0 auto',
					backgroundColor: 'rgba(0,0,0,0.51)',
					'& p': {
						padding: 30,
						paddingTop: 15,
						color: '#fff',
						'& a': {
							textDecoration: 'none',
							color: '#0080b9'
						}
					}
				}
			}
		}
	},
	process: {
		'& h2': {
			fontSize: 30,
			margin: 50,
			textAlign: 'center',
			fontWeight: 'bold'
		},
		'& .MuiGrid-container': {
			width: '80%',
			margin: '0 auto',
			marginBottom: 80,
			'& img': {
				width: '100%'
			},

			'& h6': {
				marginTop: 5,
				textAlign: 'center',
				fontSize: 14
			}
		}
	},
	advantages: {
		height: 600,
		backgroundColor: '#E6E6E6',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		'& .banner': {
			width: '100%',
			height: '85%',
			backgroundImage: 'url(/images/eastcoast/seaCucumberBanner.jpg)',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			position: 'relative',
			'& .shadow': {
				width: '45%',
				height: '90%',
				backgroundColor: 'rgba(0,0,0,0.51)',
				position: 'absolute',
				right: '5%',
				top: '5%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				'& .text-content': {
					padding: '0 20%'
				},
				'& h6': {
					color: '#fff',
					fontSize: 17,
					fontWeight: 'bold',
					marginTop: '10px'
				},
				'& p': {
					color: '#fff',
					fontSize: 13
				}
			}
		}
	},
	gallery: {
		backgroundColor: '#E6E6E6',
		paddingBottom: 100,
		'& h2': {
			color: '#4d4d4e',
			fontSize: '30px',
			textAlign: 'center',
			marginBottom: 30
		},
		'& .MuiGrid-container': {
			width: '80%',
			margin: '0 auto',
			'& .MuiGrid-item': {
				paddingTop: 0,
				paddingBottom: 0
			},
			'& img': {
				width: '100%',
				height: '100%'
			}
		}
	},
	recommendProducts: {
		marginTop: 25,
		marginBottom: 50,
		maxWidth: 1440,
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
					fontSize: 20,
					color: '#0080B9',
					fontWeight: 'bold',
					display: 'block'
				}
			}
		}
	}
})
