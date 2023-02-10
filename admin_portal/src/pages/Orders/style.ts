import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(() => ({
	root: {
		'& .search-bar': {
			height: 60,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& .MuiGrid-item': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			},
			'& .order-filter': {
				height: 30,
				'& .reset-container': {
					marginRight: 20,
					'& .reset': {
						cursor: 'pointer',
						color: '#2196F3',
						fontSize: 13,
						fontWeight: 600,
						whiteSpace: 'nowrap',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}
				},
				'& .picker-container': {
					marginRight: 20,
					'& .MuiFormControl-root': {
						margin: 0,
						width: '100%',
						height: '100%',

						'& .MuiInputBase-root': {
							margin: 0,
							height: '100%'
						},
						'& .MuiInputBase-input': {
							color: 'rgba(0,0,0,0.54)'
						}
					}
				},
				'& .select-container': {
					marginRight: 20,
					'& .MuiFormControl-root': {
						width: '100%',
						height: '100%',
						'& .MuiFormLabel-root': {
							fontSize: 14,
							transform: 'translate(0, 10px) scale(1)'
						},
						'& .MuiInputBase-root': {
							margin: 0,
							height: '100%'
						}
					}
				},
				'& .date-picker': {
					'& label': {
						display: 'none'
					}
				}
			},
			'& .order-search': {
				'& .search': {
					height: 36,
					backgroundColor: '#fff',
					'& .MuiInputBase-root': {
						height: '100%'
					}
				}
			}
		}
	},

	paper: {
		maxWidth: 1200,
		minWidth: 1200,
		minHeight: 520,
		height: 520,
		display: 'flex',
		alignItems: 'center',
		padding: '50px 0'
	}
}))
