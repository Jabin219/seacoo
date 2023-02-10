import React from 'react'
import { useStyles } from './style'
import HomeCarousel from 'components/HomeCarousel'
import { Button, Grid, Typography } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import MetaTags from 'react-meta-tags'
import BecheChowder from './BecheChowder'
import SeaCucumbers from './SeaCucumbers'
import BecheCollagen from './BecheCollagen'
import HomeContact from './HomeContact'
import { blogsZhCN } from './blogs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeCN = () => {
	const classes = useStyles()
	return (
		<div className={classes.home}>
			<MetaTags>
				<title>加拿大野生淡干海参｜SEACOO</title>
				<meta
					name='description'
					content='加拿大顶级淡干北极参、红刺参，机场免税店唯一官方合作海参品牌。从加拿大东西海岸捕捞、加工到包装，真正从海洋到餐桌全程追溯。养颜保健，送礼佳品。'
				/>
			</MetaTags>
			<HomeCarousel />
			<div className='home-products'>
				<SeaCucumbers />
				<BecheChowder />
				<BecheCollagen />
				<HomeContact />
			</div>
			<div className='home-blogs'>
				<Grid container>
					<Grid item xs>
						<div className='blogs-header'>
							<div className='text-container'>
								<Typography variant='h6' style={{ fontSize: 16 }}>
									博客
								</Typography>
								<Typography variant='h6' style={{ fontSize: 20 }}>
									超级食品海参
								</Typography>
								<Typography style={{ fontSize: 14 }}>
									从远古时代开始，海参就被当作极有价值的食物或药用补充剂食用。
								</Typography>
								<HashLink to='/blog/#' style={{ textDecoration: 'none' }}>
									<Button variant='outlined'>阅读更多</Button>
								</HashLink>
							</div>
						</div>
					</Grid>
					{blogsZhCN.map(blog => (
						<Grid key={blog.title} item xs className='home-blog-card'>
							<HashLink to={`${blog.path}/#`} className='blog-img'>
								<LazyLoadImage src={blog.image} alt='' />
							</HashLink>
							<div className='blog-info'>
								<HashLink to={`${blog.path}/#`}>{blog.title}</HashLink>
								<Typography>{blog.shortContent}</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
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
							<Typography variant='h6'>关于 SEACOO</Typography>
							<Typography>
								SEACOO是RSG
								旗下主要专注于海参以及海洋类健康食品的品牌，品牌起源于加拿大东海岸海洋城市Halifax，经过多年的发展，SEACOO先后在Halifax建立了东海岸北极海参捕捞基地，和在Vancouver建立了西海岸红刺海参捕捞基地；
								也是唯一同时拥有东西海岸两座CFIA（加拿大食品检验局）认证的海参加工工厂，从野生捕捞，加工，包装等生产环节上，真正做到了全程追溯，全程监管。
							</Typography>
							<HashLink to='/about/#'>
								<Button variant='outlined' color='primary'>
									查看详情
								</Button>
							</HashLink>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	)
}

export default HomeCN
