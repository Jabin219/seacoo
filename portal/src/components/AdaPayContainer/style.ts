import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	root: {
		'& .MuiGrid-container': {
			'& .btn-ali': {
				height: 45,
				backgroundColor: '#f5f5f5',
				borderRadius: 5,
				boxShadow: 'none',
				'& span': {
					width: '100%',
					height: '100%',
					'& img': {
						width: '43%'
					}
				}
			},
			'& .btn-ali:hover': {
				boxShadow:
					'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
			},
			'& .btn-wechat': {
				height: 45,
				backgroundColor: '#50B749',
				borderRadius: 5,
				boxShadow: 'none',
				'& span': {
					width: '100%',
					height: '100%',
					'& img': {
						width: '50%'
					}
				}
			},
			'& .btn-wechat:hover': {
				boxShadow:
					'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
			},
			'& .btn-back': {
				minWidth: 0,
				height: 45,
				borderRadius: 5,
				'& span': {
					fontSize: 16,
					fontWeight: 600
				}
			}
		}
	},
	backdrop: {
		zIndex: 9,
		color: '#fff'
	}
})
