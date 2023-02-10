import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Star, StarBorder } from '@material-ui/icons'
import { useStyles } from './style'
import { Product } from 'models'
import isEmail from 'validator/lib/isEmail'
import { sendReview } from 'api'
import moment from 'moment'
import { SnackContext } from 'context/SnackContextProvider'

interface Props {
	product: Product
}

const ProductsComments = ({ product }: Props) => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const [reviewRate, setReviewRate] = useState(0)
	const [reviewContent, setReviewContent] = useState('')
	const [reviewUser, setReviewUser] = useState('')
	const [reviewEmail, setReviewEmail] = useState('')
	const [sendReviewError, setSendReviewError] = useState(false)
	const { showSnackbar } = useContext(SnackContext)

	const handleSendReview = () => {
		if (!reviewUser || !reviewEmail || !reviewContent) {
			setSendReviewError(true)
			return
		}
		if (!isEmail(reviewEmail)) {
			setSendReviewError(true)
			return
		}
		const newComment: Comment = {
			user: reviewUser,
			productName: product.name,
			email: reviewEmail,
			content: reviewContent,
			rate: reviewRate,
			createdAt: moment().format()
		}
		sendReview(newComment)
		showSnackbar('send-review', 'success')
		setReviewRate(0)
		setReviewUser('')
		setReviewEmail('')
		setReviewContent('')
		setSendReviewError(false)
	}
	return (
		<div className={classes.productDetailReview}>
			<div className='review-content'>
				<div className='review-title'>
					<Typography variant='h2'>
						{lng === 'en'
							? `Reviews for ${product.name}`
							: `对于${product.nameZh}的评价`}
					</Typography>
				</div>
				{product.comments &&
					product.comments.map((comment: Comment) => {
						return (
							<div className='review-card' key={comment.id}>
								<div className='review-card-content'>
									<div className='review-card-header'>
										<strong className='review-user-id'>
											{comment.user ? comment.user : 'anonymity'}
											&nbsp;&nbsp;
										</strong>
										<span className='review-time'>
											- {moment(comment.createdAt).format('YYYY-MM-DD')}
										</span>
										<span className='review-stars'>
											<Star fontSize='small' />
											<Star fontSize='small' />
											<Star fontSize='small' />
											<Star fontSize='small' />
											<Star fontSize='small' />
										</span>
									</div>
									<Typography className='review-card-text'>
										{comment.content}
									</Typography>
								</div>
							</div>
						)
					})}
				<div className='add-review'>
					<Typography style={{ marginBottom: 5, fontSize: 14 }}>
						{t('Add a review')}
					</Typography>
					<Typography style={{ marginBottom: 20, fontSize: 16 }}>
						{t(
							'Your email address will not be published. Required fields are marked'
						)}
					</Typography>
					<Typography style={{ marginBottom: 5, fontSize: 14 }}>
						{t('Your rating')}
					</Typography>
					<div className='add-review-stars'>
						<span
							onClick={() => {
								setReviewRate(20)
							}}
						>
							{reviewRate >= 20 ? (
								<Star fontSize='small' color='primary' />
							) : (
								<StarBorder fontSize='small' color='primary' />
							)}
						</span>
						<span
							onClick={() => {
								setReviewRate(40)
							}}
						>
							{reviewRate >= 40 ? (
								<Star fontSize='small' color='primary' />
							) : (
								<StarBorder fontSize='small' color='primary' />
							)}
						</span>
						<span
							onClick={() => {
								setReviewRate(60)
							}}
						>
							{reviewRate >= 60 ? (
								<Star fontSize='small' color='primary' />
							) : (
								<StarBorder fontSize='small' color='primary' />
							)}
						</span>
						<span
							onClick={() => {
								setReviewRate(80)
							}}
						>
							{reviewRate >= 80 ? (
								<Star fontSize='small' color='primary' />
							) : (
								<StarBorder fontSize='small' color='primary' />
							)}
						</span>
						<span
							onClick={() => {
								setReviewRate(100)
							}}
						>
							{reviewRate >= 100 ? (
								<Star fontSize='small' color='primary' />
							) : (
								<StarBorder fontSize='small' color='primary' />
							)}
						</span>
					</div>

					<Typography style={{ marginTop: 20, marginBottom: 5 }}>
						{t('Your review')} <span style={{ color: 'red' }}>*</span>
					</Typography>
					<TextField
						variant='outlined'
						required
						multiline
						fullWidth
						rows={8}
						error={!reviewContent && sendReviewError}
						value={reviewContent}
						style={{ marginBottom: 20 }}
						onChange={e => setReviewContent(e.target.value)}
					/>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<TextField
								variant='outlined'
								required
								label={t('Name')}
								error={!reviewUser && sendReviewError}
								value={reviewUser}
								fullWidth
								onChange={e => setReviewUser(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								variant='outlined'
								required
								label={t('E-mail')}
								type='email'
								error={
									sendReviewError &&
									(!reviewEmail || (!!reviewEmail && !isEmail(reviewEmail)))
								}
								value={reviewEmail}
								helperText={
									sendReviewError &&
									(!reviewEmail ||
										(!!reviewEmail &&
											!isEmail(reviewEmail) &&
											'Enter a Valid E-mail address'))
								}
								fullWidth
								onChange={e => setReviewEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4}>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								onClick={handleSendReview}
							>
								{t('SUBMIT')}
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	)
}

export default ProductsComments
