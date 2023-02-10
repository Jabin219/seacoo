import React from 'react'

import { Typography, makeStyles } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'
import MetaTags from 'react-meta-tags'

import { useTranslation } from 'react-i18next'

export const useStyles = makeStyles({
	nutritive: {
		maxWidth: 600,
		margin: '50px auto',
		'& .title': {
			color: '#4d4d4e',
			fontSize: 30,
			fontWeight: 600,
			textAlign: 'center',
			marginBottom: 50
		},
		'& .subtitle': {
			color: '#0080b9',
			fontSize: 18,
			fontWeight: 'bold',
			marginBottom: 30
		},
		'& p': {
			color: '#4d4d4e',
			fontSize: 14,
			lineHeight: '18px',
			marginBottom: 20
		},
		'& img': {
			display: 'block',
			margin: '0 auto',
			marginBottom: 80
		}
	}
})

const NutritiveValue = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div>
			<MetaTags>
				<title>海参的营养价值｜SEACOO</title>
				<meta
					name='description'
					content='加拿大海参具有ACE活性，有效抗衰老。海参可以促进人体快速修复和再生长，术后患者食用可提前恢复。在改善男性功能和皮肤状况方面具有不可替代的作用。'
				/>
			</MetaTags>
			<div className={classes.nutritive}>
				<Typography variant='h2' className='title'>
					营养价值
				</Typography>
				<Typography variant='h4' className='subtitle'>
					抗氧化&抗衰老
				</Typography>
				<Typography>
					2010年，在年会暨食品博览会期间（芝加哥，美国，2010年7月），科学家指出，加拿大海参
					的组织具有ACE活性，对自由基的吸收能力极强。
					人体内部大量无法代谢的自由基积累加速了 衰老。
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive1.png'
					alt={language === 'en' ? 'Anti-wrinkle foods' : '抗皱纹食品'}
				/>

				<Typography variant='h4' className='subtitle'>
					促进生长&快速修复
				</Typography>
				<Typography>
					海参具有特殊的能力。
					当它处于危险之中，会吐出自己的内部器官，让掠食者“享受”并抓住机会逃脱。
					海参之后会再生出完整的内部器官。 这种“再生”能力对术后患者极为有益。
					吃海参有助于人们更快康复。
					实验表明，服用海参的术后患者可以提前20天以上。
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive2.png'
					alt={language === 'en' ? 'family healthcare product' : '家庭保健产品'}
				/>

				<Typography variant='h4' className='subtitle'>
					改善男性功能&皮肤护理
				</Typography>
				<Typography>
					加拿大海参中精氨酸的含量远高于其他海产品。
					精氨酸是男性精子细胞的重要组成部分，对雄性有很好的滋补作用。
					精氨酸也是合成人体胶原蛋白的原料，可以刺激细胞再生和修复。
					胶原蛋白含有丰富的甘氨酸和碱性氨基酸，这是造血，养血和促进钙吸收的基础。
					它对女性的美容和皮肤护理具有不可替代的作用。
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive3.png'
					alt={language === 'en' ? 'male Sexual enhancement' : '男人性功能增强'}
				/>

				<Typography variant='h4' className='subtitle'>
					怀孕期间首选补品
				</Typography>
				<Typography>
					脱水后的加拿大海参每100克约含15克蛋白质和18种人体必需的氨基酸。
					这对胎儿的正常发育非常有帮助。
					加拿大海参还含有DHA，俗称“脑黄金”，它不仅是增强正常免疫力的必要物质，而且还是脑神经细胞发育的重要营养素。
					孕妇每天食用加拿大海参可以为胎儿提供足够的“脑黄金”，使孩子的神经系统健康发育，并真正使孩子“赢在起跑线上”。
				</Typography>
				<img
					src='/images/nutritiveValue/nutritive4.png'
					alt={language === 'en' ? 'Pregnancy healthy eating' : '孕期安全食品'}
				/>
				<br />
				<br />
			</div>
			<RecommendProducts />
		</div>
	)
}

export default NutritiveValue
