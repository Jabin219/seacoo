import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'
import { useTranslation } from 'react-i18next'
import MetaTags from 'react-meta-tags'

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

const MostIn = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>图解对比优质海参与劣质海参，看这一篇就够了！</title>
				<meta
					name='description'
					content='详解正宗加拿大野生北极参的外形，口感，气味。如何通过“海参筋”是判断海参优劣？哪片海参产地的海参品质最佳？'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					[科普]最in干货，手把手教你，如何选购优质北极参！
				</Typography>
				<Typography variant='h3'>1</Typography>
				<Typography variant='h3'>
					常规辨别北极参的优劣——需要：“一看”、“二尝”、“三闻”
				</Typography>
				<img
					src='/images/blog/mostin/mostin1.jpg'
					alt={
						language === 'en'
							? 'Atlantic sea cucumbers characteristics'
							: '加拿大野生北极参特点'
					}
					style={{ width: '80%' }}
				/>
				<Typography>
					一看——好的北极参的特点：颜色是自然的黑灰色，有深有浅。外形则饱满笔直。
					<br />
					<br />
					二尝——轻舔海参表面，味道很淡但是仅有海参自身带的盐味。
					<br />
					<br />
					三闻——且闻起来味道鲜香（类似干扇贝香味），无异味。
					<br />
					<br />
					小科普：那么与此同时，劣质的北极参是怎么样的？
					<br />
					<br />
					它们的颜色一般呈灰白色，而表面则有盐的结晶颗粒，它们的味道多半很咸。而通过气味辨别之后——它们通常有异味或者没有优质海参所特有的新鲜味道。
				</Typography>
				<Typography variant='h3'>2</Typography>
				<Typography variant='h3'>
					海参优劣可通过海参体内“海参筋”来判断。
				</Typography>
				<Typography>海参筋越粗、越多说明海参参龄越长，品质更佳。</Typography>
				<img
					src='/images/blog/mostin/mostin2.jpg'
					alt={language === 'en' ? 'sea cucumber cut in half' : '海参切开图片'}
					style={{ width: '50%' }}
				/>
				<Typography>
					国内养殖海参体内“海参筋”难得一见，而来自加拿大北冰洋的野生海参体内“红筋”十分明显，其所含有的抗疲劳天然物质“精氨酸”的含量也高出许多。
				</Typography>
				<Typography variant='h3'>3</Typography>
				<Typography variant='h3'>
					按照加工后的外观分辨加拿大北极海参的优劣
				</Typography>
				<Typography>
					加拿大北极海参品质主要取决于在加工时的新鲜程度和加工后保留下来的营养物质，依照加工后形成的外观很容易分辨。
					<br />
					<br />
					不同的形状代表不同的品质，价格存在着较大的差别。北极海参的营养构造由两部份组成，坚韧的表皮和由五根筋（海参筋）连接着的一层肌肉。
					<br />
					<br />
					圆筒整参
				</Typography>
				<img
					src='/images/blog/mostin/mostin3.jpg'
					alt={language === 'en' ? 'Dried Atlantic Sea Cucumber' : '淡干北极参'}
					style={{ width: '70%' }}
				/>
				<Typography>
					圆形整筒海参的加工是100%纯天然淡干加工，干燥级别最高。
					<br />
					<br />
					当地渔民采用拖网的捕捞方式捕获后必须在3个小时内立即加工。
					加工过程中切开两头，去掉海参头尾、牙、用机器吸出内脏只保留了海参内壁肉及海参筋。
					<br />
					<br />
					因为圆筒的没有开口的容易处理和烘干所以必须用机器取内脏和烘干，成本就高了很多。圆筒整参不仅仅外形好看，更是完整地保留了海参整体的精华：海参肉，内壁和海参筋。是北极海参中的上品。
				</Typography>
				<Typography variant='h4'>开口</Typography>
				<img
					src='/images/blog/mostin/mostin4.jpg'
					alt={
						language === 'en'
							? 'Poor quality Atlantic sea cucumber'
							: '开口参质量对比'
					}
					style={{ width: '60%' }}
				/>
				<Typography variant='h3'>4</Typography>
				<Typography variant='h3'>
					产地也是加拿大野生海参选购指南的重要因素
				</Typography>
				<Typography>
					就像所有的芝士都有产地一样，选购加拿大野生海参的时候也需要关注这个海参的产地。
					<br />
					<br />
					在北大西洋和北极圈一带生长的海参在加拿大野生海参中占有主力军的地位——美食评论家、养生营养学家以及一些科研工作人员都将加拿大野生海参视为不可错过的一个重要研究对象。
					<br />
					<br />
					此外，加拿大野生海参远度重洋的美名也越来越被国人们所知晓。
					<br />
					<br />
					因此，SEACOO愿意携手本地渔民，在可持续发展经济效益的原则下，为大家提供原汁原味的加拿大野生海参。
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default MostIn
