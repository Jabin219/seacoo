import React, { useContext, useState } from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { Typography, TextField, Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { createNewSubscription } from '../../api'
import validator from 'validator'
import { SnackContext } from 'context/SnackContextProvider'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

interface Props {
	handleSubscribeDialogClose: () => void
}

const Subscription = ({ handleSubscribeDialogClose }: Props) => {
	const classes = useStyles()
	const { t } = useTranslation()
	const [email, setEmail] = useState('')
	const [error, setError] = useState(false)
	const { showSnackbar } = useContext(SnackContext)
	const handleConfirm = async () => {
		if (!email) {
			setError(true)
			return
		} else if (!validator.isEmail(email)) {
			setError(true)
			return
		}
		const subscribeResult = await createNewSubscription(email)
		if (subscribeResult.data.status === 'existed email') {
			showSnackbar('already-subscribe', 'error')
		} else if (subscribeResult.data.status === 'success') {
			showSnackbar('subscription', 'success')
		}
		handleSubscribeDialogClose()
	}

	return (
		<div className={classes.root}>
			<Close
				onClick={() => {
					handleSubscribeDialogClose()
				}}
			/>
			<LazyLoadImage
				src='/images/subscription/subscription-banner.png'
				alt=''
				effect='opacity'
				width={'100%'}
				height={'25%'}
			/>
			<Typography
				variant='h6'
				dangerouslySetInnerHTML={{
					__html: t(
						'<span>Premium Quality Wild-Caught Canadian Sea Cucumber</span>'
					)
				}}
			></Typography>
			<Typography variant='h1'>{t('ENJOY 10% OFF')}</Typography>
			<Typography
				variant='body2'
				dangerouslySetInnerHTML={{
					__html: t(
						'<span>Sign up for newsletters and receive a 10% off promo code for your first purchase.</span>'
					)
				}}
			></Typography>
			<TextField
				variant='outlined'
				size='small'
				label={t('ENTER E-MAIL')}
				fullWidth
				error={(!email && error) || (!!email && !validator.isEmail(email))}
				helperText={error && 'Please input a valid e-mail address'}
				onChange={e => {
					setEmail(e.target.value)
					setError(false)
				}}
			/>
			<Button variant='contained' color='primary' onClick={handleConfirm}>
				{t('GET MY 10% OFF')}
			</Button>
		</div>
	)
}

export default Subscription
