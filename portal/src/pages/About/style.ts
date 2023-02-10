import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	about: {
		'& .banner': {
			height: 512,
			backgroundImage: 'url(/images/about/about-banner.jpg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			marginBottom: 150,
			'& .overlay': {
				width: '100%',
				height: '100%',
				opacity: 0.5,
				backgroundColor: 'rgba(0,0,0,0.65)',
				position: 'absolute'
			},
			'& h2': {
				color: '#fff',
				fontSize: '58px',
				fontWeight: 700,
				zIndex: 10
			}
		},
		'& .about-body': {
			maxWidth: 1440,
			margin: '0 auto',
			padding: '0 50px 0 50px',
			'& .title-container': {
				zIndex: 9,
				marginBottom: -17,
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				'& .title': {
					backgroundColor: '#fff',
					fontSize: 30,
					fontWeight: 600,
					lineHeight: '37px',
					letterSpacing: '0.36px',
					color: '#0280b9',
					textAlign: 'center'
				}
			},
			'& .brands-container, .mission-container, .industrial-association-container, .fishing-techniques-container': {
				marginBottom: 150,
				borderTop: '1px solid rgba(0,0,0,0.1)',
				position: 'relative',
				'& .MuiGrid-container': {
					padding: '80px 10px 0 10px',
					'& .text': {
						'& p': {
							fontSize: 20,
							letterSpacing: '0.24px',
							lineHeight: '26px',
							textAlign: 'left'
						}
					},
					'& .image': {
						'& img': {
							width: '100%'
						}
					}
				},
				'& .subgrid-container': {
					padding: '0 10px 0 10px'
				}
			}
		}
	}
})
