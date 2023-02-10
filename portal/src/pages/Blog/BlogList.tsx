import React from 'react'
import { useTranslation } from 'react-i18next'

import BlogCard from 'components/BlogCard/BlogCard'

import { BlogData } from 'constant'

import { useStyles } from './style'

import MetaTags from 'react-meta-tags'

const BlogList = () => {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const language = i18n.language
	return (
		<div className={classes.blog}>
			<MetaTags>
				<title>{t('Blog - Canadian Sea Cucumber | Seacoo')}</title>
				<meta
					name='description'
					content={t(
						'Learn how to buy, rehydrate and cook sea cucumber through the blog. Get sea cucumber nutritional recipes.'
					)}
				/>
			</MetaTags>
			{language === 'en' && (
				<div className='blog-en'>
					<BlogCard
						imgSrc={BlogData.ChineseFood.imgSrc}
						imgAlt={BlogData.ChineseFood.imgAlt}
						imgAltZh={BlogData.ChineseFood.imgAltZh}
						date={BlogData.ChineseFood.date}
						blogPath={BlogData.ChineseFood.blogPath}
						title={BlogData.ChineseFood.title}
						shortContent={BlogData.ChineseFood.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.SeaCucumber.imgSrc}
						imgAlt={BlogData.SeaCucumber.imgAlt}
						imgAltZh={BlogData.SeaCucumber.imgAltZh}
						date={BlogData.SeaCucumber.date}
						blogPath={BlogData.SeaCucumber.blogPath}
						title={BlogData.SeaCucumber.title}
						shortContent={BlogData.SeaCucumber.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.NutritiveValue.imgSrc}
						imgAlt={BlogData.NutritiveValue.imgAlt}
						imgAltZh={BlogData.NutritiveValue.imgAltZh}
						date={BlogData.NutritiveValue.date}
						blogPath={BlogData.NutritiveValue.blogPath}
						title={BlogData.NutritiveValue.title}
						shortContent={BlogData.NutritiveValue.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.RehydrateMethod.imgSrc}
						imgAlt={BlogData.RehydrateMethod.imgAlt}
						imgAltZh={BlogData.RehydrateMethod.imgAltZh}
						date={BlogData.RehydrateMethod.date}
						blogPath={BlogData.RehydrateMethod.blogPath}
						title={BlogData.RehydrateMethod.title}
						shortContent={BlogData.RehydrateMethod.shortContent}
					/>
				</div>
			)}
			{(language === 'zh' || language === 'zhCN') && (
				<div className='blog-zh'>
					<BlogCard
						imgSrc={BlogData.YouTubeRecommendBlog.imgSrc}
						date={BlogData.YouTubeRecommendBlog.date}
						blogPath={BlogData.YouTubeRecommendBlog.blogPath}
						title={BlogData.YouTubeRecommendBlog.title}
						shortContent={BlogData.YouTubeRecommendBlog.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.NutritiveValue_zh.imgSrc}
						imgAlt={BlogData.NutritiveValue_zh.imgAlt}
						imgAltZh={BlogData.NutritiveValue_zh.imgAltZh}
						date={BlogData.NutritiveValue_zh.date}
						blogPath={BlogData.NutritiveValue_zh.blogPath}
						title={BlogData.NutritiveValue_zh.title}
						shortContent={BlogData.NutritiveValue_zh.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.SeaCucumber_zh.imgSrc}
						imgAlt={BlogData.SeaCucumber_zh.imgAlt}
						imgAltZh={BlogData.SeaCucumber_zh.imgAltZh}
						date={BlogData.SeaCucumber_zh.date}
						blogPath={BlogData.SeaCucumber_zh.blogPath}
						title={BlogData.SeaCucumber_zh.title}
						shortContent={BlogData.SeaCucumber_zh.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.ThesePeople.imgSrc}
						imgAlt={BlogData.ThesePeople.imgAlt}
						imgAltZh={BlogData.ThesePeople.imgAltZh}
						date={BlogData.ThesePeople.date}
						blogPath={BlogData.ThesePeople.blogPath}
						title={BlogData.ThesePeople.title}
						shortContent={BlogData.ThesePeople.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.MostIn.imgSrc}
						imgAlt={BlogData.MostIn.imgAlt}
						imgAltZh={BlogData.MostIn.imgAltZh}
						date={BlogData.MostIn.date}
						blogPath={BlogData.MostIn.blogPath}
						title={BlogData.MostIn.title}
						shortContent={BlogData.MostIn.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.CanadaSeaCucumber.imgSrc}
						imgAlt={BlogData.CanadaSeaCucumber.imgAlt}
						imgAltZh={BlogData.CanadaSeaCucumber.imgAltZh}
						date={BlogData.CanadaSeaCucumber.date}
						blogPath={BlogData.CanadaSeaCucumber.blogPath}
						title={BlogData.CanadaSeaCucumber.title}
						shortContent={BlogData.CanadaSeaCucumber.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.CanadaVsChina.imgSrc}
						imgAlt={BlogData.CanadaVsChina.imgAlt}
						imgAltZh={BlogData.CanadaVsChina.imgAltZh}
						date={BlogData.CanadaVsChina.date}
						blogPath={BlogData.CanadaVsChina.blogPath}
						title={BlogData.CanadaVsChina.title}
						shortContent={BlogData.CanadaVsChina.shortContent}
					/>
					<BlogCard
						imgSrc={BlogData.CanadaArctic.imgSrc}
						imgAlt={BlogData.CanadaArctic.imgAlt}
						imgAltZh={BlogData.CanadaArctic.imgAltZh}
						date={BlogData.CanadaArctic.date}
						blogPath={BlogData.CanadaArctic.blogPath}
						title={BlogData.CanadaArctic.title}
						shortContent={BlogData.CanadaArctic.shortContent}
					/>
				</div>
			)}
		</div>
	)
}

export default BlogList
