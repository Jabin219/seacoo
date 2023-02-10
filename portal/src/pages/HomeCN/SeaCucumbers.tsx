import React from 'react'
import { Grid } from '@material-ui/core'
import { ProductData } from 'constant'
import HomeSeaCucumberCard from 'components/HomeSeaCucumberCard'

const SeaCucumbers = () => {
	return (
		<div className='product-seaCucumber-bag'>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<HomeSeaCucumberCard
						productClass='product-left'
						productPath={`/product/${ProductData.driedEastCoastBag.pathName}/#`}
						productRegion='Atlantic'
						productName='Sea Cucumber'
						productAlias='Cucumaria Frondosa'
						productDescription='加拿大北极参从1998年开始正式形成商业捕捞，最早捕捞区域是新斯科舍省东部沿海。北极参最初的商业价值来自于其肥厚的肉筋，后被广泛应用于中国餐饮食材中。'
						learnMorePath='/east-coast/#'
					/>
				</Grid>
				<Grid item xs={6}>
					<HomeSeaCucumberCard
						productClass='product-right'
						productPath={`/product/${ProductData.driedWestCoastBag.pathName}/#`}
						productRegion='Alaska'
						productName='Red Sea Cucumber'
						productAlias='Parastichopus Californicus'
						productDescription='阿拉斯加红刺参产自加拿大BC省无污染海域，又名红刺参。与中国北方著名的辽参是同科同属，而红刺参的海参筋更为粗壮，味道鲜美，营养高，为高端参种。'
						learnMorePath='/west-coast/#'
					/>
				</Grid>
			</Grid>
		</div>
	)
}
export default SeaCucumbers
