import React, { useState, useEffect } from 'react'
import {
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	Paper,
	Grid
} from '@material-ui/core'
import { useStyles } from './style'
import useMails from 'hooks/mails'
import moment from 'moment'

const MailBox = () => {
	const classes = useStyles()
	const { mails, getMails } = useMails()
	const [selectedMailIndex, setSelectedMailIndex] = useState<number>(0)
	useEffect(() => {
		getMails()
		// eslint-disable-next-line
	}, [])

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={3} className='mail-list-container'>
					<List className={classes.mailList}>
						{mails &&
							mails.map((mail, index) => (
								<div key={mail.id}>
									<ListItem
										alignItems='flex-start'
										className={
											mail.id === mails[selectedMailIndex].id
												? 'selected'
												: 'unselected'
										}
										onClick={() => {
											setSelectedMailIndex(index)
										}}
									>
										<ListItemText>
											<Typography className='time'>
												{moment(mail.createdAt).format('YYYY-MM-DD hh:mm:ss')}
											</Typography>
											<Typography variant='h2'>Web Contact Form</Typography>
											<Typography
												style={{
													color: 'rgba(0,0,0,0.54',
													wordBreak: 'break-word'
												}}
											>
												{mail.content.slice(0, 100)}
											</Typography>
										</ListItemText>
									</ListItem>
									<Divider variant='middle' />
								</div>
							))}
					</List>
				</Grid>
				<Grid item xs className='mail-content-container'>
					<div className={classes.mailContent}>
						{mails && (
							<Paper className='content-container'>
								<Typography variant='h2'>New Message</Typography>
								<Typography variant='h4'>Name: </Typography>
								<Typography>{mails[selectedMailIndex].name}</Typography>
								<Typography variant='h4'>Email: </Typography>
								<Typography>{mails[selectedMailIndex].email}</Typography>
								<Typography variant='h4'>Content: </Typography>
								<Typography>{mails[selectedMailIndex].content}</Typography>
							</Paper>
						)}
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default MailBox
