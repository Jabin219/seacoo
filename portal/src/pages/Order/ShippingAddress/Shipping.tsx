import React, { useState, useContext } from 'react'
import {
	TextField,
	Typography,
	Radio,
	Divider,
	RadioGroup,
	FormControlLabel,
	FormControl,
	Button
} from '@material-ui/core'
import { useStyles } from '../style'
import { useTranslation } from 'react-i18next'
import { createOrder } from 'api/order'
import { OrderContext } from '../OrderPage'
import { getAddress, saveAddress } from 'pages/Order/addressHandler'
import validator from 'validator'
import ProvinceSelector from './ProvinceSelector'
import CountrySelector from './CountrySelector'
import { isBeche, isSeacooCN } from 'utils'
import { updateDataLayerCheckout } from 'utils/becheGTMTracking'
interface Props {
	next: () => void
	back: () => void
}
const Shipping = ({ next, back }: Props) => {
	const classes = useStyles()
	const { t } = useTranslation()
	let storedAddress = getAddress()
	const [recipient, setRecipient] = useState(storedAddress.recipient || '')
	const [email, setEmail] = useState(storedAddress.email || '')
	const [phone, setPhone] = useState(storedAddress.phone || '')
	const [country, setCountry] = useState(isSeacooCN() ? 'CN' : 'CA')
	const [province, setProvince] = useState('')
	const [city, setCity] = useState(storedAddress.city || '')
	const [postalCode, setPostalCode] = useState(storedAddress.postalCode || '')
	const [streetOne, setStreetOne] = useState(storedAddress.street || '')
	const [streetTwo, setStreetTwo] = useState(storedAddress.streetExtra || '')
	const [error, setError] = useState(false)
	const { order, setOrder } = useContext(OrderContext)
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		if (
			!recipient ||
			!email ||
			!country ||
			!province ||
			!postalCode ||
			!streetOne ||
			(isSeacooCN() && !phone)
		) {
			setError(true)
			return
		} else if (
			!validator.isEmail(email) ||
			(!validator.isPostalCode(postalCode, 'US') &&
				!validator.isPostalCode(postalCode, 'CA') &&
				!validator.isPostalCode(postalCode, 'CN'))
		) {
			return
		} else {
			const address = {
				recipient,
				email,
				phone,
				country,
				province,
				city,
				postalCode,
				street: streetOne,
				streetExtra: streetTwo
			}
			storedAddress = {
				...address
			}
			saveAddress(storedAddress)
			const currentOrder = {
				...order,
				email: address.email,
				addressShipping: address,
				domain: process.env.REACT_APP_DOMAIN_NAME
			}
			setError(false)
			const createOrderResult = await createOrder(currentOrder)
			const createdOrder = createOrderResult.data.data
			if (isBeche()) {
				updateDataLayerCheckout(createdOrder, order.products)
			}
			setOrder({
				...currentOrder,
				id: createOrderResult.data.data.id,
				orderNumber: createOrderResult.data.data.orderNumber,
				createdAt: createOrderResult.data.data.createdAt
			})
			next()
		}
	}
	return (
		<div style={{ marginBottom: 100 }}>
			<div className={classes.card}>
				<div className='header'>
					<Typography variant='h2' className='title'>
						{t('SHIPPING ADDRESS')}
					</Typography>
				</div>
				<Divider />
				<div className={classes.shippingForm}>
					<TextField
						fullWidth
						required
						variant='outlined'
						label={t('FULL NAME')}
						value={recipient}
						error={!recipient && error}
						helperText={error ? t('Please enter your full name') : ''}
						onChange={e => setRecipient(e.target.value)}
					/>
					<TextField
						fullWidth
						required
						variant='outlined'
						label={t('E-MAIL')}
						type='email'
						error={(!email && error) || (!!email && !validator.isEmail(email))}
						value={email}
						helperText={
							(!email && error) ||
							(!!email &&
								!validator.isEmail(email) &&
								t('Please input a valid e-mail address'))
						}
						onChange={e => setEmail(e.target.value)}
					/>
					<TextField
						fullWidth
						required={isSeacooCN() ? true : false}
						error={isSeacooCN() && !phone && error}
						helperText={isSeacooCN() && !phone && error && '请输入正确的手机号'}
						variant='outlined'
						label={t('PHONE NUMBER')}
						type='tel'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<CountrySelector
						country={country}
						error={error}
						setCountry={setCountry}
						setProvince={setProvince}
					/>
					<ProvinceSelector
						country={country}
						province={province}
						error={error}
						setProvince={setProvince}
					/>
					<TextField
						required
						label={t('CITY')}
						error={!city && error}
						helperText={!city && error ? t('Please enter a city') : ''}
						variant='outlined'
						className='halfWidth'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
					<TextField
						required
						label={t('POST CODE')}
						error={
							(!postalCode && error) ||
							(!!postalCode &&
								!validator.isPostalCode(postalCode, 'US') &&
								!validator.isPostalCode(postalCode, 'CA') &&
								!validator.isPostalCode(postalCode, 'CN'))
						}
						helperText={
							((!postalCode && error) ||
								(!!postalCode &&
									!validator.isPostalCode(postalCode, 'US') &&
									!validator.isPostalCode(postalCode, 'CA') &&
									!validator.isPostalCode(postalCode, 'CN'))) &&
							t('Please enter a valid postal code')
						}
						variant='outlined'
						className='halfWidth'
						value={postalCode}
						onChange={e => setPostalCode(e.target.value)}
					/>
					<TextField
						fullWidth
						required
						variant='outlined'
						label={t('ADDRESS LINE1')}
						error={error && !streetOne}
						helperText={
							error && !streetOne ? t('Please enter full address') : ''
						}
						value={streetOne}
						onChange={e => setStreetOne(e.target.value)}
					/>
					<TextField
						fullWidth
						variant='outlined'
						label={t('ADDRESS LINE2')}
						value={streetTwo}
						onChange={e => setStreetTwo(e.target.value)}
					/>
				</div>
			</div>
			<div className={classes.card}>
				<div className='header'>
					<Typography variant='h3' className='title'>
						{t('SHIPPING METHOD')}
					</Typography>
				</div>
				<Divider />
				<FormControl className={classes.shippingForm}>
					<RadioGroup>
						<FormControlLabel
							control={<Radio color='primary' />}
							label={t('Canada Post Standard (5-10 days)')}
						/>
					</RadioGroup>
				</FormControl>
			</div>
			<div className={classes.shippingButtons}>
				<Button
					className='btn-back'
					variant='outlined'
					color='primary'
					onClick={back}
				>
					{t('Back')}
				</Button>
				<Button
					className='btn-next'
					variant='contained'
					color='primary'
					onClick={handleSubmit}
				>
					{t('Next Step')}
				</Button>
			</div>
		</div>
	)
}
export default Shipping
