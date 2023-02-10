import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	main: {
		margin: '0 auto',
		backgroundColor: '#eeeeee',
		minHeight: '100vh'
	},
	container: {
		maxWidth: '1300px',
		margin: '0 auto',
		padding: '0 30px'
	},
	stepper: {
		backgroundColor: '#eeeeee',
		padding: '20px 0'
	},

	card: {
		backgroundColor: '#fff',
		display: 'flex',
		padding: '16px',
		marginTop: '30px',
		color: '#4D4D4E',
		flexDirection: 'column',
		'&:first-child': {
			marginTop: '0'
		},
		'& .header': {
			padding: '12px 12px 18px 12px',
			'& .title': {
				color: '#4D4D4E',
				fontSize: '20px',
				fontWeight: 600,
				letterSpacing: '0.24px'
			}
		},
		'& .content, .checkout': {
			padding: '12px 12px 8px 12px'
		},
		'& .btnField': {
			paddingTop: 18,
			paddingBottom: 0,
			'& button': {
				marginTop: 6,
				marginBottom: 12
			}
		},
		'& .promoCode': {
			paddingTop: 18,
			paddingBottom: 18,
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			'& .input .MuiOutlinedInput-inputMarginDense': {
				paddingTop: 9,
				paddingBottom: 9
			}
		},
		'& .summary': {
			padding: '24px 12px 8px 12px',
			'& .item': {
				marginBottom: 12,
				'&:first-child': {
					marginTop: 0
				}
			},
			'& .rightFloat': {
				textAlign: 'end'
			},
			'& .leftFloat': {
				textAlign: 'end'
			},
			'& .total': {
				fontWeight: 600,
				fontSize: '1.1rem'
			}
		}
	},

	// cart
	cart: {
		'& .empty-cart': {
			paddingTop: '58px',
			paddingBottom: '100px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			'& .caption': {
				marginTop: '28px',
				'& a': {
					color: '#4d4d4e'
				}
			}
		},
		'& .footer': {
			padding: '14px 8px 0 0',
			textAlign: 'end'
		}
	},

	// shipping
	shippingForm: {
		padding: '40px 42px 20px 50px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		'& .MuiFormLabel-root': {
			fontFamily: 'Montserrat'
		},
		'& .MuiFormControl-root': {
			marginBottom: 30,
			'& .MuiFormLabel-asterisk': {
				color: 'red'
			}
		},
		'& .halfWidth': {
			width: '46%'
		}
	},

	shippingButtons: {
		marginTop: 32,
		'& .btn-back, .btn-next': {
			width: '43%',
			padding: 16,
			'& .MuiButton-label': {
				fontWeight: 600
			}
		},
		'& .btn-next': {
			float: 'right'
		}
	},

	// payment
	payment: {
		padding: '34px 34px 20px 40px',
		position: 'relative',
		'& .radioContainer': {
			display: 'flex',
			alignItems: 'center',
			marginTop: 26,
			'&:first-child': {
				marginTop: 0
			},
			'& .logo': {
				marginRight: '5px'
			},
			'& .masterCard': {
				height: '20px',
				objectFit: 'scale-down'
			},
			'& .visa': {
				height: '14px',
				objectFit: 'scale-down'
			},
			'& .alipay': {
				height: '24px',
				objectFit: 'scale-down'
			},
			'& .wechat': {
				height: '24px',
				objectFit: 'scale-down'
			}
		}
	},
	confirmation: {
		padding: '10px 19% 80px 19%',
		'& .header': {
			padding: '4px 12px 14px 12px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		'& .box': {
			padding: 30,
			textAlign: 'center',
			'& .title': {
				fontWeight: '600',
				fontSize: 46
			},
			'& .image': {
				width: 81,
				objectFit: 'scale-down',
				marginBottom: 24
			}
		},
		'& .content': {
			padding: '12px 12px 18px 12px',
			'& .listItem': {
				display: 'flex'
			}
		},
		'& .subtitle': {
			fontWeight: '600'
		}
	},
	productCard: {
		padding: '12px 12px 18px 12px',
		color: '#4D4D4E',
		display: 'flex',

		'& .itemImage': {
			'& .coverImg': {
				width: '100%',
				objectFit: 'scale-down'
			}
		},
		'& .coverImg': {
			width: '100%',
			objectFit: 'fill',
			flexShrink: '1'
		},
		'& .column': {
			flexDirection: 'column',
			flexWrap: 'nowrap',
			'& .nameField': {
				flexGrow: 1,
				'& .productName': {
					fontSize: '0.875rem'
				}
			}
		},
		'& .infoBox': {
			display: 'flex',
			flexWrap: 'wrap',
			alignContent: 'space-between',
			flexGrow: '1',
			paddingLeft: 10,
			paddingRight: 10,
			'& .bold': {
				fontWeight: 600
			},
			'& .nameField': {
				width: '100%',
				display: 'flex',
				flexDirection: 'column'
			},
			'& .productName': {
				width: '100%',
				fontWeight: 500,
				fontSize: '1.1rem',
				fontFamily: 'Montserrat'
			},
			'& .subName': {
				width: '100%',
				color: 'rgba(0,0,0,0.5)',
				fontSize: '0.875rem',
				fontFamily: 'Montserrat'
			},
			'& .price': {
				flexGrow: '1',
				fontFamily: 'Montserrat'
			},
			'& .subtotal': {
				display: 'flex',
				alignItems: 'flex-end',
				fontFamily: 'Montserrat'
			},
			'& .quantityField': {
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				'& .quantity': {
					paddingLeft: 14,
					paddingRight: 14
				},
				'& .deleteIcon': {
					marginLeft: 4
				}
			}
		}
	},
	root: {
		display: 'flex',
		alignItems: 'center'
	},
	wrapper: {
		margin: '24px 0 10px 0',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	back: {
		marginRight: 26
	},
	button: {
		width: '38%',
		backgroundColor: '#0080B9',
		padding: '10px 20px',
		color: '#fff'
	},
	buttonProgress: {
		color: '#0080B9',
		position: 'absolute',
		top: '50%',
		right: '5%',
		marginTop: -13,
		marginLeft: -12
	}
})
