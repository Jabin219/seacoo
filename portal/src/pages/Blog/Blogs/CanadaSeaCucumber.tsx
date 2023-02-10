import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'
import MetaTags from 'react-meta-tags'

import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	root: {
		width: 1200,
		paddingTop: 50,
		margin: '0 auto',
		'& .content': {
			width: '100%',
			paddingRight: 30,
			'& .title': {
				color: '#333',
				fontSize: 34,
				fontWeight: 600,
				letterSpacing: '0.6px',
				lineHeight: 1.4,
				borderBottom: '1px solid #f1f1f1',
				padding: '0 0 20px',
				margin: '0 0 15px'
			},
			'& .sub-tag': {
				marginTop: 75,
				marginBottom: 10,
				'& span': {
					color: '#4A90E2',
					margin: '10px 10px 10px 0',
					paddingRight: 10,
					borderRight: '1px solid #4A90E2',
					fontSize: 15,
					fontWeight: 600
				}
			},
			'& p': {
				color: '#929292',
				fontSize: 16,
				margin: '0 0 20px',
				lineHeight: 1.8,
				letterSpacing: 1
			},
			'& h3': {
				fontSize: 18,
				textAlign: 'center',
				fontWeight: 600,
				margin: '0 0 20px'
			},
			'& h4': {
				fontSize: 17,
				fontWeight: 600,
				margin: '0 0 20px',
				color: '#333',
				lineHeight: 1.4
			},
			'& img': {
				margin: '0 0 20px'
			},
			'& .blog-summary': {
				padding: 24,
				backgroundColor: '#EBEBEB',
				borderLeft: '4px solid #4A90E2',
				marginBottom: 20,
				'& h2': {
					color: '#4A90E2',
					fontSize: 20,
					fontWeight: 700,
					margin: '0 0 20px',
					lineHeight: 1.4
				},
				'& p': {
					fontSize: 16,
					color: '#777777',
					fontWeight: 600,
					margin: '0 0 20px'
				}
			}
		}
	}
})

const CanadaSeaCucumber = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<div className='content'>
				<MetaTags>
					<title>那些自称产地加拿大的冒牌海参长什么样？</title>
					<meta
						name='description'
						content='自从加拿大的阿拉斯加红刺参、北极参火了之后，各国海参争相出来冒充。学会鉴别真假加拿大野生海参，买海参不踩坑！'
					/>
				</MetaTags>
				<Typography variant='h2' className='title'>
					[实用]市面上那么多海参自称是加拿大出产，真正来自于加拿大的海参是哪几个品种呢?
				</Typography>
				<Typography variant='h3'>1</Typography>
				<Typography variant='h3'>从图和外观上去对比</Typography>
				<Typography variant='h4'>西海岸之阿拉斯加红刺参篇</Typography>
				<Typography variant='h4'>
					第一假： 美国暖水域岩刺参冒充阿拉斯加红刺参
				</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber1.jpg'
					alt={
						language === 'en'
							? 'Canadian local sea cucumber'
							: '美国岩刺参冒充红刺参'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>
					第二假：土耳其米刺参冒充阿拉斯加红刺参
				</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber2.jpg'
					alt={
						language === 'en'
							? 'Counterfeit Canadian Sea Cucumber'
							: '土耳其米刺参'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>第三假：养殖辽参冒充阿拉斯加红刺参</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber3.jpg'
					alt={
						language === 'en'
							? 'fake Canadian Sea Cucumber'
							: '辽参冒充阿拉斯加红刺参'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>东海岸之北极海参篇</Typography>
				<Typography variant='h4'>
					第一假： 东南亚热带海域茄子参冒充北极参
				</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber4.jpg'
					alt={
						language === 'en' ? 'Sea Cucumber Varieties' : '东南亚热带海茄子'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>第二假：非洲海域白灰秃参冒充北极参</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber5.jpg'
					alt={
						language === 'en' ? 'Black long sea cucumber' : '非洲海域白灰秃参'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>第三假：墨西哥湾盐参冒充北极参</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber6.jpg'
					alt={
						language === 'en' ? 'Mexican dried sea cucumber' : '墨西哥湾盐参'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h3'>2</Typography>
				<Typography variant='h3'>真正产自加拿大的海参</Typography>
				<Typography variant='h3'>阿拉斯加红刺参和北极参）</Typography>
				<Typography variant='h3'>一些特性</Typography>
				<Typography variant='h4'>
					1、两参在活体与蒸煮烘干后的体表颜色
				</Typography>
				<Typography>
					不管是红刺参和北极海参，在海参活体的时候都是具有红色的表皮特征
				</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber7.jpg'
					alt={language === 'en' ? 'Sea cucumber delicacies' : '海参的口感'}
					style={{ width: '30%' }}
				/>
				<Typography>在蒸煮烘干后，表皮颜色变成黑色以及黑灰色</Typography>
				<Typography variant='h4'>2、两种参种的内筋颜色都极为特殊</Typography>
				<Typography>北极海参的内筋颜色为鲜艳的橘红色</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber8.jpg'
					alt={
						language === 'en' ? 'tender sea cucumber' : '北极参与养殖海参对比'
					}
					style={{ width: '65%' }}
				/>
				<img
					src='/images/blog/canadacucumber/canadacucumber9.jpg'
					alt={
						language === 'en' ? 'tender Sea cucumber' : '劣质海参与优质海参对比'
					}
					style={{ width: '65%' }}
				/>
				<Typography variant='h4'>3、两种海参的产地都安全可靠</Typography>
				<Typography>
					阿拉斯加红刺参的产地来自于加拿大西岸海域，南从温哥华海岸附近一直延伸到阿拉斯加沿海，此海域仅有这一种海参，常年水温寒冷。
					<br />
					<br />
					北极海参的产地来自于加拿大的东海岸海域，由nova
					scotia省一直向北延伸到北极海域附近，此海域仅有这一种海参，常年水温寒冷。
				</Typography>
				<img
					src='/images/blog/canadacucumber/canadacucumber10.jpg'
					alt=''
					style={{ width: '100%' }}
				/>
				<Typography variant='h3'>3</Typography>
				<Typography variant='h3'>
					有的客户问怎么才能不被骗呢，市场这么复杂我们应该怎么办?
				</Typography>
				<Typography>
					最简单的方法就是认准SEACOO品牌旗下的海参，放心购买，健康无忧。
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default CanadaSeaCucumber
