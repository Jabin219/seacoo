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
						productDescription='Atlantic sea cucumber is harvested from the east coast of Canada and cover vast areas of the substrate at depths of less than 30 meters (100 ft).'
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
						productDescription='The Alaska red sea cucumber, also named giant red sea cucumber, is the only sea cucumber species harvested commercially in British Columbia.'
						learnMorePath='/west-coast/#'
					/>
				</Grid>
			</Grid>
		</div>
	)
}
export default SeaCucumbers
