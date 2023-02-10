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
const CollagenFeatures = () => {
	const { i18n } = useTranslation()
	const lng = i18n.language
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='icons-container'>
				<Grid container spacing={10} style={{ marginBottom: 20 }}>
					<Grid item xs={3}>
						<img
							src='/images/products/beche-collagen/features/feature-icon1.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Firming,<br />Tightening,<br />Anti-aging' }
									: { __html: '紧肤，<br />抗衰老' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'Collagen is the most abundant protein in your body.'
								: '鸡冠中的胶原蛋白含有的透明质酸是普通胶原蛋白强度的7倍。'}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/beche-collagen/features/feature-icon2.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Instant Dissolve<br />Fast Absorb' }
									: { __html: '即时溶解<br />快速吸收' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'Our secret formula! Very fine dehydrated collagen and Sea Cucumber powder can be easily absorbed by your body.'
								: '我们的专利配方！小分子脱水胶原蛋白和海参粉可轻易被人体吸收哦。'}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/beche-collagen/features/feature-icon3.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Individual<br />Package' }
									: { __html: '独立包装' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'Each serving is packaged individually, the beche supplement drink can be easily carried with you everyday, everywhere.'
								: '无锯齿专利包装技术，独立小包，方便携带，让美丽随行。'}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/beche-collagen/features/feature-icon4.png'
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
								: '天然海参精华粉的添加让其功能性更完善，免疫力更平衡。'}
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
							src='/images/products/beche-collagen/features/feature-icon5.png'
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
								? 'Bêche is already helping many Canadians unlock a broad spectrum of health benefits, elevate their quality of life and make a significantly positive impact on their well-being.'
								: 'Beche被加拿大机场免税店认定为唯一海参系列保健品供应商，并受到了加拿大多地医疗诊所的强烈推荐。'}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/beche-collagen/features/feature-icon6.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'Sustainable<br />Source' }
									: { __html: '可持续资源 ' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'Environmentally and Sustainbly supportive in every element of the supply-chain. We can think of no better way to honor the marine life that producing the most nutrient-rich supplements.'
								: 'Beche产品所有的原料来源均为可持续捕捞和生产资源。'}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/beche-collagen/features/feature-icon7.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={
								lng === 'en'
									? { __html: 'All Natural<br />Ingredients' }
									: { __html: '纯天然原料' }
							}
						></Typography>
						<Typography>
							{lng === 'en'
								? 'All ingredients are extracted from natural organic source.'
								: '天然有机的原料成分让消费者吃的更放心。'}
						</Typography>
					</Grid>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>
								{lng === 'en' ? 'Hyaluronic Acid Collagen' : '透明质酸胶原蛋白'}
							</Typography>
							<Typography
								variant='h5'
								dangerouslySetInnerHTML={
									lng === 'en'
										? {
												__html:
													'Natural Collagen Supplement：<br />Skin, Hair, Bone'
										  }
										: { __html: '天然胶原蛋白补充剂：<br/>皮肤，头发，骨骼' }
								}
							></Typography>
							<Typography>
								{lng === 'en'
									? 'Taking collagen supplements has been shown to reduce inflammation and stimulate collagen synthesis in the body. This may help promote pain relief among people with joint disorders like osteoarthritis.'
									: '已显示服用胶原蛋白补充剂可减少炎症并刺激体内胶原蛋白的合成。 这可能有助于促进关节疾病（如骨关节炎）患者的疼痛缓解。'}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<img
							src='/images/products/beche-collagen/features/grid-img1.jpg'
							alt='sea cucumber'
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<img
							src='/images/products/beche-collagen/features/grid-img2.jpg'
							alt='sea cucumber'
						/>
					</Grid>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>
								{lng === 'en' ? 'Sea Cucumber' : '海参'}
							</Typography>
							<Typography variant='h5'>
								{lng === 'en'
									? 'Antioxidants for Good Health'
									: '保护健康的抗氧化剂'}
							</Typography>
							<Typography>
								{lng === 'en'
									? 'Get you daily boost of antioxidants protecting your cells from oxidative damage caused by free radicals with a uniquely concentrated, encapsulated powder.'
									: '独特浓缩的海参精华粉，给您带来每天所需的抗氧化剂，保护您的细胞免受自由基造成的氧化损伤。'}
							</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>
								{lng === 'en' ? 'Fructo oligosaccharide' : '低聚果糖'}
							</Typography>
							<Typography variant='h5'>
								{lng === 'en' ? 'The Healthier Sugar' : '一种更健康的糖份'}
							</Typography>
							<Typography>
								{lng === 'en'
									? 'Fructooligosaccharides are subtly sweet and low-calorie. They are nondigestible, so they don’t have an effect on blood sugar levels.'
									: '低聚果糖微甜且热量低，对人体的肠道有着很好的改善作用，并不会造成血糖的升高。'}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<img
							src='/images/products/beche-collagen/features/grid-img3.jpg'
							alt='sea cucumber'
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default CollagenFeatures
