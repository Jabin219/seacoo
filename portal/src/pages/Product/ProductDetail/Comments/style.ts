import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	productDetailReview: {
		marginTop: 20,
		width: '90%',
		margin: '0 auto',
		'& .review-title': {
			'& h2': {
				fontSize: 20,
				fontWeight: 700,
				color: '#333',
				margin: '0 0 30px'
			}
		},
		'& .review-card': {
			border: '1px solid #e4e1e3',
			marginBottom: 25,
			'& .review-card-content': {
				padding: 20,
				'& .review-card-header': {
					fontSize: 12,
					marginBottom: 20,
					color: '#777777',
					'& .review-stars': {
						float: 'right'
					},
					'& .review-user-id': {
						fontWeight: 700
					}
				},
				'& .review-card-text': {
					fontSize: 16,
					color: '#929292'
				}
			}
		},
		'& .add-review': {
			'& .MuiTypography-body1': { color: '#929292' },
			'& .add-review-stars': {
				'& span': {
					cursor: 'pointer'
				}
			},
			'& .MuiFormControl-root': {
				'& span': {
					color: 'red'
				}
			},
			'& button': {
				height: 56,
				width: '70%',
				'& span': {
					fontWeight: 'bold',
					fontSize: 20,
					letterSpacing: '0.24px'
				}
			}
		}
	}
})
