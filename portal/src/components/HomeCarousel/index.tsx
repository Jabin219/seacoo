import React from 'react'
import { HashLink } from 'react-router-hash-link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { SlideImages } from './images'
import { Typography } from '@material-ui/core'
import Arrow from './Arrow'

const HomeCarousel = () => {
	const { i18n, t } = useTranslation()
	const { language } = i18n
	const placeWidth =
		document.body.clientWidth < 1920 ? document.body.clientWidth : 1920
	const placeHeight = placeWidth / 2.88
	const images = ((language === 'en' && SlideImages.imagesEn) ||
		(language === 'zh' && SlideImages.imagesZh) ||
		(language === 'zhCN' && SlideImages.imagesZhCN)) as any
	return (
		<div style={{ minWidth: placeWidth, minHeight: placeHeight }}>
			<Carousel
				showThumbs={false}
				showIndicators={false}
				showStatus={false}
				infiniteLoop={true}
				autoPlay={true}
				swipeable={true}
				emulateTouch={true}
				interval={3000}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<Arrow
							onClickHandler={onClickHandler}
							label={label}
							path={mdiChevronLeft}
							direction='left'
						/>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<Arrow
							onClickHandler={onClickHandler}
							label={label}
							path={mdiChevronRight}
							direction='right'
						/>
					)
				}
			>
				{images.map(image => {
					if (image.attribute === 'image') {
						return (
							<HashLink to={image.url} key={image.alt}>
								<div className='image'>
									<LazyLoadImage
										src={image.src}
										alt={image.alt}
										width={'100%'}
										height={'100%'}
										effect='blur'
									/>
								</div>
							</HashLink>
						)
					} else {
						return (
							<HashLink to='/product/#' key={image.alt}>
								<div
									style={{
										position: 'relative'
									}}
								>
									<video
										src={image.src}
										width={'100%'}
										height={'100%'}
										autoPlay
										muted
										loop
									></video>
									<div
										style={{
											width: '100%',
											position: 'absolute',
											top: language === 'en' ? '30%' : '40%'
										}}
									>
										{language === 'en' ? (
											<Typography
												variant='h2'
												style={{
													color: '#fff',
													fontSize: 60,
													lineHeight: '84px',
													textAlign: 'center',
													letterSpacing: 0.71,
													fontWeight: 700,
													margin: '0 auto'
												}}
											>
												{t('VideoSliderSeaCucumber')}:
												<br />
												{t('The treasure from the ocean')}
											</Typography>
										) : (
											<Typography
												variant='h2'
												style={{
													color: '#fff',
													fontSize: 60,
													lineHeight: '84px',
													textAlign: 'center',
													letterSpacing: 0.71,
													fontWeight: 700,
													margin: '0 auto'
												}}
											>
												{t('VideoSliderSeaCucumber')}:&nbsp;
												{t('The treasure from the ocean')}
											</Typography>
										)}
										<Typography
											variant='h4'
											style={{
												color: '#fff',
												fontSize: 20,
												lineHeight: '84px',
												textAlign: 'center',
												letterSpacing: 0.24,
												fontWeight: 600
											}}
										>
											{t('SEACOO WILD SEA CUCUMBER')}
										</Typography>
									</div>
								</div>
							</HashLink>
						)
					}
				})}
			</Carousel>
		</div>
	)
}

export default HomeCarousel
