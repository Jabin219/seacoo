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
const EastFeatures = () => {
	const { i18n } = useTranslation()
	const lng = i18n.language
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Pure<br />Source' }
									: { __html: '纯净海资源' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'This habitat has rare human activities all year round and without industry around it.'
								: '海参的生长环境纯净无开发，无污染。'}
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Premium<br />Quality' }
									: { __html: '优选品质' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'The entire process is strictly regulated by the Canadian Food Inspection Agency.'
								: '海参生产过程由加拿大食品检验局全程进行严格监管。'}
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Natural<br />Taste' }
									: { __html: '自然的味道' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'The natural Sea Cucumber offers a tender and gelatinous taste, sea cucumber has bland flavor but it can absorb flavors very well.'
								: '野生的天然海参具有可口的Q弹口感，简单的烹饪方式，就可为味觉带来极大的满足。'}
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Prominent<br />Function' }
									: { __html: '功能突出' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'The nutritional value and therapeutic use of sea cucumbers have been verified by a large number of scientific and medical studies.'
								: '大量的实验和研究证实，海参具有丰富的营养价值和辅助治疗疾病的功效。'}
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Brand<br />Gurantee' }
									: { __html: '品牌保障' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'SEACOO has always been adhering to the freshest raw materials selection, the most strict processing procedures, to achieve the top guaranteed quality.'
								: 'SEACOO一直坚持选择最新鲜的原料，最严格的加工程序，以保证顶级的品质。'}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/east-coast-bag/features/feature-icon6.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>
							{lng === 'en' ? 'Sustainable' : '可持续资源 '}
						</Typography>
						<Typography>
							{lng === 'en'
								? 'Canadian sea cucumbers are harvested in strict accordance with the quota system stipulated by DFO (Canada Fisheries Administration), and the annual catch is strictly controlled, ensuring the sustainable development of sea cucumber resources.'
								: '加拿大海参严格按照DFO（加拿大渔业管理局）规定进行配额制捕捞，每年的捕捞量受严格的监管，以确保海参资源的可持续性发展。'}
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
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Canadian<br />Sea Food' }
									: { __html: '加拿大<br />海鲜认证' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? '100% Guarantee that sea cucumbers are captured by North Atlantic Ocean, processed and Packaged in Nova Scotia, Canada.'
								: '所有海参捕捞于北大西洋海域，并在加拿大新斯科舍省进行加工。'}
						</Typography>
					</Grid>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>
								{lng === 'en' ? 'Benefits' : '益处'}
							</Typography>
							<Typography
								variant='h5'
								dangerouslySetInnerHTML={
									lng === 'en'
										? {
												__html:
													'Super Seafood：<br />Low in Calories, High in Protein'
										  }
										: { __html: '超级海鲜：<br />低热量，高蛋白质' }
								}
							></Typography>
							<Typography>
								{lng === 'en'
									? 'Adding protein sources to meals helps keep you full by slowing the emptying of your stomach. Sea cucumbers are also rich in compounds called triterpene glycosides, which possess antifungal, antitumor, and immune-boosting properties.'
									: '膳食中添加蛋白质源，可通过减慢胃排空来帮助您保持饱腹感。 海参还富含称为三萜糖苷的化合物，它们具有抗真菌，抗肿瘤和增强免疫力的特性。'}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<img
							src='/images/products/east-coast-bag/features/grid-img1-split.jpg'
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
							<Typography variant='h6'>
								{lng === 'en' ? 'Benefits' : '益处'}
							</Typography>
							<Typography variant='h5'>
								{lng === 'en' ? 'Natural Antioxidant' : '天然抗氧化剂'}
							</Typography>
							<Typography>
								{lng === 'en'
									? 'Sea Cucumber brings you daily boost of antioxidants protecting your cells from oxidative damage caused by free radicals with the wild-caught Atlantic sea cucumber.'
									: '海参能为您带来日常抗氧化的增强，保护您的细胞免受自由基引起的氧化损伤。'}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default EastFeatures
