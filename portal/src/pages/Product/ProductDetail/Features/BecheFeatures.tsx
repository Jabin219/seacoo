import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		'& .additional-description': {
			'& .additional-description-img': {
				'& img': {
					width: '100%'
				}
			},
			'& h4 p': {
				fontSize: 20
			}
		},
		'& .description-img-group': {
			marginTop: 50,
			marginBottom: 50,
			'& img': {
				width: '100%',
				marginBottom: 10
			},
			'& p': {
				color: '#4d4d4e',
				fontSize: 14,
				letterSpacing: '0.17px',
				lineHeight: '18px'
			}
		},
		'& .logo-group': {
			maxWidth: 667,
			margin: '0 auto',
			'& .logo-container': {
				width: '70%',
				margin: '0 auto',
				marginBottom: 20,
				'& img': {
					width: '100%'
				}
			},
			'& h6': {
				fontSize: 14,
				fontWeight: 500,
				letterSpacing: '0.24px',
				lineHeight: '24px',
				textAlign: 'center'
			}
		},
		'& .introduction': {
			marginBottom: 20,
			'& h4, p': {
				fontSize: 20,
				letterSpacing: '0.24px',
				lineHeight: '26px'
			},
			'& h4': {
				fontWeight: 600
			},
			'& p': {
				fontWeight: 400
			}
		},
		'& .east-coast, .west-coast': {
			width: '100%'
		}
	}
})
const BecheFeatures = () => {
	const { i18n } = useTranslation()
	const lng = i18n.language
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container spacing={8} className='additional-description'>
				<Grid item xs={6} className='additional-description-img'>
					<img src='/images/products/beche/product-img2.jpg' alt='' />
				</Grid>
				<Grid
					item
					xs={6}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center'
					}}
				>
					<Typography
						variant='h4'
						className='title'
						style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
					>
						{lng === 'en' ? 'Product Details' : '产品细节'}&nbsp;&nbsp;
					</Typography>
					<br />
					<br />
					<div>
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							{lng === 'en' ? 'Medicinal Ingredients:' : '胶囊成分：'}
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							{lng === 'en' ? 'Sea Cucumber' : '海参'}&nbsp;
							{lng === 'en'
								? '(Cucumaria frondosa, Whole) ………………….600mg'
								: '（北极参，整）......600毫克'}
						</Typography>
						<br />
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							{lng === 'en' ? 'Recommended Dose:' : '推荐剂量：'}
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							{lng === 'en'
								? 'Adult – Take 1 capsules once daily.'
								: '成人 – 每天服用1粒胶囊'}
						</Typography>
						<br />
						<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
							{lng === 'en' ? 'Recommended Use:' : '作用：'}
						</Typography>
						<br />
						<Typography style={{ textAlign: 'center' }}>
							{lng === 'en'
								? 'Source of antioxidants. Source of amino acids involved in muscle protein synthesis.'
								: '是抗氧化剂的来源以及参与肌肉蛋白质合成的氨基酸的来源'}
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid container className='description-img-group' spacing={2}>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img1.jpg'
							alt='product-detail-img1'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en'
								? 'Wild Caught, Sustainably Sourced'
								: '可持续的野生捕捞'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'This powerful addition to your healthy routine supports marine conservation and is aligned with Canada’s strict ocean protection standards.'
								: '这是您日常健康活动的有力补充，可支持海洋保护，并符合加拿大严格的海洋保护标准。'}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img2.jpg'
							alt='product-detail-img2'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en'
								? 'From Clean and Cold Canadian Waters'
								: '来自纯净寒冷的加拿大海域'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'Trust the benefits of Canadian Sea Cucumber carefully harvested from the clean, cold waters by family fisheries off the coast of Nova Scotia.'
								: '我们使用的海参是由值得信任的新斯科舍省沿岸渔民从清澈的寒冷海水水中精心捕捞的北极海参。'}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img3.jpg'
							alt='product-detail-img3'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en'
								? '100% Encapsulated Sea Cucumber'
								: '100％海参营养封装'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'With absolutely no fillers, artificial ingredients, preservatives or sweeteners, you get the full benefit of 100% encapsulated Canadian Sea Cucumber.'
								: '完全没有填充剂，人造成分，防腐剂或甜味剂，您将完全受益于100％封装的加拿大海参。'}
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid container className='description-img-group' spacing={2}>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img4.jpg'
							alt='product-detail-img4'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en' ? 'Immune System Support' : '免疫系统支持'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'Get deep immune support that enhances your body’s natural defences with support for the most critical cells in your immune system.'
								: '获得深层的免疫支持，通过支持免疫系统中最关键的细胞来增强人体的自然防御能力。'}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img5.jpg'
							alt='product-detail-img5'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en'
								? 'Antioxidants for Good Health'
								: '抗氧化剂，身体健康'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'Get you daily boost of antioxidants protecting your cells from oxidative damage caused by free radicals with a uniquely concentrated, encapsulated powder.'
								: '使用独特浓缩的胶囊化粉末，每天为您提供抗氧化剂的增强，保护您的细胞免受自由基造成的氧化损害。'}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div>
						<img
							src='/images/products/beche/product-detail-img6.jpg'
							alt='product-detail-img6'
						/>
						<Typography style={{ fontWeight: 'bold' }}>
							{lng === 'en'
								? 'An Important Source of Amino Acids'
								: '氨基酸的重要来源'}
						</Typography>
						<br />
						<Typography>
							{lng === 'en'
								? 'Support the critical function of amino acids required for building proteins and synthesis of hormones and neurotransmitters.'
								: '海参成分能支持构建蛋白质以​​及合成激素和神经递质所需的氨基酸的关键功能。'}
						</Typography>
					</div>
				</Grid>
			</Grid>
			<div className='logo-group'>
				<Grid container className='logo-container'>
					<Grid item xs={6}>
						<img src='/images/products/beche/seacoo-logo.png' alt='' />
					</Grid>
					<Grid item xs>
						<img src='/images/products/beche/beche-logo.png' alt='' />
					</Grid>
				</Grid>
				<Typography variant='h6'>
					{lng === 'en'
						? 'Bêche is exclusively available through SEACOO®. The two organizations collaborate to ensure you have the purest, highest quality Sea Cucumber extract possible, no matter where you wish to purchase your daily dose of this remarkable natural health remedy. You can learn more about Bêche on their website'
						: 'Bêche通过SEACOO®独家提供，你可以在任何地方购买这种非凡的天然健康药物。两个组织通过合作确保您可以获得最纯净，最优质的海参产品。想要了解更多Bêche相关信息，请访问官方网站'}
					<br />
					www.beche.ca
				</Typography>
			</div>
		</div>
	)
}

export default BecheFeatures
