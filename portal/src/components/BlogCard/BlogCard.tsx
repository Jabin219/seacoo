import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BlogCard = (props: any) => {
	const { t, i18n } = useTranslation()
	const { language } = i18n
	return (
		<div className='card'>
			<Grid container>
				<Grid item xs={4} className='img'>
					<LazyLoadImage
						src={props.imgSrc}
						alt={language === 'en' ? props.imgAlt : props.imgAltZh}
						width={373}
						height={200}
						effect='blur'
					/>
				</Grid>
				<Grid item xs className='content'>
					<Typography className='blog-date'>{props.date}</Typography>
					<HashLink to={`${props.blogPath}/#`} className='blog-title'>
						{props.title}
					</HashLink>
					<Typography className='blog-short-content'>
						{props.shortContent}
					</Typography>
					<HashLink to={`${props.blogPath}/#`}>
						<Button>{t('Read More')}</Button>
					</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}

export default BlogCard
