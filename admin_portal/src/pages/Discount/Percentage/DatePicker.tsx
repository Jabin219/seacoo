import React from 'react'
import { Typography, Grid, MenuItem, TextField } from '@material-ui/core'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Domains } from 'constant'

interface Props {
	startDate: MaterialUiPickersDate | null
	setStartDate: (startDate: MaterialUiPickersDate | null) => void
	expireDate: MaterialUiPickersDate | null
	setExpireDate: (startDate: MaterialUiPickersDate | null) => void
	domainSource: Domains
	setDomainSource: (domainSource: Domains) => void
	error: boolean
}
const DatePicker = ({
	startDate,
	setStartDate,
	expireDate,
	setExpireDate,
	domainSource,
	setDomainSource,
	error
}: Props) => {
	const handleStartDateChange = (date: MaterialUiPickersDate | null) => {
		setStartDate(date)
	}
	const handleExpireDateChange = (date: MaterialUiPickersDate | null) => {
		setExpireDate(date)
	}
	return (
		<>
			<Grid container className='start-date'>
				<Grid item xs={4}>
					<Typography variant='body2'>起始日期</Typography>
				</Grid>
				<Grid item xs>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardDatePicker
							variant='inline'
							format='YYYY/MM/DD'
							emptyLabel='日期'
							autoOk={true}
							value={startDate}
							onChange={handleStartDateChange}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
			</Grid>
			<Grid container className='expire-date'>
				<Grid item xs={4}>
					<Typography variant='body2'>有效期至*</Typography>
				</Grid>
				<Grid item xs>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardDatePicker
							required
							error={!expireDate && error}
							helperText={!expireDate && error && '请选择有效期'}
							disablePast
							variant='inline'
							format='YYYY/MM/DD'
							emptyLabel='日期'
							autoOk={true}
							value={expireDate}
							onChange={handleExpireDateChange}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
			</Grid>
			<Grid container className='expire-date'>
				<Grid item xs={4}>
					<Typography variant='body2'>折扣码用于</Typography>
				</Grid>
				<Grid item xs>
					<TextField
						select
						required
						variant='outlined'
						value={domainSource}
						onChange={e => setDomainSource(e.target.value as Domains)}
						size='small'
					>
						<MenuItem value='' disabled>
							Domain
						</MenuItem>
						<MenuItem value={Domains.seacoo}>seacoo.com</MenuItem>
						<MenuItem value={Domains.seacooCN}>seacoo-cn.com</MenuItem>
						<MenuItem value={Domains.beche}>beche.ca</MenuItem>
					</TextField>
				</Grid>
			</Grid>
		</>
	)
}

export default DatePicker
