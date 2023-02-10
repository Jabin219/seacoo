import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	blog: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 100,
		marginTop: 70,
		padding: '0 30px',
		'& a': {
			textDecoration: 'none'
		},
		'& .card': {
			borderBottom: '1px solid #d1d1d1',
			maxWidth: 1120,
			'& .MuiGrid-container': {
				padding: '20px 0',
				alignItems: 'center',
				'& .img': {
					'& img': {
						width: '100%',
						height: 200,
						objectFit: 'cover',
						objectPosition: 'top center'
					}
				},
				'& .content': {
					marginLeft: 30,
					'& .blog-date': {
						color: '#929292',
						fontStyle: 'italic',
						fontSize: 13,
						marginBottom: 5
					},
					'& .blog-title': {
						display: 'block',
						color: '#555',
						lineHeight: '26px',
						fontSize: '22px',
						fontWeight: 500,
						marginTop: 5,
						marginBottom: 10
					},
					'& .blog-short-content': {
						color: '#929292',
						fontSize: 14,
						marginBottom: 10
					},
					'& button': {
						backgroundColor: '#555',
						opacity: 1,
						borderRadius: 0,
						color: 'rgba(256,256,256,1)',
						minWidth: 0,
						lineHeight: 1.5,
						'& .MuiButton-label': {
							padding: '5px 15px'
						}
					}
				}
			}
		}
	}
})
