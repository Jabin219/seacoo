import { Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'

export default function FooterBeche() {
	const classes = useStyles()
	return (
		<div className={classes.footer}>
			<div className='first-layer'>
				<Typography variant='body2'>
					COPYRIGHT © 2018 BÊCHE – ALL RIGHTS RESERVED.
				</Typography>
			</div>
			<div className='second-layer'>
				<Typography variant='body2'>
					<span>
						<a href='https://beche.ca/#order'>Order Now</a>
					</span>
					<span>
						<a href='https://beche.ca/privacy-policy/'>Privacy Policy</a>
					</span>
				</Typography>
			</div>
			<div className='third-layer'></div>
		</div>
	)
}
