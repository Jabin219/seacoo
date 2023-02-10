import React, { useState } from 'react'

import { Grid, Paper, Tabs, Tab, Typography } from '@material-ui/core'
import { Iso } from '@material-ui/icons'

import Percentage from './Percentage'
import History from './History'
import { useStyles } from './style'

const Discount = () => {
	const classes = useStyles()
	const [tabValue, setTabValue] = useState('生成折扣码')
	const [discountType, setDiscountType] = useState('')

	return (
		<div className={classes.root}>
			<div className='tabs-container'>
				<Tabs value={tabValue} indicatorColor='primary'>
					<Tab
						label='生成折扣码'
						value='生成折扣码'
						className={tabValue === '生成折扣码' ? 'selected' : ''}
						onClick={() => {
							setTabValue('生成折扣码')
							setDiscountType('')
						}}
					/>
					<Tab
						label='折扣记录'
						value='折扣记录'
						className={tabValue === '折扣记录' ? 'selected' : ''}
						onClick={() => {
							setTabValue('折扣记录')
							setDiscountType('')
						}}
					/>
				</Tabs>
			</div>
			{!discountType && tabValue === '生成折扣码' && (
				<div className='paper-container'>
					<Grid container spacing={5}>
						<Grid item>
							<Paper
								elevation={0}
								onClick={() => {
									setDiscountType('percentage')
								}}
							>
								<Iso style={{ fontSize: 40 }} />
								<Typography>比例折扣码</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			)}
			{!discountType && tabValue === '折扣记录' && <History />}
			{discountType === 'percentage' && tabValue === '生成折扣码' && (
				<Percentage setDiscountType={setDiscountType} />
			)}
		</div>
	)
}

export default Discount
