import React from 'react'
import { Typography } from '@material-ui/core'
import RecommendProducts from 'components/RecommendProducts'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useStyles } from './style'
const LandingPage = () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.landing}>
				<LazyLoadImage
					src='/images/landingPage/landing-page-banner.jpg'
					alt=''
					width={780}
					height={260}
					effect='blur'
				/>
				<div className='text'>
					<Typography className='mini-title'>
						Free Shipping on Order Over CAD $100 within Canada
					</Typography>
					<Typography>
						Free Shipping for single order CAD $100 or more before shipping and
						tax. This offer valid for orders shipping to Canada only. For the
						order under CAD $100, there is a shipping charge of CAD $10.
					</Typography>
				</div>
				<div className='text'>
					<Typography className='mini-title'>
						Free Shipping on Order Over CAD $200 within US
					</Typography>
					<Typography>
						Free Shipping for single order CAD $200 or more before shipping and
						tax. This offer valid for orders shipping to US only. CAD $10
						shipping fee will be charged for the order from CAD $100 to $200.
						For the order under CAD $100, there is a shipping charge of CAD $20.
					</Typography>
				</div>
				<div className='text'>
					<Typography className='mini-title'>
						加拿大 - 单笔订单税前满100加币包邮
					</Typography>
					<Typography>
						在计算运费和税费之前，单笔订单实际金额满100加币免运费。此运输优惠政策仅适用于加拿大境内。不满100加币的订单收取10加币运费。
					</Typography>
				</div>
				<div className='text'>
					<Typography className='mini-title'>
						美国 - 单笔订单税前满200加币包邮
					</Typography>
					<Typography>
						在计算运费和税费之前，单笔订单实际金额满200加币免运费。此运输优惠政策仅适用于美国境内。100至200加币的订单收取10加币运费。不满100加币的订单收取20加币运费。
					</Typography>
				</div>
			</div>
			<RecommendProducts />
		</>
	)
}

export default LandingPage
