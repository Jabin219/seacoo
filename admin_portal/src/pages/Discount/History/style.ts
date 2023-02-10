import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	paper: {
		backgroundColor: '#eee',
		border: 'none',
		'& .MuiTableCell-head': {
			fontWeight: 600,
			backgroundColor: '#f5f5f5'
		},
		'& .MuiTableBody-root': {
			'& .comment': { color: 'rgba(0,0,0,0.87)' },
			'& .btn-delete': { color: '#FF453A', cursor: 'pointer' },
			'& .btn-view': { color: '#2196F3', cursor: 'pointer' }
		},
		'& .MuiTable-root': {
			width: '70%',
			minWidth: 880,
			margin: '0 auto',
			backgroundColor: '#fff'
		}
	}
})
