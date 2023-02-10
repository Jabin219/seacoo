import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'

const StatisticSection = () => {
	return (
		<Paper
			variant='outlined'
			style={{
				width: '35%',
				height: '100%',
				borderColor: 'white'
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					padding: '14px 20px 0px 25px'
				}}
			>
				<Typography variant='subtitle2' style={{ color: '#000' }}>
					日浏览量
				</Typography>
				<Typography
					variant='button'
					to='/statistics/#'
					component={HashLink}
					color='primary'
				>
					查看全部
				</Typography>
			</div>
		</Paper>
	)
}

export default StatisticSection
