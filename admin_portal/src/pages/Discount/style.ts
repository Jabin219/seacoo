import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		'& .tabs-container': {
			marginBottom: 30,
			'& .MuiTabs-flexContainer': {
				backgroundColor: '#fff',
				width: '90%',
				margin: '0 auto',
				marginTop: 36,
				'& span': {
					color: '#000',
					fontFamily: 'Roboto',
					fontWeight: 500,
					letterSpacing: '0.3px',
					lineHeight: '24px',
					textAlign: 'center'
				},
				'& .selected': {
					'& span': {
						color: '#2196F3'
					}
				},
				'& button': {
					'& .MuiTouchRipple-root': {
						display: 'none'
					}
				}
			}
		},
		'& .paper-container': {
			width: '90%',
			height: 250,
			margin: '0 auto',
			'& .MuiGrid-container': {
				height: '100%',
				'& .MuiGrid-item': {
					width: 250,
					'& .MuiPaper-root': {
						height: '100%',
						backgroundColor: '#fff',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						'& svg': {
							marginBottom: 25
						}
					}
				}
			}
		}
	}
})
