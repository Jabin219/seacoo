import React from 'react'
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
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='icons-container'>
				<Grid container spacing={10} style={{ marginBottom: 20 }}>
					<Grid item xs={3}>
						<img
							src='/images/products/dumpling/features/feature-icon1.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '纯净海资源' }}
						></Typography>
						<Typography>海参的生长环境纯净无开发，无污染。</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/dumpling/features/feature-icon2.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '优选品质' }}
						></Typography>
						<Typography>
							海参生产过程由加拿大食品检验局全程进行严格监管。
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/dumpling/features/feature-icon3.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '自然的味道' }}
						></Typography>
						<Typography>
							野生的天然海参具有可口的Q弹口感，简单的烹饪方式，就可为味觉带来极大的满足。
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/dumpling/features/feature-icon4.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '品牌保障' }}
						></Typography>
						<Typography>
							SEACOO一直坚持选择最新鲜的原料，最严格的加工程序，以保证顶级的品质。
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
							src='/images/products/dumpling/features/feature-icon5.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '百分百手工包制' }}
						></Typography>
						<Typography>
							手工捏合更紧实，健康放心无添加，一口吃出家的味道。
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/dumpling/features/feature-icon6.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>传统圆胖水饺</Typography>
						<Typography>
							皮薄馅大，饱满多汁，个个圆胖似元宝，财气满满，喜庆团圆。
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/dumpling/features/feature-icon7.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography
							variant='h4'
							dangerouslySetInnerHTML={{ __html: '加拿大海鲜认证' }}
						></Typography>
						<Typography>
							所有海参捕捞于北大西洋海域，并在加拿大新斯科舍省进行加工。
						</Typography>
					</Grid>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>原汁原味</Typography>
							<Typography
								variant='h5'
								dangerouslySetInnerHTML={{
									__html: '海参饺子，鲜香滋补'
								}}
							></Typography>
							<Typography>
								饺子中以北极参为原材料，纯天然，好味道，手工包，营养鲜香又滋补。家中常备，四季进补，老人小孩儿都爱吃。
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<img
							src='/images/products/dumpling/features/grid-img1.jpg'
							alt='sea cucumber'
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<img
							src='/images/products/dumpling/features/grid-img2.jpg'
							alt='sea cucumber'
						/>
					</Grid>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>开袋即食</Typography>
							<Typography variant='h5'>新鲜速冻，锁住美味</Typography>
							<Typography>
								速冻加工技术，最大程度锁鲜。开袋下锅，无需解冻，揭盖即刻还原家的感觉。冷冻
								的是水饺，心动的却是浓情的味道。
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default DumplingFeatures
