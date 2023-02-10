import React, { useState } from 'react'
import { useStyles } from './style'
import { Tab, Tabs } from '@material-ui/core'
import BecheFeatures from './BecheFeatures'
import BecheNutrients from './BecheNutrients'
import BecheDirection from './BecheDirection'

const BecheDifferentParts = () => {
	const classes = useStyles()
	const [descBody, setDescBody] = useState('features')
	return (
		<div className={classes.productDetailDescription}>
			<div className={classes.tabs}>
				<Tabs value={descBody} indicatorColor='primary'>
					<Tab
						label='Features'
						value='features'
						className={descBody === 'features' ? 'visiting' : ''}
						onClick={() => {
							setDescBody('features')
						}}
					/>
					<Tab
						label='Direction'
						value='direction'
						className={descBody === 'direction' ? 'visiting' : ''}
						onClick={() => {
							setDescBody('direction')
						}}
					/>
					<Tab
						label='Nutrients'
						value='nutrients'
						className={descBody === 'nutrients' ? 'visiting' : ''}
						onClick={() => {
							setDescBody('nutrients')
						}}
					/>
				</Tabs>
			</div>
			{descBody === 'features' && <BecheFeatures />}
			{descBody === 'direction' && <BecheDirection />}
			{descBody === 'nutrients' && <BecheNutrients />}
			<div className='logo'>
				<img src='/images/products/beche/beche-logo.png' alt='' />
			</div>
		</div>
	)
}
export default BecheDifferentParts
