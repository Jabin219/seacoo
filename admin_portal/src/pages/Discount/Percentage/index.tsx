import React, { useState, useContext } from 'react'
import {
	Breadcrumbs,
	Typography,
	TextField,
	Grid,
	Button
} from '@material-ui/core'
import { createPercentageCoupon } from 'api/discount'
import { useStyles } from './style'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { NotificationContext } from 'context/NotificationContext'
import moment from 'moment'
import { Domains } from 'constant'
import DatePicker from './DatePicker'
interface Props {
	setDiscountType: (discountType: any) => void
}
const Percentage = ({ setDiscountType }: Props) => {
	const classes = useStyles()
	const { displayNotification } = useContext(NotificationContext)
	const [code, setCode] = useState('')
	const [discountPercentage, setDiscountPercentage] = useState(99)
	const [numberOfUse, setNumberOfUse] = useState(1)
	const [content, setContent] = useState('')
	const [startDate, setStartDate] = useState<MaterialUiPickersDate | null>(null)
	const [expireDate, setExpireDate] = useState<MaterialUiPickersDate | null>(
		null
	)
	const [domainSource, setDomainSource] = useState<Domains>(Domains.seacoo)
	const [error, setError] = useState(false)
	const handleSubmit = async () => {
		if (
			!code ||
			!discountPercentage ||
			discountPercentage > 99 ||
			discountPercentage < 1 ||
			!numberOfUse ||
			!expireDate
		) {
			setError(true)
			return
		}
		const createCouponResult = await createPercentageCoupon(
			code.toUpperCase(),
			discountPercentage,
			numberOfUse,
			content,
			expireDate,
			startDate || moment(),
			domainSource
		)
		if (createCouponResult.data.status === 'success') {
			displayNotification('折扣码已生成', 'success')
			setCode('')
			setError(false)
		} else {
			displayNotification('折扣码生成失败', 'error')
		}
	}
	return (
		<div className={classes.root}>
			<Breadcrumbs separator='>'>
				<Typography
					style={{ cursor: 'pointer' }}
					onClick={() => {
						setDiscountType('')
					}}
				>
					生成折扣码
				</Typography>
				<Typography>百分比折扣码</Typography>
			</Breadcrumbs>
			<div className='form'>
				<div className='form-container'>
					<Typography variant='h5'>百分比折扣码</Typography>
					<Grid container>
						<Grid item xs={4}>
							<Typography variant='body2'>输入coupon*</Typography>
						</Grid>
						<Grid item xs>
							<TextField
								variant='outlined'
								size='small'
								value={code}
								fullWidth
								required
								error={!code && error}
								helperText={error && !code && '请输入coupon code'}
								onChange={e => setCode(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={4}>
							<Typography variant='body2'>折扣百分比*</Typography>
						</Grid>
						<Grid item xs>
							<TextField
								variant='outlined'
								size='small'
								value={discountPercentage}
								fullWidth
								required
								error={
									error &&
									(!discountPercentage ||
										discountPercentage > 100 ||
										discountPercentage < 0)
								}
								helperText={
									error &&
									(!discountPercentage ||
										discountPercentage > 100 ||
										discountPercentage < 0) &&
									'请输入一个0-100之间的折扣百分比'
								}
								type='number'
								onChange={e =>
									setDiscountPercentage(parseInt(e.target.value, 10))
								}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={4}>
							<Typography variant='body2'>使用次数*</Typography>
						</Grid>
						<Grid item xs>
							<TextField
								variant='outlined'
								size='small'
								value={numberOfUse}
								fullWidth
								required
								error={!numberOfUse && error}
								type='number'
								onChange={e => setNumberOfUse(parseInt(e.target.value, 10))}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={4}>
							<Typography variant='body2'>备注</Typography>
						</Grid>
						<Grid item xs>
							<TextField
								variant='outlined'
								size='small'
								value={content}
								fullWidth
								onChange={e => setContent(e.target.value)}
							/>
						</Grid>
					</Grid>
					<DatePicker
						startDate={startDate}
						setStartDate={setStartDate}
						expireDate={expireDate}
						setExpireDate={setExpireDate}
						domainSource={domainSource}
						setDomainSource={setDomainSource}
						error={error}
					/>
					<Button className='submit' onClick={handleSubmit}>
						生成折扣码
					</Button>
				</div>
			</div>
		</div>
	)
}
export default Percentage
