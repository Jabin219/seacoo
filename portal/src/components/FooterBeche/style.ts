import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	footer: {
		'& .first-layer': {
			height: 82,
			backgroundColor: '#000',
			display: 'flex',
			alignItems: 'center',
			'& .MuiTypography-body2': {
				width: '80%',
				maxWidth: 1024,
				margin: '0 auto',
				fontSize: 14,
				color: '#666'
			}
		},
		'& .second-layer': {
			height: 54,
			backgroundColor: '#222',
			display: 'flex',
			alignItems: 'center',
			'& .MuiTypography-body2': {
				width: '80%',
				maxWidth: 1024,
				margin: '0 auto',
				'& span': {
					marginRight: 20,
					'& a': {
						fontSize: 12,
						textDecoration: 'none',
						color: '#bbb'
					}
				}
			}
		},
		'& .third-layer': {
			background: 'transparent',
			backgroundColor: '#2d2d2d',
			padding: '15px 0 5px'
		}
	}
})
