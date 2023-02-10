import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'
import Gallery from './Gallery'
import RecommendProducts from './RecommendProducts'
import Process from './Process'

const WestCoast = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<div>
			<MetaTags>
				<title>
					{t('Alaska Giant Red Sea Cucumber - West Coast Canada | Seacoo')}
				</title>
				<meta
					name='description'
					content={t(
						'Alaska red sea cucumber is a high-end species that has rich nutritive value and delicious taste. It is a natural source of antioxidants'
					)}
				/>
			</MetaTags>
			<div className={classes.banner}>
				<img
					src='/images/westcoast/westcoast-logo.png'
					alt={t('west coast alaska sea cucumber')}
				/>
				<Typography variant='h2'>{t('WEST COAST')}</Typography>
				<Typography variant='h4'>{t('Alaska Red Sea Cucumber')}</Typography>
			</div>
			<Grid container>
				<Grid item xs={6} style={{ marginRight: 50 }}>
					<div style={{ width: '80%', margin: '80px auto' }}>
						<Typography
							variant='h6'
							style={{ fontSize: 30, color: '#4d4d4e', fontWeight: 600 }}
						>
							{t('About Alaska Red Sea Cucumber')}
						</Typography>
						<Typography style={{ fontSize: 20, color: '#4d4d4e' }}>
							{t(
								'The Alaska red sea cucumber (Parastichopus californicus), also named giant red sea cucumber, is the only sea cucumber species harvested commercially in British Columbia. The commercial fishery is a limited entry fishery with 85 license eligibilities. The fishery commences in October and is scheduled for 8 weeks. Alaska red sea cucumber is widely recognized in the Chinese market for its stout muscle and high nutritional value. China is the largest market for sea cucumber, where the skins have been used for centuries as a medicinal food.'
							)}
							<br />
							<br />
							{t(
								'Alaska red sea cucumbers are harvested by divers through artificial diving and fishing methods, and are transported to the processing factory on the same day for ecological processing, including strict screening, cleaning of internal organs, cooking under constant temperature, and aseptic drying.The whole process is under strict supervision of the Canadian Food Inspection Agency. The quality and origin are guaranteed.'
							)}
						</Typography>
					</div>
				</Grid>
				<Grid item xs>
					<video
						src='https://seacoo-dev.s3.amazonaws.com/videos/westcoast/west-coast.mp4'
						controls
						style={{ width: '80%', margin: '80px auto' }}
					></video>
				</Grid>
			</Grid>
			<div className={classes.introPortal}>
				<Grid container className='portal-container'>
					<Grid item xs className='history-portal'>
						<div className='title'>
							<HashLink to='/red-sea-cucumber-history/#'>
								<Typography variant='h5'>{t('Industry History')}</Typography>
							</HashLink>
						</div>

						<div className='shadow'>
							<Typography>
								{t(
									'The commercial fishery is a limited entry fishery with 85 license eligibilities.​ The Alaska red sea cucumber is the only sea cucumber species harvested commercially in British Columbia.'
								)}
								&nbsp;
								<HashLink
									to='/red-sea-cucumber-history/#'
									style={{
										color: '#0080B9',
										textDecoration: 'underline',
										fontWeight: 'bold'
									}}
								>
									{t('Read More')}
								</HashLink>
							</Typography>
						</div>
					</Grid>
					<Grid item xs className='biology-portal'>
						<div className='title'>
							<HashLink to='/red-sea-cucumber-biology/#'>
								<Typography variant='h5'>
									{t('Sea Cucumber Biology')}
								</Typography>
							</HashLink>
						</div>
						<div className='shadow'>
							<Typography>
								{t(
									'It is mainly produced in the North American coastal areas off the eastern coast of the Pacific, and deep-sea cold water areas such as Vancouver and Washington.'
								)}
								&nbsp;
								<HashLink
									to='/red-sea-cucumber-biology/#'
									style={{
										color: '#0080B9',
										textDecoration: 'underline',
										fontWeight: 'bold'
									}}
								>
									{t('Read More')}
								</HashLink>
							</Typography>
						</div>
					</Grid>
					<Grid item xs className='nutrition-value-portal'>
						<div className='title'>
							<HashLink
								to={
									language === 'en'
										? '/blog/Nutrition-Value/#'
										: '/blog/d58d16ae-3b97-4de9-b16d-7114f72edf63/#'
								}
							>
								<Typography variant='h5'>{t('Nutrition Value')}</Typography>
							</HashLink>
						</div>
						<div className='shadow'>
							<Typography>
								{t(
									'Since ancient times, sea cucumbers have been consumed as an extremely valuable food or medicinal supplement.'
								)}
								&nbsp;
								<HashLink
									to={
										language === 'en'
											? '/blog/Nutrition-Value/#'
											: '/blog/d58d16ae-3b97-4de9-b16d-7114f72edf63/#'
									}
									style={{
										color: '#0080B9',
										textDecoration: 'underline',
										fontWeight: 'bold'
									}}
								>
									{t('Read More')}
								</HashLink>
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
			<Process />
			<div className={classes.advantages}>
				<div className='banner'>
					<div className='shadow'>
						<div className='text-content'>
							<Typography variant='h6'>{t('PURE SOURCE')}</Typography>
							<Typography>
								{t(
									'The habitat has rare human activity all the year round with no industries around it.'
								)}
							</Typography>
							<Typography variant='h6'>{t('PREMIUM QUALITY')}</Typography>
							<Typography>
								{t(
									'The entire process is strictly regulated by the Canadian Food Inspection Agency.'
								)}
							</Typography>
							<Typography variant='h6'>{t('PROMINENT FUNCTION')}</Typography>
							<Typography>
								{t(
									'The nutritional value and therapeutic use of sea cucumbers have been verified by a large number of scientific and medical studies.'
								)}
							</Typography>
							<Typography variant='h6'>{t('BRAND GUARANTEE')}</Typography>
							<Typography>
								{t(
									'SEACOO has always been adhering to the selection of the freshest raw materials, the most secure and strict processing procedures in order to achieve the top guaranteed quality.'
								)}
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<Gallery />
			<RecommendProducts />
		</div>
	)
}

export default WestCoast
