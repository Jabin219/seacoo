import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	contact: {
		'& .banner': {
			marginBottom: 50,
			height: 600,
			minWidth: '100%',
			background: 'url(/images/contact/westcoastcompany.jpg)',
			backgroundSize: '100%',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
			backgroundCover: 'cover',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			'& .overlay': {
				height: '100%',
				width: '100%',
				backgroundColor: '#02122d',
				opacity: 0.57
			},
			'& .container': {
				position: 'absolute',
				'& .title': {
					color: '#ffffff',
					fontSize: '80px',
					fontWeight: 900,
					letterSpacing: '1px',
					textAlign: 'center',
					marginBottom: 20
				},
				'& .info': {
					color: '#ffffff',
					fontSize: '21px',
					textAlign: 'center',
					marginTop: 20
				},
				'& .border-dot': {
					width: 66,
					borderTop: '5px dotted rgba(255,255,255,0.5)',
					margin: '0 auto'
				}
			}
		},

		'& .contact-body': {
			marginBottom: 80,
			maxWidth: 1100,
			margin: '0 auto',
			'& .MuiGrid-container': {
				margin: '0 auto'
			},
			'& .left': {
				'& .container-left': {
					right: 0,
					'& .title': {
						color: '#333',
						fontSize: 48,
						fontWeight: 600,
						marginBottom: 40
					},
					'& .MuiTextField-root': {
						width: '100%',
						marginBottom: 20
					},
					'& .sendButton': {
						marginTop: 15,
						backgroundColor: '#000',
						width: '100%',
						fontSize: 14,
						fontWeight: 600
					}
				}
			},
			'& .right': {
				'& .container-right': {
					textAlign: 'center',
					backgroundColor: '#fff',
					'& img': {
						display: 'block',
						margin: '0 auto',
						opacity: 1,
						width: '100%'
					},
					'& p': {
						color: '#000',
						fontSize: '14px',
						fontWeight: 600,
						fontFamily: 'Montserrat'
					}
				}
			}
		}
	}
})
