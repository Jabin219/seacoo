import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'

const FAQs = () => {
	const classes = useStyles()
	return (
		<div className={classes.faqs}>
			<Typography variant='h4' className='title'>
				常见问题
			</Typography>
			<Typography variant='h4' className='subtitle'>
				成分与采购
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）所有的产品都是天然的吗？
				</Typography>
				<Typography>
					答）SEACOO一直致力于产品质量的保证。我们所有的原料均已通过加拿大卫生部批准，并符合中国食品流通生产的标准，且整个加工过程都在食品检验局的严格监管之下进行。我们的产品以高清洁度和安全标准进行存储，并确保所有产品在运输，存储，准备和配送过程中不被污染。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）Seacoo的海参产品是从哪里来的？
				</Typography>
				<Typography>
					答）我们的北极参是从加拿大东海岸野生捕获的，阿拉斯加红刺参是在不列颠哥伦比亚省野生捕获的。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）怎么确保Seacoo的产品质量好，或符合包含标签上的内容？
				</Typography>
				<Typography>
					答）SEACOO致力于在有效期内保证每种产品的纯度，效力和安全性。我们公司秉持着要为所有客户提供高质量和安全的海参产品的原则，因此我们有义务和责任遵守政府制定的相关食品法规。
				</Typography>
				<br />
				<Typography>
					我们提供的海参产品均需要经过严格的产品制作过程，例如以人工潜水和捞捕的方法获得新鲜的海参，和在同一天被运送到加工厂进行生态加工，其中包括严格的筛选，清洁内脏，恒温烹饪和无菌干燥。整个过程都在加拿大食品检验局的严格监管之下进行。
				</Typography>
			</div>
			<br />
			<br />
			<Typography variant='h4' className='subtitle'>
				可持续发展
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）Seacoo公司长期捕捞海参会对海洋造成不可逆的危害吗？
				</Typography>
				<Typography>
					答）不会。可持续的渔业和水产养殖业是指在不损害海洋生物正常繁殖，和海洋环境的前提下，以满足当前商业的需求，进行鱼类种群的捕捞和养殖。区别于肆无忌怛地捕获海洋生物，或给海洋环境造成沉重负担，我们坚持通过着眼于保护海洋生态系统问题，并采用科学的方法来管理我们的海洋资源，以可持续的方式发展捕捞业。我们不仅坚持与当地渔业合作伙伴合作，采用传统化的捕捞方式有效地保护海洋生态的可持续发展，同时，公司也一直以认真的态度保护着海洋生物的多样性。更详细地讲，我们会在每次捕捞野生海参的过程中仔细地进行筛选，并在每次捕捞时将未完全成长的海洋生物送回海洋，以确保这些动物有足够的成长时间。
				</Typography>
				<Typography>
					另外，我们在生产过程中采用环保工艺，以确保可持续的消费和生产方式，不仅为海洋的可持续发展贡献力量，还确保我们的产品以高质量和安全的标准生产。
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					问）Seacoo是否将环保作为自己的责任？
				</Typography>
				<Typography>
					答）海洋受到来自城市和农村多种污染源的越来越大的压力。这些污染源正在破坏海洋环境和生命。如药物残留，微塑料或其他物质可能对人体健康造成有害影响。作为一家支持环保和以用户为中心的公司，保护海洋和防止海洋污染是我们公司主要职责之一。保护海洋生态不仅能确保我们产品的安全性和质量，同时也是我们为加拿大海洋工业的可持续发展作出贡献。另外，我们在生产中采用环保工艺，以确保可持续的消费和生产方式。
				</Typography>
			</div>
			<br />
			<br />
		</div>
	)
}

export default FAQs
