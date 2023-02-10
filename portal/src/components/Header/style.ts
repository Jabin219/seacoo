import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	header: {
		backgroundColor: '#fff',
		borderBottom: '1px solid #f1f1f1',
		height: 80,
		boxShadow: 'none',
		'& a': {
			textDecoration: 'none',
			color: '#000'
		},
		'& .header-container': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			margin: '0 40px',
			height: '100%',
			'& .logo': {
				cursor: 'pointer',
				'& img': {
					display: 'block',
					width: 120,
					height: 85
				}
			},
			'& .nav': {
				'& .MuiTouchRipple-root': {
					display: 'none'
				},
				'& button': {
					opacity: 1,
					padding: '0 20px 0 20px',
					minWidth: 0,
					'& span': {
						color: '#333333',
						fontSize: 14,
						fontWeight: 'bold',
						letterSpacing: '0.14px'
					}
				},
				'& button:hover': {
					'& span': {
						color: '#4a90e2'
					}
				},
				'& .visited': {
					'& span': {
						color: '#4a90e2'
					}
				},
				'& .gift-card-portal': {
					'& span': {
						color: '#F80000'
					}
				},
				'& .gift-card-portal:hover': {
					'& span': {
						color: '#F80000'
					}
				}
			},
			'& .icons': {
				display: 'flex',
				'& .shoppingCart': {
					marginRight: 20,
					'& .cartBadge': {
						'& .MuiBadge-badge': {
							color: '#fff',
							backgroundColor: 'rgb(220, 0, 78);'
						}
					}
				},
				'& svg:hover': {
					cursor: 'pointer'
				}
			}
		}
	}
})
