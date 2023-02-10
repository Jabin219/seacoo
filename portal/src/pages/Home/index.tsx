import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import HomeCarousel from 'components/HomeCarousel'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'
import BechePowder from './BechePowder'
import SeaCucumbers from './SeaCucumbers'
import BecheCollagen from './BecheCollagen'
import HomeContact from './HomeContact'
import HomeBlogs from './HomeBlogs'

const Home = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.home}>
			<MetaTags>
				<title>{t('Wild Dried Canadian Sea Cucumber | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						'The most well-known sea cucumber brand in North America. Canadian sea cucumber come from the east coast and west coast of Canada.'
					)}
				/>
			</MetaTags>
			<HomeCarousel />
			<div>
				<div className='home-products'>
					<BechePowder />
					<SeaCucumbers />
					<BecheCollagen />
					<HomeContact />
				</div>
				<HomeBlogs />
				<div className='home-about-container'>
					<div className='home-about'>
						<Grid container spacing={10}>
							<Grid item xs={6}>
								<video
									src='https://seacoo-dev.s3.amazonaws.com/videos/home/about-seacoo.mp4'
									controls
								></video>
							</Grid>
							<Grid item xs={6} className='home-about-info'>
								<Typography variant='h6'>{t('ABOUT SEACOO')}</Typography>
								<Typography>
									{t(
										'SEACOO adheres to the principle of local procurement and production. All of the fresh sea cucumbers are sent to processing plants immediately right after harvest to ensure the best quality and nutritional value. SEACOO dedicates to providing the world’s customers with the best quality dried sea cucumber products.'
									)}
								</Typography>
								<HashLink to='/about/#'>
									<Button variant='outlined' color='primary'>
										{t('Learn more')}
									</Button>
								</HashLink>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
