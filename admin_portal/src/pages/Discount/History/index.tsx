import React, { useState, useEffect, useContext } from 'react'
import {
	Paper,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	Button,
	Table,
	TableCell,
	TableRow,
	TableBody,
	TableContainer,
	TableHead,
	TablePagination,
	Typography,
	Divider,
	TableFooter
} from '@material-ui/core'
import { useStyles } from './style'
import moment from 'moment'
import { disableCoupon, getCouponsWithOrders } from 'api/discount'
import { NotificationContext } from 'context/NotificationContext'
const History = () => {
	const classes = useStyles()
	const [couponId, setCouponId] = useState('')
	const [openDialogRemoveCoupon, setOpenDialogRemoveCoupon] = useState(false)
	const [openDialogCouponDetail, setOpenDialogCouponDetail] = useState(false)
	const [coupons, setCoupons] = useState([] as any[])
	const [hasNext, setHasNext] = useState(false)
	const [page, setPage] = useState(0)
	const [viewedCoupon, setViewedCoupon] = useState({} as any)
	const { displayNotification } = useContext(NotificationContext)
	const handleRemoveCoupon = async () => {
		const result = await disableCoupon(couponId)
		if (result.data.status === 'success') {
			setCoupons([...coupons.filter(coupon => coupon.id !== couponId)])
		}
		setOpenDialogRemoveCoupon(false)
		displayNotification('折扣码已删除', 'success')
		setCouponId('')
	}
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}
	const getCoupons = async (page: number) => {
		const getCouponsResult = await getCouponsWithOrders(page)
		setCoupons(getCouponsResult.data.data)
		setHasNext(getCouponsResult.data.hasNext)
	}
	const getViewedCoupon = couponID => {
		setViewedCoupon(
			coupons.find(coupon => {
				return coupon.id === couponID
			})
		)
	}
	const handlePagination = () => {
		getCoupons(page)
	}
	useEffect(() => {
		handlePagination()
		// eslint-disable-next-line
	}, [page])

	return (
		<Paper variant='outlined' className={classes.paper}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align='center'>优惠码</TableCell>
							<TableCell align='center'>应用渠道</TableCell>
							<TableCell align='center'>优惠额度</TableCell>
							<TableCell align='center'>剩余使用次数</TableCell>
							<TableCell align='center'>有效期</TableCell>
							<TableCell align='center'>备注</TableCell>
							<TableCell align='center'>操作</TableCell>
							<TableCell align='center'>对应订单</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{coupons &&
							coupons.map(coupon => {
								return (
									<TableRow key={coupon.id}>
										<TableCell align='center'>{coupon.code}</TableCell>
										<TableCell align='center'>{coupon.domain}</TableCell>
										<TableCell align='center'>
											{100 - coupon.discount}% off
										</TableCell>
										<TableCell align='center'>{coupon.numberOfUse}</TableCell>
										<TableCell align='center'>
											{moment(coupon.expireTime).format('YYYY-MM-DD')}
										</TableCell>
										<TableCell align='center' className='comment'>
											{coupon.comment ? coupon.comment : '-'}
										</TableCell>
										<TableCell
											align='center'
											className='btn-delete'
											onClick={() => {
												setCouponId(coupon.id)
												setOpenDialogRemoveCoupon(true)
											}}
										>
											删除
										</TableCell>
										<TableCell
											align='center'
											className='btn-view'
											onClick={() => {
												getViewedCoupon(coupon.id)
												setOpenDialogCouponDetail(true)
											}}
										>
											查看
										</TableCell>
									</TableRow>
								)
							})}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								style={{ border: 0 }}
								rowsPerPageOptions={[]}
								colSpan={4}
								count={-1}
								rowsPerPage={20}
								page={page}
								onChangePage={handleChangePage}
								nextIconButtonProps={{ disabled: hasNext ? false : true }}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
			<Dialog
				open={openDialogRemoveCoupon}
				onClose={() => setOpenDialogRemoveCoupon(false)}
				fullWidth
				maxWidth='xs'
			>
				<DialogTitle style={{ textAlign: 'center', fontWeight: 600 }}>
					删除优惠码后无法撤回
				</DialogTitle>
				<DialogActions style={{ marginTop: 'auto' }}>
					<Button
						onClick={() => {
							setOpenDialogRemoveCoupon(false)
							setCouponId('')
						}}
						color='secondary'
					>
						放弃
					</Button>
					<Button onClick={handleRemoveCoupon} color='primary' autoFocus>
						确认删除
					</Button>
				</DialogActions>
			</Dialog>

			{viewedCoupon && (
				<Dialog
					open={openDialogCouponDetail}
					onClose={() => setOpenDialogCouponDetail(false)}
				>
					<DialogContent
						style={{ padding: '45px 68px', width: 350, height: 600 }}
					>
						<div className='info-part' style={{ marginBottom: 30 }}>
							<Typography
								variant='h6'
								style={{
									fontSize: 14,
									fontWeight: 600,
									lineHeight: '20px',
									letterSpacing: 0.17,
									textAlign: 'left'
								}}
							>
								折扣种类:
								<span
									style={{ fontSize: 14, fontWeight: 400, color: '#4D4D4E' }}
								>
									{' 比例折扣'}
								</span>
							</Typography>
							<Typography
								variant='h6'
								style={{
									fontSize: 14,
									fontWeight: 600,
									lineHeight: '20px',
									letterSpacing: 0.17,
									textAlign: 'left'
								}}
							>
								折扣码:
								<span
									style={{ fontSize: 14, fontWeight: 400, color: '#4D4D4E' }}
								>
									{` ${viewedCoupon.code}`}
								</span>
							</Typography>
							<Typography
								variant='h6'
								style={{
									fontSize: 14,
									fontWeight: 600,
									lineHeight: '20px',
									letterSpacing: 0.17,
									textAlign: 'left'
								}}
							>
								优惠额度:
								<span
									style={{ fontSize: 14, fontWeight: 400, color: '#4D4D4E' }}
								>
									{` ${100 - viewedCoupon.discount}`} off%
								</span>
							</Typography>
							<Typography
								variant='h6'
								style={{
									fontSize: 14,
									fontWeight: 600,
									lineHeight: '20px',
									letterSpacing: 0.17,
									textAlign: 'left'
								}}
							>
								有效期:
								<span
									style={{ fontSize: 14, fontWeight: 400, color: '#4D4D4E' }}
								>
									{moment(viewedCoupon.expireTime).format('YYYY-MM-DD')}
								</span>
							</Typography>
						</div>
						<Divider />
						<div className='orders' style={{ marginTop: 40, overflow: 'auto' }}>
							<Typography
								variant='h6'
								style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}
							>
								对应订单:
							</Typography>
							{viewedCoupon.orderDetail && viewedCoupon.orderDetail.length > 0
								? viewedCoupon.orderDetail.map(order => {
										return (
											<Typography
												key={order.id}
												style={{
													fontSize: 14,
													textDecoration: 'underline',
													color: '#2196F3',
													marginBottom: 5
												}}
											>
												{order.orderNumber}
											</Typography>
										)
								  })
								: '无'}
						</div>
					</DialogContent>
				</Dialog>
			)}
		</Paper>
	)
}

export default History
