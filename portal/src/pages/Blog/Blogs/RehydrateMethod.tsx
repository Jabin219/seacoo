import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import RecommendProducts from 'components/RecommendProducts'

import MetaTags from 'react-meta-tags'

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
			}
		}
	}
})

const Rehydrate_method = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<MetaTags>
				<title>Rehydrate & Clean Dried Sea Cucumber</title>
				<meta
					name='description'
					content='One video lets you learn how to rehydrate sea cucumbers. The easiest way to rehydrate dried sea cucumbers.'
				/>
			</MetaTags>
			<div className='content'>
				<Typography variant='h2' className='title'>
					Rehydrate Method
				</Typography>
				<iframe
					title='video'
					width='100%'
					height='680'
					src='https://www.youtube.com/embed/HdJCIl9imtY'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					style={{ margin: '0 0 20px' }}
				></iframe>
				<Typography>
					Atlantic sea cucumbers are harvested from the eastern coast of Canada
					and grow on the sea floor about 30 meters underwater. This sea area is
					rarely seen human activity and there is no industry around it. It can
					be said that it is true “zero pollution.” <br />
					<br /> Due to the short growing period, cultivated sea cucumbers have
					accumulation of nutrients, with the thin and hardly formed sea
					cucumber wall.
					<br />
					<br /> Cultivated sea cucumbers have weak muscles and severe lateral
					muscle degradation.
					<br />
					<br /> Atlantic sea cucumber has a long growing period resulting in
					adequate nutrient accumulation, and a thick sea cucumber wall that is
					rich in nutrients.
					<br />
					<br /> Pure wild Atlantic sea cucumber has strong and plenty of
					muscle.
					<br />
					<br /> 1. Place the dried sea cucumbers into an oil-free and clean
					container filled with cold water. Store the container with water and
					sea cucumbers in refrigerator for 24 hours.
					<br />
					<br /> 2. Change the water every 12 hours. Move the sea cucumbers into
					an oil-free pot with clean water and bring to a boil. When the water
					boils, turn down the heat to medium and cook for approximately 40
					minutes.
					<br />
					<br /> 3. Remove the port from the heat and allow it to cool to room
					temperature. Then, put the sea cucumbers into a clean container with
					water, and store in the refrigerator for 24 hours.
					<br />
					<br /> 4. At this time, if any individual sea cucumber is not
					completely rehydrated, it can be cooked for another 15 minutes and
					continue to be soaked in ice water until all the sea cucumbers are
					totally rehydrated.
					<br />
					<br /> 5. Note: once the sea cucumbers are rehydrated from their dried
					state, it should be stored in a freezer and can last 3 months. The
					rehydration of Atlantic sea cucumbers varies according to each
					person’s experience, and the actual operation steps may be different.
					<br />
					<br />
				</Typography>
			</div>
			<RecommendProducts />
		</div>
	)
}

export default Rehydrate_method
