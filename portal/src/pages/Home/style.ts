import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	home: {
		'& a': {
			color: '#0080B9',
			fontSize: 14,
			fontWeight: 600,
			letterSpacing: '0.17px',
			textDecoration: 'none'
		},
		'& h6': {
			lineHeight: '25px'
		},
		'& .btn-shop': {
			textTransform: 'none',
			borderRadius: 30,
			padding: '5px 40px 5px 40px'
		},
		backgroundColor: '#eeeeef',
		'& .home-products': {
			maxWidth: 1172,
			margin: '0 auto'
		},

		'& .product-beche1': {
			backgroundColor: '#fff',
			marginTop: 40,
			borderRadius: 10,
			'& .MuiGrid-container': {
				height: '100%',
				paddingTop: 20
			},
			'& .product-left': {
				paddingTop: 75,
				paddingLeft: 120,
				'& .product-name': {
					fontSize: 20,
					fontWeight: 600,
					marginBottom: 25
				},
				'& .product-description': {
					fontSize: 14,
					marginBottom: 60
				}
			},
			'& .product-beche1-right': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'& img': {
					width: '100%'
				}
			}
		},
		'& .product-seaCucumber-bag': {
			marginTop: 30,
			'& .MuiGrid-container': {
				height: '100%',
				'& .product-left, .product-right': {
					backgroundColor: '#fff',
					height: '100%',
					borderRadius: 10,
					position: 'relative',
					'& .text': {
						'& .product-name': {
							marginBottom: 10,
							'& h6': {
								fontSize: 20,
								fontWeight: 600
							},
							'& p': {
								fontFamily: 'Montserrat',
								fontSize: 14
							}
						},
						'& .product-description': {
							fontSize: 14,
							marginBottom: 20
						},
						'& .buttons': {
							width: 116,
							'& button': { marginBottom: 15 },
							'& a': {
								display: 'block',
								textAlign: 'center'
							}
						}
					},
					'& .overlay': {
						display: 'block',
						position: 'absolute',
						width: 230,
						height: 300,
						right: 10,
						top: 90
					}
				},
				'& .product-left': {
					backgroundImage: 'url(/images/home/product2.png)',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat'
				},
				'& .product-right': {
					backgroundImage: 'url(/images/home/product3.png)',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat'
				}
			}
		},
		'& .product-beche2': {
			backgroundColor: '#fff',
			marginTop: 30,
			borderRadius: 10,
			marginBottom: 30,
			'& .product-beche2-left': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				'& img': {
					display: 'block',
					width: '65%',
					margin: '0 auto'
				}
			},
			'& .product-right': {
				padding: 90,
				'& .product-name': {
					fontSize: 20,
					fontWeight: 600,
					marginBottom: 25
				},
				'& .product-description': {
					fontSize: 14,
					marginBottom: 75
				}
			}
		},
		'& .home-contact': {
			backgroundColor: '#fff',
			marginTop: 37,
			borderRadius: 10,
			marginBottom: 30,
			'& .MuiGrid-container': {
				padding: '50px 211px 50px 56px',
				'& .home-contact-left': {
					marginRight: 95
				},
				'& .home-contact-right': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					'& h5': {
						fontSize: 20,
						fontWeight: 600,
						letterSpacing: 0.24,
						lineHeight: '24px',
						marginBottom: 14
					},
					'& p': {
						fontSize: 14,
						letterSpacing: 0.17,
						lineHeight: '18px'
					},
					'& .text': {
						marginBottom: 14
					},
					'& a': {
						color: '#0080B9',
						textDecoration: 'underline',
						fontWeight: 400
					}
				}
			}
		},
		'& .home-blogs': {
			maxWidth: 1440,
			margin: '0 auto',
			marginTop: 150,
			'& .blogs-header': {
				backgroundColor: '#0080b9',
				height: '100%',
				borderRadius: 5,
				margin: '0 20px',
				'& .text-container': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '30px 20px 0 20px',
					'& p, h6': {
						color: '#fff',
						marginBottom: 30,
						textAlign: 'center'
					},
					'& p': {
						fontSize: 12,
						textAlign: 'center'
					},
					'& button': {
						marginTop: 20,
						borderRadius: 30,
						fontWeight: 600,
						padding: '10px 30px 10px 30px',
						borderColor: '#fff',
						'& span': {
							color: '#fff',
							textDecoration: 'none'
						}
					}
				}
			},
			'& .home-blog-card': {
				backgroundColor: '#fff',
				marginRight: 20,
				borderRadius: 5,
				'& .blog-img': {
					display: 'block',
					height: 250,
					'& img': {
						width: '100%',
						height: '100%'
					}
				},
				'& .blog-info': {
					padding: '20px 20px 20px 20px',
					'& a': {
						color: '#4d4d4e',
						display: 'block',
						textDecoration: 'none',
						fontSize: 14,
						fontWeight: 600,
						marginBottom: 10
					},
					'& p': {
						color: '#7a7a7a',
						fontSize: 12.6
					}
				}
			}
		},
		'& .home-about-container': {
			marginTop: 50,
			backgroundImage: 'url(/images/home/video-background.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			height: 557,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& .home-about': {
				backgroundColor: '#fff',
				maxWidth: 1170,
				borderRadius: 10,
				'& .MuiGrid-container': {
					padding: '40px 70px 40px 30px'
				},
				'& video': {
					width: '100%',
					height: '100%'
				},
				'& .home-about-info': {
					'& h6': {
						fontSize: 20,
						fontWeight: 600,
						marginBottom: 20
					},
					'& p': {
						fontSize: 14,
						marginBottom: 20
					},
					'& a': {
						textDecoration: 'none'
					},
					'& button': {
						borderRadius: 30,
						marginTop: 50,
						fontSize: 14,
						fontWeight: 500,
						padding: '5px 40px 5px 40px',
						textTransform: 'none',
						'& span': {
							color: '#0080b9'
						}
					}
				}
			}
		}
	}
})
