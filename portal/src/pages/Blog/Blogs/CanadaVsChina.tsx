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

const CanadaVsChina = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<div className='content'>
				<MetaTags>
					<title>国产海参与进口海参的差距有多大？专业海参分析。</title>
					<meta
						name='description'
						content='野生的加拿大进口海参并不是遥不可及，反而具有超高性价比。与其花差不多的价钱吃国产养殖海参，不如选择野生、无污染、营养成分更高的加拿大海参。'
					/>
				</MetaTags>
				<Typography variant='h2' className='title'>
					加拿大野生海参VS中国养殖海参
				</Typography>
				<Typography variant='h4'>
					随着性价比极高的加拿大野生海参逐渐走入大家的视野，消费者们选择海参的空间变得更加广阔了。最近有很多人向小编反应他们在国产海参和进口海参之间不知道如何选择和区分优劣。那么，今天就带各位消费者从不同角度详细的了解一下加拿大野生海参和中国养殖海参的区别。
				</Typography>
				<Typography>一. 生长环境 </Typography>
				<Typography>
					加拿大野生海参：加拿大的野生海参，无论是北极参还是红刺参，都生长在加拿大无污染，无干扰的纯净海域里，健康茁壮。以北极参为例，东海岸北极海参产于加拿大东部沿海，该海域终年人迹罕见，周围没有任何工业，相较于我国渤海、黄海等海参产区可以说是真正意义上的“零污染”。加拿大海参产区海域水温最高不超过14℃，冬季表面结冰，属于“冻海”，在这种环境下，海参长期处于休眠或半休眠状态，生长周期极长，因此海参体内所堆积的营养物质含量也要比“温水”环境中生长的海参要高。
				</Typography>
				<Typography variant='h4'>加拿大东部海域实拍</Typography>
				<img
					src='/images/blog/canadavschina/canadavschina1.jpg'
					alt={language === 'en' ? 'East coast of canada' : '加拿大东海岸'}
					style={{ width: '35%' }}
				/>
				<Typography>
					国内养殖海参：由于长期过度捕捞，近海污染严重，野生海参在中国几乎消耗殆尽，目前国内养殖海参主要有一下4种：1）底播海参，在自然水域播散海参苗，自然生长，稍加饵料，促进生长；2）圈养海参，在沿海修筑拦水坝或者利用养虾池养殖；3）大棚海参，在室内修建养殖池养殖海参，能够控制水温和室温；4）
					北参南养，把北方培育的海参苗运到南方养殖，由于南方水温高，海参生长快。并且有些不良商家为防治病虫害，加入抗生素，为促进海参生长，加入生长激素，这些药物残留通过食物链进入人体，势必会影响我们的健康。
				</Typography>
				<img
					src='/images/blog/canadavschina/canadavschina2.jpg'
					alt={language === 'en' ? 'Farming Sea Cucumbers' : '养殖海参'}
					style={{ width: '35%' }}
				/>
				<Typography>二. 育苗 </Typography>
				<Typography>
					加拿大野生红刺参和北极参 <br />
					<br />
					加拿大野生海参：
					加拿大海参都是野生的，不受任何人工的打扰。野生海参生长在一个物竞天择的自然环境中，所以身体不健康的都被早早淘汰掉了。而为了保证自然生态，加拿大政府会控制每年的捕捞量，捕捞后的海参区域五年内不能再进行捕捞，留给海参苗休养生息，让它们有足够的时间累积营养，茁壮成长。
					<br />
					<br />
					国内养殖海参：反观国内的养殖海参，为了保证足够的产量和人工培育的海参苗健康，只能在养殖过程加入大量的抗生素。
				</Typography>
				<img
					src='/images/blog/canadavschina/canadavschina3.jpg'
					alt={language === 'en' ? 'Real wild sea cucumber' : '真正的野生海参'}
					style={{ width: '35%' }}
				/>
				<Typography>三. 营养价值 </Typography>
				<Typography>
					加拿大野生海参：
					野生海参多生活在20~30米左右的深水下，水温较低，四处觅食，每年夏眠、冬眠，所以生长极慢，4~5年才能长成，肉质肥厚，管足粗大，营养积累丰富。
					<br />
					<br />
					国内养殖海参：养殖海参由于饵料充足，还能通过控制水温避免海参的冬眠和夏眠，所以海参生长快，但肉质薄，积累的营养成分也非常低。
				</Typography>
				<img
					src='/images/blog/canadavschina/canadavschina4.jpg'
					alt={
						language === 'en'
							? 'Artificially processed sea cucumbers'
							: '人工加工海参'
					}
					style={{ width: '35%' }}
				/>
				<Typography>四. 加工方式</Typography>
				<Typography>
					加拿大野生海参：
					加拿大野生海参采取天然加工，无菌烘干的科学方法，在海参捕捞靠岸后30分钟内运入加工厂活体加工，最大程度的保留了海参的营养价值和原汁原味。
					<br />
					<br />
					国内养殖海参：国内海参产业竞争激烈，造假现象严重，加盐、加糖、加添加剂，染色，脱色，一套工序下来，海参个个饱满漂亮，只是营养已经消失殆尽。
				</Typography>
				<Typography>五. 价格</Typography>
				<Typography>
					加拿大野生海参：由于野生海参没有养殖成本，西方人又不如东方热衷于吃海参，所以加拿大野生海参的价格要低于国产海参。
					<br />
					<br />
					国内养殖海参：国内海参由于高昂的养殖成本，低于3000元/斤的淡干海参都不可信。
					<br />
					<br />
					说了这么多，您是不是也更加了解不同地域生长的海参区别了呢？
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default CanadaVsChina
