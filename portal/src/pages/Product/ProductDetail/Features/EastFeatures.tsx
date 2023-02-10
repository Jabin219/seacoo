import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		maxWidth: 900,
		margin: '0 auto',
		'& .icons-container': {
			'& .MuiGrid-container': {
				'& .MuiGrid-item': {
					'& .icon': {
						display: 'block',
						width: 50,
						height: 50,
						marginBottom: 10
					},
					'& h4': {
						fontSize: 20,
						fontWeight: 'bold',
						lineHeight: '24px',
						letterSpacing: 0.24,
						marginBottom: 5
					},
					'& p': {
						fontSize: 14,
						lineHeight: '18px',
						letterSpacing: 0.17
					}
				}
			}
		},

		'& .grid-container': {
			backgroundColor: '#f5f5f5',
			'& .MuiGrid-container': {
				height: '100%',
				'& .MuiGrid-item': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					'& img': {
						width: '100%'
					},
					'& .text-container': {
						padding: '0 50px',
						'& h6': {
							color: '#a87c98',
							fontSize: 14,
							fontWeight: 'bold',
							lineHeight: '18px',
							letterSpacing: 0.17,
							marginBottom: 5
						},
						'& h5': {
							fontSize: 20,
							fontWeight: 'bold',
							lineHeight: '24px',
							letterSpacing: 0.17,
							marginBottom: 23
						},
						'& p': {
							fontSize: 14,
							lineHeight: '18px',
							letterSpacing: 0.17
						}
					}
				}
			}
		}
	}
})
const DumplingFeatures = () => {
	const { t } = useTranslation()
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='icons-container'>
				<Grid container spacing={10} style={{ marginBottom: 20 }}>
					<Grid item xs={3}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon1.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Pure<br />Source') }}
						></Typography>
						<Typography>
							{t(
								'This habitat has rare human activities all year round and without industry around it.'
							)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon2.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Premium<br />Quality') }}
						></Typography>
						<Typography>
							{t(
								'The entire process is strictly regulated by the Canadian Food Inspection Agency.'
							)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon3.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Natural<br />Taste') }}
						></Typography>
						<Typography>
							{t(
								'The natural Sea Cucumber offers a tender and gelatinous taste, sea cucumber has bland flavor but it can absorb flavors very well.'
							)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon4.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Prominent<br />Function') }}
						></Typography>
						<Typography>
							{t(
								'The nutritional value and therapeutic use of sea cucumbers have been verified by a large number of scientific and medical studies.'
							)}
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={10}
					style={{ width: 700, margin: '0 auto', marginBottom: 50 }}
				>
					<Grid item xs={4}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon5.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Brand<br />Guarantee') }}
						></Typography>
						<Typography>
							{t(
								'SEACOO has always been adhering to the freshest raw materials selection, the most strict processing procedures, to achieve the top guaranteed quality.'
							)}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon6.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>{t('Sustainable')}</Typography>
						<Typography>
							{t(
								'Canadian sea cucumbers are harvested in strict accordance with the quota system stipulated by DFO (Canada Fisheries Administration), and the annual catch is strictly controlled, ensuring the sustainable development of sea cucumber resources.'
							)}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon7.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: t('Canadian<br />Sea Food') }}
						></Typography>
						<Typography>
							{t(
								'100% Guarantee that sea cucumbers are captured by North Atlantic Ocean, processed and Packaged in Nova Scotia, Canada.'
							)}
						</Typography>
					</Grid>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>{t('Benefits')}</Typography>
							<Typography
								variant='h5'
								dangerouslySetInnerHTML={{
									__html: t(
										'Super Seafood：<br />Low in Calories, High in Protein'
									)
								}}
							></Typography>
							<Typography>
								{t(
									'Adding protein sources to meals helps keep you full by slowing the emptying of your stomach. Sea cucumbers are also rich in compounds called triterpene glycosides, which possess antifungal, antitumor, and immune-boosting properties.'
								)}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<img
							src='/images/products/east-coast-bag/features/grid-img1.jpg'
							alt='sea cucumber'
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<img
							src='/images/products/east-coast-bag/features/grid-img2.jpg'
							alt='sea cucumber'
						/>
					</Grid>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>{t('Benefits')}</Typography>
							<Typography variant='h5'>{t('Natural Antioxidant')}</Typography>
							<Typography>
								{t(
									'Sea Cucumber brings you daily boost of antioxidants protecting your cells from oxidative damage caused by free radicals with the wild-caught Atlantic sea cucumber.'
								)}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default DumplingFeatures
