import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useStyles } from './style'
import { isCanadaDay } from 'utils'
interface Props {
	setSubscribeWindowOpen: (open: boolean) => void
}
const AnnouncementBar = ({ setSubscribeWindowOpen }: Props) => {
	const classes = useStyles()
	const [showBar, setShowBar] = useState(true)
	const { t } = useTranslation()
	return (
		<div className={showBar ? classes.root : classes.unShow}>
			<Close
				className='close-icon'
				onClick={() => {
					setShowBar(false)
				}}
			/>
			<Carousel
				showArrows={false}
				showThumbs={false}
				showIndicators={false}
				showStatus={false}
				infiniteLoop={true}
				autoPlay={true}
				emulateTouch={true}
				interval={6000}
			>
				<div>
					{isCanadaDay() ? (
						<>
							<Typography
								variant='body2'
								dangerouslySetInnerHTML={{
									__html: t('Canada Day Sale - 15% OFF SITEWIDE')
								}}
								style={{ fontWeight: 700 }}
							></Typography>
							<Typography variant='body2'>
								<HashLink className='landing' to='/Canada-Day-Event/#'>
									{t('Details')}
								</HashLink>
							</Typography>
						</>
					) : (
						<>
							<Typography
								variant='body2'
								dangerouslySetInnerHTML={{
									__html: t(
										"<span class='free-shipping'>Free shipping</span> on orders over $100 CAD (tax exclude) -&nbsp;"
									)
								}}
							></Typography>
							<Typography variant='body2'>
								<HashLink className='landing' to='/landing-page/#'>
									{t('Details')}
								</HashLink>
							</Typography>
						</>
					)}
				</div>
				<div
					className='subscribe-bar'
					onClick={() => {
						setSubscribeWindowOpen(true)
					}}
				>
					<Typography
						variant='body2'
						dangerouslySetInnerHTML={{
							__html: t(
								"<span class='subscribe'>Subscribe</span> to get my <span class='off'>10% OFF</span>"
							)
						}}
					></Typography>
				</div>
			</Carousel>
		</div>
	)
}

export default AnnouncementBar
