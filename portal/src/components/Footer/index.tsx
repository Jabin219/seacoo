import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import {
	Grid,
	Typography,
	List,
	ListItemText,
	Dialog,
	DialogTitle
} from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiFacebook, mdiYoutube, mdiWechat, mdiInstagram } from '@mdi/js'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { ProductData, BlogData } from 'constant'
import { isSeacooCN } from 'utils'
const Footer = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div className={classes.footer}>
			<Grid container className='container'>
				<Grid className='footer-logo' item xs={3}>
					<img src='/images/logo/footer-logo.png' alt='logo' />
					<Typography>
						© 2020 SEACOO
						<br />
						All Rights Reserved
					</Typography>
				</Grid>
				<Grid className='footer-list' item xs>
					<Grid container>
						<Grid item xs={4}>
							<List>
								<Typography variant='h4'>{t('Quick Links')}</Typography>
								<HashLink to='/#'>
									<ListItemText primary={t('Home')} />
								</HashLink>
								<HashLink to='/west-coast/#'>
									<ListItemText primary={t('West Coast')} />
								</HashLink>
								<HashLink to='/east-coast/#'>
									<ListItemText primary={t('East Coast')} />
								</HashLink>
								{!isSeacooCN() && (
									<HashLink
										to={`/product/${ProductData.bechePowder.pathName}/#`}
									>
										<ListItemText primary='Bêche' />
									</HashLink>
								)}
								<HashLink to='/product/#'>
									<ListItemText primary={t('All Products')} />
								</HashLink>
							</List>
						</Grid>
						<Grid item xs={4}>
							<List>
								<Typography variant='h4'>{t('More Info')}</Typography>
								<HashLink to='/about/#'>
									<ListItemText primary={t('About Us')} />
								</HashLink>
								{!isSeacooCN() && (
									<>
										<HashLink to={`/blog/${BlogData.RehydrateMethod.name}/#`}>
											<ListItemText primary={t('Rehydration')} />
										</HashLink>
										{lng === 'en' ? (
											<HashLink to={`/blog/${BlogData.ChineseFood.name}/#`}>
												<ListItemText primary='Recipe' />
											</HashLink>
										) : (
											<HashLink
												to={`/blog/${BlogData.YouTubeRecommendBlog.id}/#`}
											>
												<ListItemText primary='北美好物推荐' />
											</HashLink>
										)}
									</>
								)}
								<HashLink
									to={
										lng === 'en'
											? `/blog/${BlogData.NutritiveValue.name}/#`
											: `/blog/${BlogData.NutritiveValue_zh.id}/#`
									}
								>
									<ListItemText primary={t('Nutritive Value')} />
								</HashLink>
								{isSeacooCN() && (
									<>
										<HashLink to={`/blog/${BlogData.MostIn.id}/#`}>
											<ListItemText primary='辨别优质海参' />
										</HashLink>
										<HashLink
											to={`/blog/${BlogData.YouTubeRecommendBlog.id}/#`}
										>
											<ListItemText primary='北美好物推荐' />
										</HashLink>
									</>
								)}
								<HashLink to='/blog/#'>
									<ListItemText primary={t('Blog')} />
								</HashLink>
							</List>
						</Grid>
						<Grid item xs>
							<List>
								<Typography variant='h4'>{t('Need Help?')}</Typography>
								<HashLink
									to={
										!isSeacooCN()
											? '/shipping-and-returns/#'
											: '/shipping-and-returns/cn/#'
									}
								>
									<ListItemText primary={t('Shipping and Returns')} />
								</HashLink>
								<HashLink to='/faqs/#'>
									<ListItemText primary={t('FAQs')} />
								</HashLink>
								<HashLink to='/privacy-policy/#'>
									<ListItemText primary={t('Privacy Policy')} />
								</HashLink>
								<HashLink to='/term-of-use/#'>
									<ListItemText primary={t('Terms of Use')} />
								</HashLink>
							</List>
						</Grid>
					</Grid>
				</Grid>
				<Grid className='footer-contact' item xs={3}>
					<Typography className='title'>{t('Contact us')}</Typography>
					<Typography>{t('E-mail')}: info@seacoo.com</Typography>
					{!isSeacooCN() ? (
						<>
							<Typography>
								{t('Office Tell')}: {'+1 (902)-706-1820'}
							</Typography>
							<Typography>
								{t('Toll Free')}: {'+1 (866)-200-2661'}
							</Typography>
						</>
					) : (
						<Typography>{t('Office Tell')}: 400-097-5918</Typography>
					)}
					<div className='icons'>
						<span
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setOpen(true)
							}}
						>
							<Icon
								path={mdiWechat}
								title='translate'
								size={1}
								color='#f1f1f1'
							/>
						</span>
						{!isSeacooCN() && (
							<>
								<a
									href='https://www.youtube.com/channel/UCM_roEIdHUR-TBsrA558-ZA'
									target='_blank'
									rel='noreferrer'
								>
									<Icon
										path={mdiYoutube}
										title='translate'
										size={1}
										color='#f1f1f1'
									/>
								</a>
								<a
									href='https://www.facebook.com/CanadianSeaCucumber/'
									target='_blank'
									rel='noreferrer'
								>
									<Icon
										path={mdiFacebook}
										title='translate'
										size={1}
										color='#f1f1f1'
									/>
								</a>
								<a
									href='https://www.instagram.com/seacoo_2011/'
									target='_blank'
									rel='noreferrer'
								>
									<Icon
										path={mdiInstagram}
										title='translate'
										size={1}
										color='#f1f1f1'
									/>
								</a>
							</>
						)}
					</div>
				</Grid>
			</Grid>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle style={{ textAlign: 'center' }}>
					{t('Scan the QR code to follow SEACOO')}
				</DialogTitle>
				<img src='/images/weChatCode/weChat.jpg' alt='weChatCode' />
			</Dialog>
		</div>
	)
}
export default Footer
