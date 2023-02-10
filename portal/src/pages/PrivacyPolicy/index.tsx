import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'
import { isSeacooCN } from 'utils'

const PrivacyPolicy = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.privacy}>
			<MetaTags>
				<title>{t('Privacy Policy | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						"Seacoo does not sell or rent our customers' personal information to any other party. Your privacy is important to us."
					)}
				/>
			</MetaTags>
			<Typography variant='h4' className='title'>
				{t('Customers Privacy')}
			</Typography>
			{!isSeacooCN() ? (
				<div className='question'>
					<Typography variant='h6' className='mini-title'>
						{t('Q) How Seacoo respect your privacy?')}
					</Typography>
					<Typography>
						{t(
							'A) For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. This Privacy Policy describes how we collect, use, and disclose personal information. Seacoo recognizes the importance of obtaining consent required by law to collect, use, and disclose personal information. This Policy does not govern personal information about our employees, which other internal Seacoo policies address. If you have any questions about our use of personal information, please contact us via the information at the end of website page.'
						)}
					</Typography>
				</div>
			) : (
				<div className='question'>
					<Typography variant='h6' className='mini-title'>
						问）Seacoo如何尊重您的隐私？
					</Typography>
					<Typography>
						答）为了您在使用我们的服务时能获得更好的体验，我们可能会要求您向我们提供相应的个人身份信息，包括但不限于您的姓名，电话号码和邮政地址。本隐私政策描述了我们如何收集，使用和披露个人信息。
						Seacoo认识到在法律要求下收集、使用和披露个人信息必须获得网站使用者同意的重要性。如果您对我们使用您的个人信息有任何疑问，请通过网站下方提供的联系方式与我们取得联系。
					</Typography>
				</div>
			)}
		</div>
	)
}

export default PrivacyPolicy
