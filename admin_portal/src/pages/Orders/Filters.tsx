import React, { useContext } from 'react'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import {
	TextField,
	Grid,
	Select,
	MenuItem,
	FormControl,
	InputLabel
} from '@material-ui/core'
import { Domains, orderFilterType } from 'constant'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import { FormatListBulleted, Search } from '@material-ui/icons'
import MomentUtils from '@date-io/moment'
import OrderContext from 'context'

interface Props {
	handleReset: () => void
}
const Filters = ({ handleReset }: Props) => {
	const {
		setPage,
		selectedDate,
		selectedStatus,
		setSelectedStatus,
		setSelectedDate,
		searchedOrderNumber,
		setSearchedOrderNumber,
		selectedDomain,
		setSelectedDomain
	} = useContext(OrderContext)
	return (
		<>
			<Grid container className='search-bar'>
				<Grid item xs={8}>
					<Grid container className='order-filter'>
						<Grid item xs={2} className='reset-container'>
							<div
								className='reset'
								onClick={() => {
									handleReset()
								}}
							>
								<FormatListBulleted style={{ fontSize: 15 }} />
								&nbsp;
								<span>查看全部订单</span>
							</div>
						</Grid>
						<Grid item xs className='picker-container'>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<KeyboardDatePicker
									variant='inline'
									format='YYYY/MM/DD'
									margin='normal'
									emptyLabel='日期'
									id='date-picker-inline'
									autoOk={true}
									value={selectedDate ? selectedDate : null}
									onChange={(date: MaterialUiPickersDate | undefined) => {
										setSelectedDate(date)
										setSearchedOrderNumber('')
										setPage(0)
									}}
									className='date-picker'
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item xs className='select-container'>
							<FormControl>
								{selectedStatus === 'all' && <InputLabel>订单状态</InputLabel>}
								<Select
									variant='standard'
									value={selectedStatus === 'all' ? '' : selectedStatus}
									onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
										setSelectedStatus(event.target.value as string)
										setSearchedOrderNumber('')
										setPage(0)
									}}
									className='status-select'
								>
									<MenuItem value='all'>全部订单</MenuItem>
									<MenuItem value={orderFilterType.paid}>待发货</MenuItem>
									<MenuItem value={orderFilterType.shipped}>已发货</MenuItem>
									<MenuItem value={orderFilterType.cancelled}>已取消</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs className='select-container'>
							<FormControl>
								{selectedDomain === 'all' && <InputLabel>订单来源</InputLabel>}
								<Select
									variant='standard'
									value={selectedDomain === 'all' ? '' : selectedDomain}
									onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
										setSelectedDomain(event.target.value as Domains)
										setSearchedOrderNumber('')
										setPage(0)
									}}
									className='status-select'
								>
									<MenuItem value={Domains.all}>全部</MenuItem>
									<MenuItem value={Domains.seacoo}>seacoo</MenuItem>
									<MenuItem value={Domains.seacooCN}>seacoo-cn</MenuItem>
									<MenuItem value={Domains.beche}>beche</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs className='order-search'>
					<TextField
						variant='outlined'
						className='search'
						placeholder='搜索订单号'
						value={searchedOrderNumber}
						onChange={e => {
							setSearchedOrderNumber(e.target.value)
							selectedDate && setSelectedDate(undefined)
							selectedStatus !== 'all' && setSelectedStatus('all')
							setPage(0)
						}}
						InputProps={{
							startAdornment: <Search style={{ color: 'rgba(0,0,0,0.54)' }} />
						}}
					/>
				</Grid>
			</Grid>
		</>
	)
}

export default Filters
