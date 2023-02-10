import { makeStyles } from '@material-ui/core'
export const useStyles = makeStyles({
	root: {
		'& .MuiFormControl-root': {
			'& .MuiInputBase-root': {
				height: '100%'
			},
			'& .MuiInputLabel-outlined': {
				transform: 'translate(14px, 13px) scale(1)'
			}
		}
	}
})
