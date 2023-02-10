import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const useStyles = makeStyles({
	root: {
		maxWidth: 900,
		margin: '0 auto',
		marginBottom: 200,
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
			marginTop: 150,
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
const ChowderFeatures = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='icons-container'>
				<Grid container spacing={10} style={{ marginBottom: 20 }}>
					<Grid item xs={3}>
						<img
							src='/images/products/chowder/features/feature-icon1.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>纯净海资源</Typography>
						<Typography>
							加拿大北极参与大西洋鳕鱼胶来自于纯净无开发的自然环境，健康无污染。
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/chowder/features/feature-icon2.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>优选品质</Typography>
						<Typography>
							获得SC中国食品生产许可，食品加工全程进行严格监管。
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/chowder/features/feature-icon3.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>自然的味道</Typography>
						<Typography>
							佛跳墙选用加拿大北极海参、大西洋鳕鱼胶等汇聚到一起，加入高汤，文火煨制而成。软嫩柔润，浓郁荤香，荤而不腻。
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src='/images/products/chowder/features/feature-icon4.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>功能突出</Typography>
						<Typography>
							鳕鱼胶富含优质胶原蛋白，它与海参同食具有滋阴的功效，补充元气，延缓衰老，提升免疫力，很适合女性及老人食用。
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
							src='/images/products/chowder/features/feature-icon5.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>品牌保障</Typography>
						<Typography>
							SEACOO一直坚持选择最新鲜的原料，最严格的加工程序，以保证顶级的品质。
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/chowder/features/feature-icon6.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>可持续资源</Typography>
						<Typography>
							本产品所有的原料来源均为可持续捕捞和生产的资源，坚持维护海洋生态平衡。
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<img
							src='/images/products/chowder/features/feature-icon7.png'
							alt='feature-icon'
							className='icon'
						/>
						<Typography variant='h4'>易拉即食</Typography>
						<Typography>
							只要简单加热便可即刻享用的高档菜品，无需等待，美味随时随地。
						</Typography>
					</Grid>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>原汁原味</Typography>
							<Typography variant='h5'>低热量，高蛋白质</Typography>
							<Typography>
								膳食中添加蛋白质源，可通过减慢胃排空来帮助您保持饱腹感。海参还富含称为三萜糖苷的化合物，它们具有抗真菌，抗肿瘤和增强免疫力的特性。
							</Typography>
						</div>
					</Grid>
					<Grid item xs={6}>
						<LazyLoadImage
							src='/images/products/chowder/features/grid-img1.jpg'
							alt='sea cucumber'
							effect='blur'
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<LazyLoadImage
							src='/images/products/chowder/features/grid-img2.jpg'
							alt='sea cucumber'
							effect='blur'
						/>
					</Grid>
					<Grid item xs={6}>
						<div className='text-container'>
							<Typography variant='h6'>揭盖加热</Typography>
							<Typography variant='h5'>天然抗衰老</Typography>
							<Typography>
								鳕鱼胶富含的胶原蛋白可以使肌肤保湿滋润，恢复弹性，改善松弛，收紧皮肤，淡化皱纹。其中还含有丰富的镁元素等矿物质，可以预防高血压、心肌梗死等疾病，对心血管系统起到保护作用。
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default ChowderFeatures
