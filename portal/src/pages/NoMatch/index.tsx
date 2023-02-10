import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Typography, Button } from '@material-ui/core'
import { useStyles } from './style'

const NoMatch = () => {
	const classes = useStyles()

	return (
		<div className={classes.errorPage}>
			<div className='error'>
				<Typography
					style={{ fontSize: 80, fontWeight: 'bold', color: '#4d4d4e' }}
				>
					404 <span style={{ fontSize: 20 }}>error</span>
				</Typography>

				<Typography style={{ fontSize: 14, marginBottom: 30 }}>
					Sorry, the page you were looking for does not exist
				</Typography>
				<HashLink to='/#' style={{ textDecoration: 'none' }}>
					<Button
						variant='contained'
						color='primary'
						style={{ padding: '15px 20px' }}
					>
						Back to Home
					</Button>
				</HashLink>
			</div>
		</div>
	)
}

export default NoMatch
