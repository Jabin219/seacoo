import React from 'react'
import { Route } from 'react-router-dom'

// blog pages
import ChineseFood from './Blogs/ChineseFood'
import SeaCucumber from './Blogs/SeaCucumber'
import NutritiveValue from './Blogs/NutritiveValue'
import NutritiveValue_zh from './Blogs/NutritiveValue_zh'
import RehydrateMethod from './Blogs/RehydrateMethod'
import SeaCucumber_zh from './Blogs/SeaCucumber_zh'
import ThesePeople from './Blogs/ThesePeople'
import MostIn from './Blogs/MostIn'
import CanadaSeaCucumber from './Blogs/CanadaSeaCucumber'
import CanadaVsChina from './Blogs/CanadaVsChina'
import CanadaArctic from './Blogs/CanadaArctic'
import YouTubeRecommendBlog from './Blogs/YouTubeRecommendBlog'

import { BlogData } from 'constant'
import BlogList from './BlogList'

const BlogRouter = () => {
	return (
		<div className='blog-router'>
			<Route exact path='/blog' component={BlogList} />
			{/* blogs pages */}
			<Route
				path={`/blog/${BlogData.ChineseFood.name}`}
				component={ChineseFood}
			/>
			<Route
				path={`/blog/${BlogData.SeaCucumber.name}`}
				component={SeaCucumber}
			/>
			<Route
				path={`/blog/${BlogData.NutritiveValue.name}`}
				component={NutritiveValue}
			/>
			<Route
				path={`/blog/${BlogData.NutritiveValue_zh.id}`}
				component={NutritiveValue_zh}
			/>
			<Route
				path={`/blog/${BlogData.RehydrateMethod.name}`}
				component={RehydrateMethod}
			/>
			<Route
				path={`/blog/${BlogData.SeaCucumber_zh.id}`}
				component={SeaCucumber_zh}
			/>
			<Route
				path={`/blog/${BlogData.ThesePeople.id}`}
				component={ThesePeople}
			/>
			<Route path={`/blog/${BlogData.MostIn.id}`} component={MostIn} />
			<Route
				path={`/blog/${BlogData.CanadaSeaCucumber.id}`}
				component={CanadaSeaCucumber}
			/>
			<Route
				path={`/blog/${BlogData.CanadaVsChina.id}`}
				component={CanadaVsChina}
			/>
			<Route
				path={`/blog/${BlogData.CanadaArctic.id}`}
				component={CanadaArctic}
			/>
			<Route
				path={`/blog/${BlogData.YouTubeRecommendBlog.id}`}
				component={YouTubeRecommendBlog}
			/>
		</div>
	)
}

export default BlogRouter
