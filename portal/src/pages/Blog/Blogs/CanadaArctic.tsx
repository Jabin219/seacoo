import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'
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

const CanadaArctic = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className='content'>
				<MetaTags>
					<title>科普 - 加拿大北极参｜SEACOO</title>
					<meta
						name='description'
						content='关于加拿大北极参最全面的知识，包括北极参的形状，海参参刺，产业历史，捕捞加工过程。全方位教你如何鉴别优质的北极参。'
					/>
				</MetaTags>
				<Typography variant='h2' className='title'>
					加拿大北极参知识小百科
				</Typography>
				<Typography variant='h4'>什么是加拿大北极参？</Typography>
				<Typography>
					东海岸北极海参(学名：Cucumaria
					frondosa)产于加拿大东部沿海，通常分布在新斯科舍至纽芬兰周边水域底层。他们的性别比例是1：1，在基岩繁衍。海参用管形足附着在底部，
					且很少移动。它们是滤食性动物，通过过滤水体来获取食物。
					<br />
					<br />
					东海岸北极参生长在水下30米左右的海底，该海域终年人迹罕见，周围没有任何工业，因此加拿大海参产区与北大西洋沿岸的其他海参产区相较于我国渤海、黄海等海参产区可以说是真正意义上的“零污染”。加拿大海参产区海域水温最高不超过14℃，冬季表面结冰，属于“冻海”，在这种环境下，海参长期处于休眠或半休眠状态，生长周期极长，因此海参体内所堆积的营养物质含量也要比“温水”环境中生长的海参要高。
				</Typography>
				<Typography variant='h4'>加拿大北极参的产业历史</Typography>
				<Typography>
					加拿大北极参从1998年开始正式形成商业捕捞，最先捕捞区域来自于nova
					scotia省东部沿海附近，北极参最起初的商业价值来自于其厚厚的肉筋，被广泛应用于中国餐饮食材中，从2005年开始随着中国海参养殖环境下降，加拿大海参开始陆续走进了老百姓的养生保健名单中，延续至今，北极参已经被广大中国养生保健人群所接受。
				</Typography>
				<Typography variant='h4'>为什么选择加拿大北极参？</Typography>
				<Typography>
					加拿大北极参采用渔船拖网捕捞，渔船当天出海捕捞后第二天一早靠岸，然后在30分钟之内就会被送进我们的工厂经过严格的筛选，去内脏，水煮和烘干几个步骤，保留了海参的海参筋，去掉的海参部位的重量占到整个海参的1/3。海参加工的全部过程都收到了加拿大食品检验局的严格监管，以最天然，最原生态的方式把北极参的营养呈现出来。
					<br />
					<br />
					北极参的营养价值及治疗用途已被大量科学和医学研究所验证。从北极参中萃取的物质，如硫酸软骨素、三萜甙、血凝素、肝磷脂、生物活性肽、固醇、欧米加3、欧米加6脂肪酸等物质具有较强的抗氧化和抗癌功能，也能提升人体免疫力。海参是人类的重要食材之一，其药用价值也于18世纪被众多医学文献所记载，所以中国人称之为”海之人参”而非”海之黄瓜”。（英文中海参为”sea
					cucumber” , cucumber意为黄瓜）。
				</Typography>
				<Typography variant='h4'>加拿大北极参和国内海参的对比</Typography>
				<Typography>
					近几年，国内的野生海参几乎被捕捞殆尽，养殖海参业开始兴盛。据资料统计，2010年，国内养殖海参的总产值就已经达到了200亿元，并保持着高速增长。但养殖海参的品质却在逐年下降，养殖病害、污染问题日益严重，加工过程中的有害添加和染色化妆又使海参保健养生蒙上了厚厚的阴影。央视曾曝光的养殖海参“抗生素事件”正是这一现象的真实体现。
					<br />
					<br />
					因为加拿大海参是野生的，所以少了养殖饲料成本和养殖的人工成本，只有捕捞成本。国内海参绝大多数为养殖海参，养殖成本加上广告费等流通成本，国产参的卖价自然要达到数千人民币的高价。
					<br />
					<br />
					加拿大海参脂肪含量极低，不含胆固醇，并且其中含有的人体必须的8种氨基酸的含量也都远远高于其他海参产品。加拿大海参中海参皂甙和海参粘多糖的含量比大多数其他种类的海参都要高，抗癌以及提高免疫力的效果更为显著。
					<br />
					<br />
					加拿大海参中的蛋白质含量高达65%以上，根据农业部2009年9月1日颁发的《中华人民共和国水产行业标准》，特级海参蛋白质含量应大于60%，盐分应小于12%，seacoo给您提供的每一只加拿大海参均优于国家特级海参标准（附图）。
				</Typography>
				<Typography variant='h4'>关于北极参的大小</Typography>
				<Typography>
					大家肯定听过海参切断两半后放回大海里会在长成一只完整的海参的特性，除此之外，海参还有一个特性，就是“死无罪证”，如果一个人年龄足够老，自然就会慢慢器官衰竭而自然死去。而海参在海里野生生长10年后也会同样的道理，但是老去的海参不会死亡，而是最终融化于大海中，消失的无影无踪。
					<br />
					<br />
					加拿大野生北极参生长于大西洋冷水域，同时，为了保护自然生态，加拿大政府会控制每年的捕捞量，相同海域捕捞后五年内不能再捕捞。所以，即便是小个头的海参，它们的生长年龄仍旧能够保证在五年以上，有充足的时间来积累足够的营养物质。
					<br />
					<br />
					举个大家比较耳熟能详的例子，一只重量在一磅的加拿大龙虾生长期，因为海域的及其寒冷，需耗时七到十年，而生长两磅以上则需要数十年时间。同样的海域中生长的加拿大海参，一样的道理，非常缓慢，一只40-50个头的加拿大干海参最少都需要4-5年的野生时间。而大家耳熟能详的养殖辽刺参，在药物和催化剂的环境下，半年就可以收获，营养价值大大受损。
				</Typography>
				<Typography variant='h4'>海参参刺</Typography>
				<Typography>
					小百科：海参刺是海参体壁外凸形成的中空的结构，具有运动、呼吸等功能（也被称作疣足）。扁平，可分背肢和腹肢，适于游泳和爬行。
					<br />
					<br />
					相信不少人在采购海参的时候都会去关注海参刺的多少。总有商家误传出的谣言——海参有刺的比无刺的营养价值高，而且刺越多越漂亮，营养价值越高。
					<br />
					<br />
					——实际上，当今的各项学术研究和科学文献都不能佐证这一点。事实上，海参的刺的多少与其营养价值并无直接关系。
					<br />
					<br />
					北极海参的刺（足）较小较为圆润，刺（足）排列成一列列，一只海参有三到四列由刺（足）组成的条状矩形阵。
					<br />
					<br />
					触摸海参刺的软硬程度，可以判断海参的健康状况——由此不难判断北极参多数都是健康强韧的。
					<br />
					<br />
					就像是人类——虚弱的孩子在极好的环境下会越来越健康，强壮的人类在荒芜衰败的地方会越来越虚弱。
					<br />
					<br />
					北极海参生长在极少有人烟的北大西洋乃至北极圈附近，这片海域终年岑寂，鲜少有人踏足。由于水温极低，北极海参生长较为缓慢，在这个过程中，海参积累了不少营养物质。
					<br />
					<br />
					——水域决定了一种海参的个头，自然也就决定了这类海参足（刺）的大小的差异。北极海参生长在冷水域，也就恰恰形成了它们足（刺）较小的特征。
					<br />
					<br />
					世界各地的各类海参都具有不同形状的刺（足）——简要来说，海参刺或者足，就是海参表面上的突起或者是肉刺。
					<br />
					<br />
					诸如不少茄子参的圆滑突起，山东辽参的尖刺，非洲秃参的细小刺。北极海参的刺也是较为独特的扁平状，圆润，较小——这都是由生长环境决定的。
				</Typography>
				<Typography variant='h4'>教您如何挑选北极参 </Typography>
				<Typography>
					1, 优质的北极干海参会在体表留有清晰的小足。
					<br />
					<br />
					2,
					优质的北极海参干度大，不虚重，所以不要只关注一磅有几只，一定要关注体积比例。
					<br />
					<br />
					3, 优质的北极海参重量泡发率可以达到7-9倍之多。
					<br />
					<br />
					4, 北极海参泡发后水的颜色还是保持清澈，海参内筋紧实不松散。
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default CanadaArctic
