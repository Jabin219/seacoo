import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import RecommendProducts from 'components/RecommendProducts'
import MetaTags from 'react-meta-tags'
import { isSeacooCN } from 'utils'

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
const YouTubeRecommendBlog = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>YouTuber油管博主推荐好物 | 加拿大必买特产-野生海参</title>
				<meta
					name='description'
					content='加拿大野生海参是孕妇及产后都能放心吃的天然优质补品，营养丰富，
					老少皆宜。SEACOO的海参内脏清理的干净，海洋清香无异味，分量足，无碎屑剥落，久
					泡不变形。'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					知名YouTuber油管博主的好物推荐 – 在加拿大最值得买的特产
				</Typography>
				<Typography>
					居住在加拿大的小明博主来分享好物啦！~
					<br />
					<br />
					这期是物美质优的SEACOO加拿大北极参。
					<br />
					<br />
					小明为了给产后的爱人买海参补身体，大费了一番周章。在尝试过七八个品牌都不满意之
					后，终于机缘巧合的买到了SEACOO海参。
					<br />
					<br />
					SEACOO的海参到底好在哪里，让对品质要求超高的小明夫妇都能大力推荐？
					<br />
					<br />
					小编在这里简单总结了一下关键词，观看完整版请点击视频。
				</Typography>
				<Typography>
					#百分百天然无添加 #肉质紧实 #泡发不变形 #无碎屑剥落 #完全清理内脏
					#无腥味异味 # 整只食用无废料 #软糯Q弹 #来自极寒零污染海域
					#生长周期长富含更多营养 #保质期长 # 泡发率高
				</Typography>
				<Typography>
					#100% natural #Tender taste #Easy to rehydrate #No chipping #Clean the
					internal organs completely #No fishy smell #From the zero-pollution
					ocean #Long shelf life #Nutrient-Rich Food #Daily supplement
					#Anti-Aging #Anti-wrinkle #Natural collagen # Good for Skin, Hair,
					Bone # Natural Antioxidants
				</Typography>
				{!isSeacooCN() ? (
					<iframe
						title='video'
						width='100%'
						height='680'
						src='https://www.youtube.com/embed/kALW-OODU0w'
						allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						style={{ margin: '0 0 20px' }}
					></iframe>
				) : (
					<video
						src='https://seacoo-dev.s3.amazonaws.com/videos/blog/YouTuber-recommend.mp4'
						controls
					></video>
				)}
			</div>
			<RecommendProducts />
		</div>
	)
}

export default YouTubeRecommendBlog
