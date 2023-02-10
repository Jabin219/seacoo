import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
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
				},
				'& p': {
					fontSize: 14
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
				fontSize: 16
			}
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
			width: 220,
			height: 160,
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
				fontSize: '1.1rem'
			},
			'& .subName': {
				width: '100%',
				color: 'rgba(0,0,0,0.5)',
				fontSize: '0.875rem'
			},
			'& .price': {
				flexGrow: '1'
			},
			'& .subtotal': {
				display: 'flex',
				alignItems: 'flex-end'
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
	}
})
