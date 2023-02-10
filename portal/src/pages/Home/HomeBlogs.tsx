import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import { Grid, Typography, Button } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import { blogsEn, blogsZh } from './blogs'

const HomeBlogs = () => {
	const { t, i18n } = useTranslation()
	const { language } = i18n
	const blogs = ((language === 'en' && blogsEn) ||
		(language === 'zh' && blogsZh)) as any
	return (
		<div className='home-blogs'>
			<Grid container>
				<Grid item xs>
					<div className='blogs-header'>
						<div className='text-container'>
							<Typography variant='h6' style={{ fontSize: 16 }}>
								{t('BLOG')}
							</Typography>
							<Typography variant='h6' style={{ fontSize: 20 }}>
								{t('Valuable Food Sea Cucumber')}
							</Typography>
							<Typography style={{ fontSize: 14 }}>
								{t(
									'Since ancient times, sea cucumbers have been consumed as an extremely valuable food or medicinal supplement.'
								)}
							</Typography>
							<HashLink to='/blog/#' style={{ textDecoration: 'none' }}>
								<Button variant='outlined'>{t('READ MORE')}</Button>
							</HashLink>
						</div>
					</div>
				</Grid>
				{blogs.map(blog => (
					<Grid key={blog.title} item xs className='home-blog-card'>
						<HashLink to={`${blog.path}/#`} className='blog-img'>
							<LazyLoadImage src={blog.image} alt={t(blog.alt)} />
						</HashLink>
						<div className='blog-info'>
							<HashLink to={`${blog.path}/#`}>{blog.title}</HashLink>
							<Typography>{blog.shortContent}</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	)
}
export default HomeBlogs
