import React from 'react'
import { useStyles } from './style'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const TermOfUseCA = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.termOfUse}>
			<div>
				<Typography className='title' variant='h4'>
					{t('Term of Use')}
				</Typography>
			</div>
			<div className='main-body'>
				<Typography variant='h6' className='subtitle'>
					{t('Acceptance of these Website Standard Terms And Conditions')}
				</Typography>
				<Typography>
					{t(
						'Term of UsePlease read the terms of these Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) carefully. If you do not accept the terms, do not use this website. These terms are used to inform website visitors regarding our terms and conditions, with the collection, use, and share of any Information if anyone decided to use our service,the Seacoo website.'
					)}
					<br />
					{t(
						'By using this website, you are indicating your acceptance of these Website Standard Terms And Conditions.'
					)}
				</Typography>
				<br />
				<br />

				<Typography variant='h6' className='subtitle'>
					{t('Restricted User Behavior')}
				</Typography>
				<Typography>{t('You agree not to use the Service：')}</Typography>
				<Typography style={{ maxWidth: '95%', margin: '0 auto' }}>
					<br /> {t('a. For any unlawful purpose;')}
					<br />
					<br />
					{t(
						'b. To upload, post, or otherwise transmit any material that is obscene, offensive, blasphemous, pornographic, unlawful, threatening, menacing, abusive, harmful, an invasion of privacy or publicity rights, defamatory, libelous, vulgar, illegal, or otherwise objectionable;'
					)}
					<br />
					<br />
					{t(
						'c. to upload, post, or otherwise transmit any material that infringes any copyright, trademark, patent or other intellectual property right or any moral right or users‘ right of any third party including, but not limited to Seacoo, or to facilitate the unlawful distribution of copyrighted content or illegal content;'
					)}
					<br />
					<br />
					{t(
						'd. to harm minors in any way, including, but not limited to, uploading, posting, or otherwise transmitting content that violates child pornography laws, child sexual exploitation laws or laws prohibiting the depiction of minors engaged in sexual conduct, or submitting any personally identifiable information about any child under the age of 13;'
					)}
					<br />
					<br />
					{t(
						'e. to forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service;'
					)}
					<br />
					<br />
					{t(
						"f. to upload,post, or otherwise transmit any material which is likely to cause harm to Seacoo or anyone else's computer systems,including but not limited to that which contains any virus,code,worm,data or other files or programs designed to damage or allow unauthorized access to the Service which may cause any defect,error,malfunction or corruption to the Service;"
					)}
					<br />
					<br />
					{t(
						'g. for any commercial purpose, except as expressly permitted under these Terms;'
					)}
					<br />
					<br />
					{t(
						'h. to sell access to the Service on any other website or to use the Service on another website for the primary purpose of gaining advertising or subscription revenue other than a personal blog or social network where the primary purpose is to display content from Seacoo by hyperlink and not to compete with Seacoo.'
					)}
				</Typography>
				<br />
				<br />
				<br />
				<Typography className='subtitle'>
					{t('License and Site Access')}
				</Typography>
				<Typography>
					{t(
						'We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.'
					)}
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>{t('User Account')}</Typography>
				<Typography>
					{t(
						'If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password. We reserve all rights to terminate accounts, edit or remove content, and cancel orders at their sole discretion.'
					)}
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>{t('Change to the terms')}</Typography>
				<Typography>
					{t(
						'We may update these Terms from time to time. If we believe that changes are material, we’ll definitely let you know by posting the changes through the online services and/ or sending you an email or message for notification. That way you can decide whether you want to continue to accept for using this website. Changes will be effective upon the posting of the changes unless otherwise specified. You are responsible for reviewing and becoming familiar with any changes. Your use of the Services following the changes constitutes your acceptance of the updated firms.'
					)}
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>
					{t('Intellectual Property Rights')}
				</Typography>
				<Typography>
					{t(
						'Other than the content you own, which you may have opted to include on this Website, under these Terms, [Seacoo] and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.'
					)}
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>{t('Copyright')}</Typography>
				<Typography>
					{t(
						'Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Seacc, and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Seacoo, with copyright authorship for this compilation by Seacoo.'
					)}
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>
					{t('Limitation of liability')}
				</Typography>
				<Typography>
					{t(
						'In no event shall Seacoo, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Seacoo , including its officers, directors, and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.'
					)}
				</Typography>
			</div>
		</div>
	)
}

export default TermOfUseCA
