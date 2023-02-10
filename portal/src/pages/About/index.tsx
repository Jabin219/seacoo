import React from 'react'
import { Grid, Typography, Fade } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import MetaTags from 'react-meta-tags'

const About = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<Fade in={true}>
			<div className={classes.about}>
				<MetaTags>
					<title>{t('North American Sea Cucumber Specialist | Seacoo')}</title>
					<meta
						name='description'
						content={t(
							'Seacoo is committed to premium quality dried sea cucumber. We also provide sea cucumber dietary supplement.'
						)}
					/>
				</MetaTags>
				<div className='banner'>
					<div className='overlay'></div>
					<Typography variant='h2'>{t('about banner')}</Typography>
				</div>
				<div className='about-body'>
					<div className='brands'>
						<div className='title-container'>
							<span className='title'>
								&nbsp;&nbsp;&nbsp;{t('Brands')}&nbsp;&nbsp;&nbsp;
							</span>
						</div>
						<div className='brands-container'>
							<Grid container spacing={10}>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											'SEACOO is a sub-brand of Right Source Group Ltd.(RSG), which focuses on providing healthy marine food, mainly on sea cucumbers or their derivatives, to the market and grand customers. With a few years growing, the brand, which started at Halifax, an east coast city of Canada, has already built up two sea cucumber fishing bases both on Halifax and Vancouver, west coast of Canada. Moreover, by tracing and supervising the whole process, from wild fishing to processing, packaging, and other producing activities, SEACOO has achieved a high standard on food safety. Therefore, SEACOO is the only company that owns the certifications from CFIA (Canadian Food Inspection Agency) for its two food processing plants，which respectively set on the Halifax, NS and Alberny, Vancouver Island, BC. By 2020, those factories have processed more than 6 million pounds of Arctic sea cucumber, as well as more than 200,000 pounds of Alaska Sea Cucumber.'
										)}
									</Typography>
								</Grid>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about1.jpg'
										alt={t('frozen process')}
									/>
								</Grid>
							</Grid>
							<Grid container spacing={10} className='subgrid-container'>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about2.jpg'
										alt={t('sea cucumber processing')}
									/>
								</Grid>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											'Since 2017, SEACOO has been chosen as the only corporative brand for sea cucumber products with Canadian airport duty-free shops. Its products of sea cucumbers are being known by customers from all over the world.  At the same time, SEACOO also actively developed scientific-based marine health products. With the support from the scientific institutions of Canada, SEACOO and its corporate Beche produced its 100% sea cucumber extraction powder, by using the most natural extraction way, in 2019, which has already received the NPN certification from Health Canada.'
										)}
									</Typography>
									<br />
									<Typography>
										{t(
											'In order to provide the health benefits from sea cucumbers to all our customers who trust SEACOO, we will keep trying our best to bring higher quality products to consumers in the future, with great attention and passion for the health products of marine food.'
										)}
									</Typography>
								</Grid>
							</Grid>
						</div>
						<div className='title-container'>
							<Typography variant='h4' className='title'>
								&nbsp;&nbsp;&nbsp;{t('Mission')}&nbsp;&nbsp;&nbsp;
							</Typography>
						</div>
						<div className='mission-container'>
							<Grid container spacing={10}>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about3.jpg'
										alt={t('Fishing Boat Harbour')}
									/>
								</Grid>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											"As a Canadian biotechnology company for healthy and marine products, we are moving forward to our goal： to occur higher percentages of the market within the competition of similar products. With the consideration of various situations, and the analysis of advantages and deficiencies, we gradually set up a rigorous corporate strategy, for the guidence of our both production and marketing activities. Overall, the company will plan the company's development in accordance with the strategic steps from small to large, from near to far, from easy to difficult, and from single to diversified. The plan is to open the market in serval stages： Enlarging the product categories; Understanding the new needs of customers; Expandour share in the domestic market, and eventually we can occupy and stabilize the international market through technical cooperation and other forms."
										)}
									</Typography>
								</Grid>
							</Grid>
						</div>
						<div className='title-container'>
							<Typography variant='h4' className='title'>
								&nbsp;&nbsp;&nbsp;{t('Industrial Association')}
								&nbsp;&nbsp;&nbsp;
							</Typography>
						</div>
						<div className='industrial-association-container'>
							<Grid container spacing={10}>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											'Nova Scotia SeaFood Industrial program “Nova Scotia Seafood” trademark. The “Nova Scotia Seafood” trademark is a collective label that differentiates premium Nova Scotia seafood in the global marketplace and adds value across the Nova Scotia seafood industry.'
										)}
									</Typography>
									<br />
									<Typography>
										{t(
											'Nova Scotia seafood is unique because it not only originates from our cold, pristine waters but also utilizes several generations of experience and modern knowledge and technology and is harvested and farmed in a sustainable manner. The “Nova Scotia Seafood” trademark conveys to consumers all over the world that seafood bearing the trademark embodies these important qualities. That is the benefit that the trademark offers across the board, to the entire Nova Scotia seafood industry.'
										)}
									</Typography>
								</Grid>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about4.jpg'
										alt={t('Nova Scotia sea cucumber trademark')}
									/>
								</Grid>
							</Grid>
							<Grid container spacing={10} className='subgrid-container'>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about5.jpg'
										alt={t('sea cucumber quality control lab')}
									/>
								</Grid>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											'To ensure that premium products are represented under the Nova Scotia Seafood Brand, interested companies will be required to meet a defined set of administrative and product criteria.'
										)}
									</Typography>
									<br />
									<Typography>
										{t(
											'Companies must comply with applicable regulatory requirements and demonstrate a commitment to continuous improvement through quality assurance documentation. By obtaining a license to utilize the “Nova Scotia Seafood” trademark on products and promotional material, companies can benefit from the marketing investments made by Nova Scotia Seafood.'
										)}
									</Typography>
								</Grid>
							</Grid>
						</div>
						<div className='title-container'>
							<Typography variant='h4' className='title'>
								&nbsp;&nbsp;&nbsp;{t('Fishing Techniques')}
								&nbsp;&nbsp;&nbsp;
							</Typography>
						</div>
						<div className='fishing-techniques-container'>
							<Grid container spacing={10}>
								<Grid item xs={6} className='image'>
									<img
										src='/images/about/about6.jpg'
										alt={t('seacoo sea cucumber process')}
									/>
								</Grid>
								<Grid item xs={6} className='text'>
									<Typography>
										{t(
											'We insist on developing our fishing industry in a sustainable way. Atlantic sea cucumbers are harvested from the eastern coast of Canada and grow on the sea floor about 30 meters underwater. Atlantic sea cucumbers are harvested by trawling. The fishing boat lands early the next morning after catching. Then sea cucumbers are sent to our factory within 30 minutes. Rigorous screening, visceral, boiling and drying steps will take place. The weight of removed parts accounts for 1/3 of the total sea cucumbers. The entire process is strictly regulated by the Canadian Food Inspection Agency.'
										)}
									</Typography>
									<br />
									<Typography>
										{t(
											'On the other hand, Alaska red sea cucumbers are harvested by divers through artificial diving and fishing methods, and are transported to the processing factory on the same day for ecological processing, including strict screening, cleaning of internal organs, cooking under constant temperature, and aseptic drying. This processing method allows sea cucumbers to be dried more thoroughly, and to become the product with the highest dryness level. Our unique processing method makes the weight of processed sea cucumbers half or less of that by other methods, and has a dehydration rate of more than 95%. This guarantees the nutritional value, and also ensures the product can be stored for a long period.'
										)}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	)
}

export default About
