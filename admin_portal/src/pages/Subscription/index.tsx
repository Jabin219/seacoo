import React, { useEffect } from 'react'
import { useStyles } from './style'
import { Paper, Typography } from '@material-ui/core'
import { CSVLink } from 'react-csv'
import useSubscriptions from '../../hooks/subscriptions'

const Subscription = () => {
	const classes = useStyles()
	const { subscribeEmails, getSubscriptionEmails } = useSubscriptions()
	useEffect(() => {
		getSubscriptionEmails()
		// eslint-disable-next-line
	}, [])
	return (
		<Paper className={classes.root}>
			{subscribeEmails ? (
				<CSVLink
					data={subscribeEmails}
					filename={'subscription-emails.csv'}
					target='_blank'
				>
					点击导出并下载订阅邮箱表格
				</CSVLink>
			) : (
				<Typography>暂无订阅邮箱</Typography>
			)}
		</Paper>
	)
}

export default Subscription
