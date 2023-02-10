import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	footer: {
		width: '100%',
		backgroundColor: '#3c3d41',
		'& a': {
			textDecoration: 'none'
		},
		'& .container': {
			padding: '30px 0',
			'& .footer-logo, .footer-list': {
				borderRight: '1px solid #979797'
			},
			'& .footer-logo': {
				display: 'flex',
				position: 'relative',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				'& img': {
					display: 'block',
					width: '40%'
				},
				'& p': {
					color: '#7a7a7a',
					display: 'block',
					textAlign: 'center',
					fontSize: '14px',
					lineHeight: '20px'
				}
			},
			'& .footer-list': {
				padding: '10px 0 0 60px',
				'& span,h4': {
					color: '#f1f1f1',
					lineHeight: '34px',
					fontFamily: 'Montserrat'
				},
				'& h4': {
					fontSize: 20,
					fontWeight: 600
				},
				'& span': {
					fontSize: 14,
					cursor: 'pointer'
				}
			},
			'& .footer-contact': {
				marginLeft: 30,
				marginTop: 10,
				padding: '8px 0',
				'& .title': {
					fontSize: 20,
					color: '#ffffff',
					fontWeight: 'bold',
					fontFamily: 'Montserrat'
				},
				'& p': {
					fontSize: 14,
					color: '#f1f1f1',
					lineHeight: '34px'
				},
				'& .icons': {
					marginTop: 15,
					'& svg': {
						marginRight: 30
					}
				}
			}
		}
	}
})
