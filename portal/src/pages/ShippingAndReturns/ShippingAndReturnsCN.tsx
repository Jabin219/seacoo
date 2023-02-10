import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'

const ShippingAndReturnsCN = () => {
	const classes = useStyles()
	return (
		<div className={classes.shippingReturns}>
			<Typography variant='h4' className='title'>
				配送与退货
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）我的订单发哪家快递？
				</Typography>
				<Typography>答）所有订单均由顺丰运送</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）我订购的生鲜产品如何运送？
				</Typography>
				<Typography>
					答）生鲜产品将会被装入保鲜袋后放入保温箱，并且加冰袋保持低温。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）如何取消我的订单？
				</Typography>
				<Typography>
					答）如果您的订单尚未发货，您仍然可以取消订单。只需通过电子邮件联系我们order@seacoo.com，请在邮件中注明您的订单号。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）如果我对产品不满意，该如何退货？
				</Typography>
				<Typography>
					答）如果您因任何原因对产品不满意，请通过order@seacoo.com与我们联系，并提供您的订单号以及尽可能多的与订单相关的详细信息，以便我们能更好地向您提供帮助。
					<br />
					<br />
					请注意，我们只能同时处理来自于同一订单的产品。来自多个订单的多个产品将需要分别处理。在审核您的退货请求后，我们将向您发送进一步操作说明。我们将在2-3个工作日内尽快处理您的请求。
					<br />
					<br />
					在收到确认换货确认书或退货通知后，您需要将商品与所有原始包装一起包装，然后将其通过任意一家快递公司寄回给我们。
					<br />
					<br />
					收到我们的商品后，您将获得退款或更换。SEACOO将对您的退货请求进行评估，如非我方责任，您将承担退换过程中所产生的邮寄费。SEACOO保留在退货和交换过程中不承担任何邮寄费用的权利。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）订单大概多久送达？
				</Typography>
				<Typography>
					答）在线订购的订单将在3个工作日内发货。中国大陆境内在1至7个工作日内送达。具体送达时间取决于您的位置。
					<br />
					**由于当前的全球健康危机，我们暂时无法保证交货日期。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）如果申请退款？
				</Typography>
				<Typography>
					答）我们收到您的物品后，将立即退款。如果在商品发货前您取消了商品订购且已付款，我们将在您提交取消请求后立即退款，退款处理方式取决于您的原始付款方式：
					如果您使用信用卡付款，则退款将在收到退回的商品或取消请求后的五个工作日内发送到发卡银行。若您对退款金额的到账时间有疑问，请与您的发卡银行联系。
				</Typography>
			</div>
			<br />
			<br />
		</div>
	)
}

export default ShippingAndReturnsCN
