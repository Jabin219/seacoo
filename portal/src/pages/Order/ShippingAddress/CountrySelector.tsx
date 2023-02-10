import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { isSeacooCN } from 'utils'

interface Props {
	country: string
	error: boolean
	setCountry: (country: string) => void
	setProvince: (province: string) => void
}

const nonChinaCountries = [
	{ key: 'ca', value: 'CA', name: 'Canada' },
	{ key: 'usa', value: 'USA', name: 'USA' }
]

const CountrySelector = ({
	country,
	error,
	setCountry,
	setProvince
}: Props) => {
	const { t } = useTranslation()

	return (
		<TextField
			required
			label={t('COUNTRY')}
			select
			error={!country && error}
			helperText={!country && error ? t('Please select a country') : ''}
			variant='outlined'
			className='halfWidth'
			value={country}
			onChange={e => {
				setCountry(e.target.value)
				setProvince('')
			}}
		>
			{isSeacooCN() ? (
				<MenuItem key='cn' value='CN'>
					中国
				</MenuItem>
			) : (
				nonChinaCountries.map(country => {
					return (
						<MenuItem key={country.key} value={country.value}>
							{t(country.name)}
						</MenuItem>
					)
				})
			)}
		</TextField>
	)
}

export default CountrySelector
