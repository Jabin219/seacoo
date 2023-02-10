import React, { useState, useContext } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { Message } from 'models/index'
import { sendMessage } from 'api/index'
import MetaTags from 'react-meta-tags'
import isEmail from 'validator/lib/isEmail'
import { SnackContext } from 'context/SnackContextProvider'
import { isSeacooCN } from 'utils'

const Contact = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	const [messageName, setMessageName] = useState('')
	const [messageEmail, setMessageEmail] = useState('')
	const [messageContent, setMessageContent] = useState('')
	const [sendMessageError, setSendMessageError] = useState(false)
	const { showSnackbar } = useContext(SnackContext)
	const handleSendMessage = () => {
		if (!messageName || !messageEmail || !messageContent) {
			setSendMessageError(true)
			return
		}
		if (!isEmail(messageEmail)) {
			return
		}
		const message: Message = {
			name: messageName,
			email: messageEmail,
			content: messageContent
		}
		sendMessage(message)
		showSnackbar('send-message', 'success')
		setMessageName('')
		setMessageEmail('')
		setMessageContent('')
		setSendMessageError(false)
	}
	return (
		<div className={classes.contact}>
			<MetaTags>
				<title>{t('Contact Us | Info & Support | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						'Contact Seacoo by phone, online or social media. Our customer service team is ready to assist you or provide help with orders.'
					)}
				/>
			</MetaTags>
			<div className='banner'>
				<div className='overlay'></div>
				<div className='container'>
					<Typography variant='h2' className='title'>
						{t('contact-banner')}
					</Typography>
					<div className='border-dot'></div>
					<Typography className='info'>{t('contact-banner-after')}</Typography>
				</div>
			</div>
			<div className='contact-body'>
				<Grid container spacing={10}>
					<Grid item className='left' xs={5}>
						<div className='container-left'>
							<Typography variant='h1' className='title'>
								{t('Message')}
							</Typography>
							<TextField
								id='name'
								variant='outlined'
								required
								error={!messageName && sendMessageError}
								value={messageName}
								label={t('Name')}
								onChange={e => setMessageName(e.target.value)}
							/>
							<TextField
								id='e-mail'
								variant='outlined'
								required
								error={
									(!messageEmail && sendMessageError) ||
									(!!messageEmail && !isEmail(messageEmail))
								}
								helperText={
									(!messageEmail && sendMessageError) ||
									(!!messageEmail &&
										!isEmail(messageEmail) &&
										t('Please input a valid e-mail address'))
								}
								value={messageEmail}
								type='email'
								label={t('E-mail')}
								onChange={e => setMessageEmail(e.target.value)}
							/>
							<TextField
								id='message'
								variant='outlined'
								required
								multiline
								error={!messageContent && sendMessageError}
								value={messageContent}
								rows={5}
								label={t('Message')}
								onChange={e => setMessageContent(e.target.value)}
							/>
							<Button
								variant='contained'
								className='sendButton'
								color='primary'
								type='submit'
								onClick={handleSendMessage}
							>
								{t('SEND')}
							</Button>
						</div>
					</Grid>
					<Grid item className='right' xs={6}>
						<div className='container-right'>
							<img src='/images/contact/map.png' alt='map' />
							<Typography style={{ paddingTop: 20, paddingBottom: 5 }}>
								{t('E-mail')}: info@seacoo.com
							</Typography>
							{!isSeacooCN() ? (
								<Typography style={{ paddingBottom: 20 }}>
									{t('Toll Free')}: 1(866) 200 2661
								</Typography>
							) : (
								<Typography style={{ paddingBottom: 20 }}>
									联系电话: 400-097-5918
								</Typography>
							)}
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Contact
