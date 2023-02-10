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

const ThesePeople = () => {
	const classes = useStyles()
	const { i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>海参 - 藏在海底的长寿秘诀</title>
				<meta
					name='description'
					content='众所周知海参是长寿食品，但它是科学依据是什么？“元素平衡医学”理论给了我们答案。50多种营养物质在海参体内形成完美的平衡。人类食用海参可以帮助自身平衡体内营养。'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					[科普]这些长寿到不可思议年纪的人，带你解密海参进补的神奇之谜
				</Typography>
				<Typography>
					海参，六亿年的生物，地球上最古老生物之一。日本向岛，当今世界已知最著名的长寿之乡，而当地人长寿的秘诀，就是因为他们长期食用海参进补。
					<br />
					<br />
					那么，海参为何如此神奇，在自己生存如此悠久之后，还能让人类更加长寿？今天就来一起解密！
					<br />
					<br />
					曾经，有人说海参长寿的主要原因，是因为海参体内蕴含超过50种营养物质，这些营养物质都是生物体生长所需，所以海参才能够生存如此之久。而人类，也是因为摄食海参补充了这些营养物质，所以才会更加健康长寿。
				</Typography>
				<img
					src='/images/blog/thesepeople/thesepeople1.jpg'
					alt={
						language === 'en' ? 'SEACOO giant sea cucumber' : 'SEACOO巨型海参'
					}
					style={{ width: '30%' }}
				/>
				<Typography>
					听起来比较有道理，虽然，事实上存在一定差距。中医学以及现代医学证明，海参长寿和能够让人类长寿的主要原因，并不仅仅是因为海参体内蕴含大量生物体生长所必须物质，更重要的是，这些营养物质在海参体内形成一个完美的平衡，在营养均衡的情况下，海参才能够生存如此之久，也才能够让帮助人类平衡体内营养物质的同时使人类更加健康长寿！
					<br />
					<br />
					这种理论，在现代医学中被称为“元素平衡医学”！
					<br />
					<br />
					现在已知的人类生命活动必需的营养素有50种，在一个健康的肌体里，它们是平衡的，是互相影响，协同发生作用的。“最佳营养学”创始人帕特里克·霍尔福德（英）说：“一些营养物质离开了它们的协同伙伴就无法发挥作用……例如，几乎没有任何证据表明哪一种单项维生素或矿物质可以提高儿童的智商分数。但是，众多研究表明，如果综合摄入人体必需的所有的维生素和矿物质，即使只有推荐日摄食量的水平（我们实际的需要量几乎是推荐量的10倍），也可以将儿童的智商分数提高4至5分。”
					<br />
					<br />
					由此可以看到，生命活动所必需的50种营养素是一个有机的整体，它们在均衡的条件下协同作用的结果就是人类所追求的“健康”。所以人们说海参对各类人群均有作用并非信口，而是确有其事。比如小孩吃海参可以提高智力，老人吃海参能够提高身体素质，年轻人吃海参能够提高免疫力，中年人吃海参能够提高自身精气神，这些都是有据可循的。而海参，也正是因为体内营养元素十分均衡，才会有如此顽强的生命力！
				</Typography>
				<img
					src='/images/blog/thesepeople/thesepeople2.jpg'
					alt={
						language === 'en'
							? 'eating Sea cucumbers live longer'
							: '吃海参长寿'
					}
					style={{ display: 'block', width: '45%' }}
				/>

				<Typography>
					人之所以患病，特别是一些代谢方面的疾病，就是由于体内的营养元素不平衡造成的。这个疾病群体很庞大，如，心脑血管疾病、癌症、高血压、糖尿病、老年痴呆症、帕金森病、红斑狼疮、白血病、血小板减少、血友病、类风湿、前列腺肥大、白癜风、癫痫、肝胆结石，还有地方性病等等。
					<br />
					<br />
					人类的生命活动是十分复杂的，当元素之间的这种关系被发现，而且越来越被关注，元素平衡医学也就诞生了。元素平衡医学就是“研究元素，特别是微量元素（维生素和矿物质）的平衡关系以及在人体中的协同作用，利用富含微量元素的天然中药和食物来平衡营养，治疗人类顽症、促进人类健康长寿的新科学。”元素平衡医学从一开始就显示出强大的生命力，在现代医学无能为力的一些疑难顽症的诊治上，取得了突破性的进展，如对心脑血管疾病、癌症、糖尿病、老年痴呆症等。
					<br />
					<br />
					“药食同源”，食用海参进补之所以对众多病症的康复都有意想不到的作用，甚至在潜移默化之中将某些疾病治愈，主要就是因为它不但富含人体生命活动必需的众多元素，尤其是微量元素，而且，各元素构成比例均衡，不但最宜被人体吸收，而且，吸收后，各元素协同作用，彼此发挥出最大功效，使体内营养达到平衡，从而起到保健和支持疾病康复的作用。
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default ThesePeople
