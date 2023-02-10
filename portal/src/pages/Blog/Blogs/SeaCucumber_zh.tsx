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

const SeaCucumber_zh = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>海参 - 优质保健食品｜SEACOO</title>
				<meta
					name='description'
					content='海参作为传统中药的一味药材，用于治疗关节炎，癌症，尿频和性功能障碍等。由于海参低脂低卡路里，且富含蛋白质，可作为减肥食品。对控制血糖水平的糖尿病患者尤为有益。'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					海参：特殊的保健食品
				</Typography>
				<div className='sub-tag'>
					<span>实际运用</span>
					<span>营养真相</span>
				</div>
				<Typography>
					虽然您可能不熟悉海参，但海参在许多亚洲文化中都被认为是美味佳肴。与蔬菜不同，
					海参是海洋动物。虽然它们的身影遍布世界，但最大的种群生活在太平洋中。
					<br />
					<br />
					大多数海参类似于蠕虫或毛毛虫，具柔软的管状体，由潜水员收集或在大型人工池塘中
					商业化养殖。除用于烹饪，海参还用于传统民间医学中以治疗广泛的疾病。本文探讨了
					海参的营养益处以及它们是否值得被添加到您的饮食中。
				</Typography>
				<img
					src='/images/blog/seacucumber/seacucumber1.jpg'
					alt={
						language === 'en'
							? 'Medicinal and health benefit of sea cucumber'
							: '海参的药用价值'
					}
					style={{ width: '45%' }}
				/>
				<Typography variant='h4'>如何使用海参？</Typography>
				<Typography>
					几个世纪以来，在亚洲和中东国家海参一直被用作的食物和药用成分。实际上，它们在太平洋
					有170多年的捕捞历史。在各种菜肴中可以使用干海参或者新鲜海参。目前为止，干海参是最常用的。
					海参还用于传统中药，且被认为具有治愈作用，可用于治疗疾病，例如关节炎，癌症，尿频
					和性功能障碍。注入海参提取物的乳膏，制剂，油和化妆品以及口服海参补充剂在中药中也很常见。
				</Typography>
				<div className='blog-summary'>
					<Typography variant='h2'>总结</Typography>
					<Typography>
						在亚洲和中东餐饮中，海参是一种受欢迎的食材，并已用于中药。
					</Typography>
				</div>
				<img
					src='/images/blog/seacucumber/seacucumber2.jpg'
					alt={language === 'en' ? 'Chilled Sea Cucumber' : '冰鲜海参'}
					style={{ display: 'block', width: '90%', margin: '20px auto' }}
				/>
				<Typography variant='h2' className='title'>
					海参是极佳的营养来源
				</Typography>
				<Typography>
					4盎司（112克）海参： <br />
					60卡路里
					<br />
					蛋白质：14克 <br />
					脂肪：&lt;1克 <br />
					维他命：8%推荐每日摄入量
					<br /> B2（核黄素）：60%推荐每日摄入量
					<br /> B3（烟酸）：16%推荐每日摄入量
					<br /> 钙：4%推荐每日摄入量
					<br /> 镁： 4%推荐每日摄入量
					<br />
					<br /> 海参的卡路里和脂肪含量低，蛋白质含量高，是利于减肥的食品。
					它们还包含许多强大 的物质，包括抗氧化剂，对您的健康有益。
					海参蛋白质含量很高，大多数种类的蛋白质 含量为41–63％。
					在膳食和零食中添加蛋白质源可以减慢胃部的排空，从而使您保持饱腹。
					这可以帮助您减少进食并稳定血糖水平。
					富含蛋白质的食物（例如海参）可能对希望控制
					血糖水平的糖尿病患者特别有益。
					另外，富含蛋白质的饮食有益于心脏健康，降低血压 并改善骨骼密度。
				</Typography>
				<div className='blog-summary'>
					<Typography variant='h2'>总结</Typography>
					<Typography>
						海参富含营养。 它们卡路里和脂肪含量低，蛋白质含量高， 利于减肥。
						<br />
						<br />
					</Typography>
				</div>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default SeaCucumber_zh
