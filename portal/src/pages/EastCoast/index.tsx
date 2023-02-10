import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'
import RecommendProducts from './RecommendProducts'
import Gallery from './Gallery'
import Process from './Process'

const EastCoast = () => {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<div>
			<MetaTags>
				<title>
					{t('Nova Scotia Atlantic Sea Cucumber - East Coast Canada | Seacoo')}
				</title>
				<meta
					name='description'
					content={t(
						'Atlantic Sea Cucumber come from zero-polluted North Atlantic. Pure natural wild sea cucumber, no additives, rich in nutrients.'
					)}
				/>
			</MetaTags>
			<div className={classes.banner}>
				<img
					src='/images/eastcoast/eastcoast-logo.png'
					alt={
						language === 'en'
							? 'east coast atlantic sea cucumber'
							: '加拿大东海岸北极参'
					}
				/>
				<Typography variant='h2'>{t('EAST COAST')}</Typography>
				<Typography variant='h4'>{t('Atlantic Sea Cucumber')}</Typography>
			</div>
			<Grid container>
				<Grid item xs={6} style={{ marginRight: 50 }}>
					<div style={{ width: '80%', margin: '80px 150px' }}>
						<Typography
							variant='h6'
							style={{ fontSize: 30, marginBottom: 20, fontWeight: 700 }}
						>
							{t('About Atlantic Sea Cucumbers')}
						</Typography>
						<Typography style={{ fontSize: 20 }}>
							{t(
								'Atlantic sea cucumbers are harvested by trawling. The fishing boat lands early the next morning after catching. Then sea cucumbers are sent to our factory within 30 minutes. Rigorous screening, visceral, boiling and drying steps will take place. The entire process is strictly regulated by the Canadian Food Inspection Agency. The nutrients of Atlantic sea cucumber are presented in the most natural and ecologically pleasing way.'
							)}
							<br />
							<br />
							{t(
								'SEACOO has always been adhering to the selection of the freshest raw materials, the most secure and strict processing procedures in order to achieve the top guaranteed quality.'
							)}
						</Typography>
					</div>
				</Grid>
				<Grid item xs>
					<video
						src='https://seacoo-dev.s3.amazonaws.com/videos/eastcoast/east-coast.mp4'
						controls
						style={{ width: '80%', margin: '80px auto' }}
					></video>
				</Grid>
			</Grid>
			<div className={classes.introPortal}>
				<Grid container className='portal-container'>
					<Grid item xs className='history-portal'>
						<div className='title'>
							<HashLink to='/atlantic-sea-cucumber-history/#'>
								<Typography variant='h4'>{t('Industry History')}</Typography>
							</HashLink>
						</div>
						<div className='shadow'>
							<Typography>
								{t(
									'Canadian atlantic sea cucumber (Cucumaria frondosa) officially began commercial fishing in 1998. The first fishing area locates at the eastern coast of Nova Scotia.'
								)}
								<HashLink
									to='/atlantic-sea-cucumber-history/#'
									style={{
										color: '#0080B9',
										textDecoration: 'underline',
										fontWeight: 'bold'
									}}
								>
									&nbsp;{t('Read More')}
								</HashLink>
							</Typography>
						</div>
					</Grid>
					<Grid item xs className='biology-portal'>
						<div className='title'>
							<HashLink to='/atlantic-sea-cucumber-biology/#'>
								<Typography variant='h4'>
									{t('Sea Cucumber Biology')}
								</Typography>
							</HashLink>
						</div>
						<div className='shadow'>
							<Typography>
								{t(
									'Atlantic sea cucumber (Cucumaria frondosa) is produced on the eastern coast of Canada and cover vast areas of the substrate at depths of less than 30 meters (100 ft).'
								)}
								&nbsp;
								<HashLink
									to='/atlantic-sea-cucumber-biology/#'
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
								<Typography variant='h4'>{t('Nutrition Value')}</Typography>
							</HashLink>
						</div>
						<div className='shadow'>
							<Typography>
								{t(
									'Since ancient times, sea cucumbers have been consumed as an extremely valuable food or medicinal supplement. They are rich in mucopolysaccharides and shows ACE activity.'
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

export default EastCoast
