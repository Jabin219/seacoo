import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import { textLight } from 'MuiTheme'
import moment from 'moment'
import { Mail } from 'models'

const useStyles = makeStyles(() =>
	createStyles({
		text: {
			fontSize: 12,
			lineHeight: '10px',
			letterSpacing: '1px',
			color: textLight
		}
	})
)

interface Props {
	mails: Mail[] | undefined
}

const MailSection = ({ mails }: Props) => {
	const styles = useStyles()
	return (
		<Paper
			variant='outlined'
			style={{
				width: '26%',
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
					站内信息
				</Typography>
				<Typography
					variant='button'
					to='/mailbox'
					component={HashLink}
					color='primary'
				>
					查看全部
				</Typography>
			</div>
			<div>
				<List style={{ height: 230, overflow: 'auto' }}>
					{mails &&
						mails.map((mail, index) => {
							return (
								<ListItem
									key={index}
									button
									dense
									divider
									alignItems='flex-start'
									component={HashLink}
									to='/mailbox/#'
								>
									<ListItemText
										classes={{ primary: styles.text }}
										primary={
											<React.Fragment>
												{moment(mail.createdAt).format('YYYY-MM-DD hh:mm:ss')}
												<Typography variant='h2' color='textPrimary'>
													{'New Contact Message'}
												</Typography>
											</React.Fragment>
										}
										secondary={
											<Typography
												variant='body1'
												color='textPrimary'
												style={{ wordBreak: 'break-word' }}
											>
												{mail.content.slice(0, 100)}
											</Typography>
										}
									/>
								</ListItem>
							)
						})}
				</List>
			</div>
		</Paper>
	)
}

export default MailSection
