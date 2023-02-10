import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		width: '90%',
		margin: '0 auto',
		'& .MuiBreadcrumbs-root': {
			marginBottom: 40,
			'& p': {
				fontSize: 14,
				letterSpacing: '0.13px',
				lineHeight: '24px'
			}
		},
		'& .form': {
			width: 600,
			height: 600,
			backgroundColor: '#fff',
			margin: '0 auto',
			padding: 20,
			'& .form-container': {
				padding: '18px 40px 0 24px',
				'& h5': {
					color: '#4d4d4e',
					fontSize: 16,
					fontWeight: 600,
					letterSpacing: '0.19px',
					lineHeight: '22px',
					textAlign: 'left',
					marginBottom: 50
				},
				'& p': {
					fontSize: 16,
					color: '#4d4d4e',
					letterSpacing: '0.19px',
					lineHeight: '22px'
				},
				'& .Mui-error': {
					color: '#f44336'
				},
				'& .MuiGrid-container': {
					'& .MuiGrid-item': {
						display: 'flex',
						alignItems: 'center',
						marginBottom: 35
					}
				},
				'& .expire-date': {
					'& .MuiFormControl-marginNormal': {
						'& .MuiPaper-rounded': {
							marginTop: 30
						}
					}
				},
				'& .submit': {
					float: 'right',
					backgroundColor: '#E0E0E0',
					padding: '5px 15px',
					'& span': {
						fontWeight: 'bold'
					}
				}
			}
		}
	}
})
