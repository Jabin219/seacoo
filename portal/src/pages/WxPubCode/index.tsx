import { createAdaPayWxOrder } from 'api/order'
import React from 'react'
import { useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { CircularProgress, Typography, Grid } from '@material-ui/core'

const WxPubCode = () => {
	// eslint - disable - next - line
	const history = useHistory()
	const { orderId } = useParams() as any
	const wxPubUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbff7163d6bd4a546&redirect_uri=https://seacoo-cn.com/wxpub/${orderId}&response_type=code&scope=snsapi_base&state=${orderId}&connect_redirect=1#wechat_redirect`
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
	const code = urlParams.get('code')
	const finalOrderId = urlParams.get('state')
	const onBridgeReady = (params: any) => {
		if (WeixinJSBridge) {
			WeixinJSBridge.invoke(
				'getBrandWCPayRequest',
				{
					appId: params.appId, //公众号ID，由商户传入
					timeStamp: params.timeStamp, //时间戳，自1970年以来的秒数
					nonceStr: params.nonceStr, //随机串
					package: params.package,
					signType: params.signType, //微信签名方式：
					paySign: params.paySign //微信签名
				},
				(res: any) => {
					if (res.err_msg == 'get_brand_wcpay_request:ok') {
						// 使用以上方式判断前端返回,微信团队郑重提示：
						//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						history.replace({
							pathname: 'https://seacoo-cn.com'
						})
					}
				}
			)
		}
	}
	const createPayment = async () => {
		if (code === null || code === '') {
			window.location.href = wxPubUrl
		}
		if (code && finalOrderId) {
			const paymentResult = (await createAdaPayWxOrder(code, finalOrderId)).data
			if (paymentResult.message === 'success') {
				const payInfo = JSON.parse(paymentResult.data.expend.pay_info) as any
				if (typeof WeixinJSBridge === 'undefined') {
					if (document.addEventListener) {
						document.addEventListener(
							'WeixinJSBridgeReady',
							onBridgeReady,
							false
						)
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
						document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
					}
				} else {
					onBridgeReady(payInfo)
				}
			}
		}
	}

	useEffect(() => {
		createPayment()
		// eslint-disable-next-line
	}, [code])

	return (
		<div style={{ backgroundColor: '#eeeeef', height: '100vh' }}>
			<div className='placeholder' style={{ height: 100 }}></div>
			<Grid
				container
				style={{
					width: '80%',
					margin: '0 auto',
					height: 500
				}}
			>
				<Grid
					item
					xs={5}
					className='left'
					style={{ backgroundColor: '#fff', height: 500 }}
				>
					<div
						style={{
							padding: 100,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<img
							src='/images/wxpub/wechatpay.png'
							alt='wechatpay'
							style={{ display: 'block', width: 164, margin: '0 auto' }}
						/>
						<div style={{ marginTop: 50, marginBottom: 70 }}>
							<Typography
								variant='h5'
								style={{
									fontSize: 20,
									fontWeight: 'bold',
									textAlign: 'center',
									marginBottom: 15
								}}
							>
								微信安全支付，努力加载中
							</Typography>
							<Typography
								style={{
									fontSize: 14,
									textAlign: 'center'
								}}
							>
								加载过程请勿关闭或刷新界面
							</Typography>
						</div>
						<CircularProgress color='primary' />
					</div>
				</Grid>
				<Grid
					item
					xs
					className='right'
					style={{ backgroundColor: '#fff', height: 500 }}
				>
					<img
						src='/images/wxpub/fishing boat.jpg'
						alt='fishing boat'
						style={{ width: '100%', height: '100%' }}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default WxPubCode
