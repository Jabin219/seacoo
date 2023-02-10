import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'

const FAQsCA = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.faqs}>
			<Typography variant='h4' className='title'>
				{t('Frequent Asked Questions')}
			</Typography>
			<Typography variant='h4' className='subtitle'>
				{t('Ingredients & Sourcing')}
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) Are all of your products natural?')}
				</Typography>
				<Typography>
					{t(
						'A) All of our sea cucumber products are wild caught from the East Coast (Halifax) and West Coast (Vancouver) of Canada. Seacoo is devoted to product quality assurance. All of our ingredients are approved by Health Canada and strictly regulated by the Canadian Food Inspection Agency of the entire process. Our products are stored under high cleanliness and safety standards and prevent contamination during delivery, storage, preparation, and distribution.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t('Q) Where are your products made from?')}
				</Typography>
				<Typography>
					{t(
						'A) Atlantic sea cucumber is harvested from the east coast of Canada and the Alaska red sea cucumber, also named giant red sea cucumber, is harvested in British Columbia.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t(
						"Q) How do I know that your products are of good quality or that they actually contain what's on the label?"
					)}
				</Typography>
				<Typography>
					{t(
						"A) Seacoo guarantees each product's purity, potency, and safety until the expiry date listed on the label. Seacoo Corporation's management firmly believes in providing all customers with high quality and safe sea cucumber products. The company accepts its duty to comply with all relevant food legislation."
					)}
				</Typography>
				<br />
				<Typography>
					{t(
						'Divers harvest the sea cucumbers products through artificial diving and fishing methods. They are then transported to the processing factory on the same day for ecological processing, including strict screening, cleaning of internal organs, cooking under constant temperature, and aseptic drying. The Canadian Food Inspection Agency strictly regulates the entire process.'
					)}
				</Typography>
			</div>
			<br />
			<br />
			<Typography variant='h4' className='subtitle'>
				{t('Sustainability')}
			</Typography>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t(
						"Q) Will Seacoo's long-term fishing of sea cucumbers cause irreversible harm to the ocean?"
					)}
				</Typography>
				<Typography>
					{t(
						"A) Sustainable fisheries and aquaculture mean the harvesting and farming of fish stocks in a manner that meets the needs of the present without compromising future generations' ability to meet their own needs. Instead of fishing unrestrainedly or causing a heavy load to the ocean, we insist on sustainably developing our fishing industry by addressing ecosystem considerations and using a scientific-based approach to managing our resources. We partner with family fisheries who follow strict guidelines set by the Canadian Department of Fisheries and Oceans by supporting ocean biodiversity through a conscientious approach to Sea Cucumber harvest. In more detail, we screen carefully and return the un-grown marine life to the ocean in every time of fishing, to ensure that they have enough time to grow. At the same time, we employ environmentally friendly processes to ensure sustainable consumption and production patterns, not only for contributing our power to the sustainable development of the marine but also to ensure our products are produced in high-quality and safe standards."
					)}
				</Typography>
				<Typography>
					{t(
						'We believe that only the healthy oceans and sustainable ecosystem and environment for marine life can provide critical support functions upon which human health and well-being depend.'
					)}
				</Typography>
			</div>
			<div className='question'>
				<Typography variant='h6' className='mini-title'>
					{t(
						'Q) Does Seacoo treat environment friendly as its responsibility?'
					)}
				</Typography>
				<Typography>
					{t(
						'A) The oceans are under increasing stress from multiple urban and rural sources of pollution. Those are causing damage to the marine environment and lives, and for example, pharmaceutical residues, microplastics, or other substances can have harmful consequences for human health. As an environmental-friendly and user-central company, protecting the ocean and preventing marine pollution is one of the main duties and responsibilities; not only do we intend to ensure the high quality of our products, but we also contribute our power to sustainable development of the marine industry of Canada. Meanwhile, we employ environmentally friendly processes in our production to ensure sustainable consumption and production patterns.'
					)}
				</Typography>
			</div>
			<br />
			<br />
		</div>
	)
}

export default FAQsCA
