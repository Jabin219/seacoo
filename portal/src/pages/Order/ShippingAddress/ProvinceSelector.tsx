import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import { CanadaProvinces, ChinaProvinces, USAStates } from 'constant'
import { useTranslation } from 'react-i18next'

interface Props {
	country: string
	province: string
	error: boolean
	setProvince: (province: string) => void
}

const ProvinceSelector = ({ country, province, error, setProvince }: Props) => {
	const { t } = useTranslation()
	return (
		<>
			{country === 'CA' && (
				<TextField
					required
					label={t('PROVINCE')}
					select
					error={!province && error}
					helperText={error ? 'Please select a province' : ''}
					variant='outlined'
					className='halfWidth'
					value={province}
					onChange={e => setProvince(e.target.value)}
				>
					{CanadaProvinces.map(province => (
						<MenuItem key={province.abbreviation} value={province.abbreviation}>
							{province.name}
						</MenuItem>
					))}
				</TextField>
			)}
			{country === 'USA' && (
				<TextField
					required
					label={t('STATE')}
					select
					error={!province && error}
					helperText={error ? t('Please select a state') : ''}
					variant='outlined'
					className='halfWidth'
					value={province}
					onChange={e => setProvince(e.target.value)}
				>
					{USAStates.map(province => (
						<MenuItem key={province.abbreviation} value={province.abbreviation}>
							{province.name}
						</MenuItem>
					))}
				</TextField>
			)}
			{country === 'CN' && (
				<TextField
					required
					label={t('PROVINCE')}
					select
					error={!province && error}
					helperText={error ? '请选择省份' : ''}
					variant='outlined'
					className='halfWidth'
					value={province}
					onChange={e => setProvince(e.target.value)}
				>
					{ChinaProvinces.map(province => (
						<MenuItem key={province.abbreviation} value={province.name}>
							{province.name}
						</MenuItem>
					))}
				</TextField>
			)}
		</>
	)
}

export default ProvinceSelector
