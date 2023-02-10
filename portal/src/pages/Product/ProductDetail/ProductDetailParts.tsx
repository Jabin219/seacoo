import React, { useState } from 'react'
import { Button, Tab, Tabs, Typography } from '@material-ui/core'
import { useStyles } from './style'
import BecheFeatures from './Features/BecheFeatures'
import EastFeatures from './Features/EastFeatures'
import EastSplitFeatures from './Features/EastSplitFeatures'
import WestFeatures from './Features/WestFeatures'
import CollagenFeatures from './Features/CollagenFeatures'
import DumplingFeatures from './Features/DumplingFeatures'
import RehydrateEast from './Direction/RehydrateEast'
import RehydrateWest from './Direction/RehydrateWest'
import CollagenDirection from './Direction/CollagenDirection'
import EastNutrients from './Nutrients/EastNutrients'
import WestNutrients from './Nutrients/WestNutrients'
import CollagenNutrients from './Nutrients/CollagenNutrients'
import WestRehydratedNutrients from './Nutrients/WestRehydratedNutrients'
import BecheNutrients from './Nutrients/BecheNutrients'
import ProductsComments from './Comments/ProductsComments'
import { ProductData } from 'constant'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { Product } from 'models'
import ChowderFeatures from './Features/ChowderFeatures'
import ChowderDirection from './Direction/ChowderDirection'
import ChowderNutrients from './Nutrients/ChowderNutrients'
import LeekDumplingNutrients from './Nutrients/LeekDumplingNutrients'
import ChoyDumplingNutrients from './Nutrients/ChoyDumplingNutrients'
import DumplingDirection from './Direction/DumplingDirection'
interface Props {
	productPathName: string
	product: Product
}
const ProductDetailParts = ({ productPathName, product }: Props) => {
	const classes = useStyles()
	const [descBody, setDescBody] = useState('features')
	const { t } = useTranslation()
	return (
		<div className={classes.productDetailDescription}>
			<div className='body2-header'>
				<Tabs value={descBody} indicatorColor='primary'>
					<Tab
						label={t('Features')}
						value='features'
						className={descBody === 'features' ? 'visited' : ''}
						onClick={() => {
							setDescBody('features')
						}}
					/>
					<Tab
						label={t('Direction')}
						value='direction'
						className={descBody === 'direction' ? 'visited' : ''}
						onClick={() => {
							setDescBody('direction')
						}}
					/>
					<Tab
						label={t('Nutrients')}
						value='nutrients'
						className={descBody === 'nutrients' ? 'visited' : ''}
						onClick={() => {
							setDescBody('nutrients')
						}}
					/>
					<Tab
						label={`${t('Review')}
							${product.comments ? ` (${product.comments.length})` : ''}`}
						value='review'
						className={descBody === 'review' ? 'visited' : ''}
						onClick={() => {
							setDescBody('review')
						}}
					/>
				</Tabs>
			</div>
			{(descBody === 'features' &&
				productPathName === ProductData.bechePowder.pathName && (
					<>
						<BecheFeatures />
						<Button
							variant='outlined'
							color='primary'
							className='btn-learn-more'
							href='https://beche.ca/'
							target='_blank'
							rel='noreferrer'
							style={{ width: 300 }}
						>
							{t('Learn more')}
						</Button>
					</>
				)) ||
				(descBody === 'features' &&
					productPathName === ProductData.becheCollagen.pathName && (
						<CollagenFeatures />
					)) ||
				(descBody === 'features' &&
					(productPathName === ProductData.driedWestCoastBag.pathName ||
						productPathName === ProductData.driedWestCoastBox.pathName ||
						productPathName === ProductData.driedWestCoastGiftBox.pathName ||
						productPathName === ProductData.rehydratedBlackBox.pathName) && (
						<>
							<WestFeatures />
							<HashLink to='/west-coast/#'>
								<Button
									variant='outlined'
									color='primary'
									className='btn-learn-more'
								>
									{t('Learn more')}
								</Button>
							</HashLink>
						</>
					)) ||
				(descBody === 'features' &&
					(productPathName === ProductData.driedEastCoastBag.pathName ||
						productPathName === ProductData.driedEastCoastBox.pathName ||
						productPathName === ProductData.driedEastCoastGiftBox.pathName ||
						productPathName === ProductData.rehydratedRedBag.pathName) && (
						<>
							<EastFeatures />
							<HashLink to='/east-coast/#'>
								<Button
									variant='outlined'
									color='primary'
									className='btn-learn-more'
								>
									{t('Learn more')}
								</Button>
							</HashLink>
						</>
					)) ||
				(descBody === 'features' &&
					(productPathName === ProductData.driedEastCoastSplitBag.pathName ||
						productPathName ===
							ProductData.driedEastCoastSplitBox.pathName) && (
						<>
							<EastSplitFeatures />
							<HashLink to='/east-coast/#'>
								<Button
									variant='outlined'
									color='primary'
									className='btn-learn-more'
								>
									{t('Learn more')}
								</Button>
							</HashLink>
						</>
					)) ||
				(descBody === 'features' &&
					productPathName === ProductData.chowder.pathName && (
						<ChowderFeatures />
					)) ||
				(descBody === 'features' &&
					(productPathName === ProductData.choyDumpling.pathName ||
						productPathName === ProductData.leekDumpling.pathName) && (
						<DumplingFeatures />
					))}
			{(descBody === 'direction' &&
				(productPathName === ProductData.driedEastCoastBag.pathName ||
					productPathName === ProductData.driedEastCoastBox.pathName ||
					productPathName === ProductData.driedEastCoastSplitBag.pathName ||
					productPathName === ProductData.driedEastCoastSplitBox.pathName ||
					productPathName === ProductData.driedEastCoastGiftBox.pathName) && (
					<RehydrateEast />
				)) ||
				(descBody === 'direction' &&
					(productPathName === ProductData.driedWestCoastBag.pathName ||
						productPathName === ProductData.driedWestCoastBox.pathName ||
						productPathName === ProductData.driedWestCoastGiftBox.pathName) && (
						<RehydrateWest />
					)) ||
				(descBody === 'direction' &&
					(productPathName === ProductData.becheCollagen.pathName ||
						productPathName === ProductData.becheCollagen.pathName) && (
						<CollagenDirection />
					)) ||
				(descBody === 'direction' &&
					productPathName === ProductData.bechePowder.pathName && (
						<div>
							<Typography
								style={{
									fontSize: 14,
									letterSpacing: 0.18,
									lineHeight: '18px',
									maxWidth: 600,
									margin: '0 auto'
								}}
							>
								<Typography style={{ fontWeight: 'bold' }}>
									Storage Tips:
								</Typography>
								Bêche is an all-natural, highly absorbable fine powder with no
								additives, preservatives, or chemical fillers. For best quality
								retention it is recommended to keep refrigerated, leave the
								silica packet in the bottle, close the lid tightly after use,
								and consume within 60 days of opening.
							</Typography>
						</div>
					)) ||
				(descBody === 'direction' &&
					productPathName === ProductData.chowder.pathName && (
						<ChowderDirection />
					)) ||
				(descBody === 'direction' &&
					(productPathName === ProductData.rehydratedRedBag.pathName ||
						productPathName === ProductData.rehydratedBlackBox.pathName) && (
						<Typography style={{ fontWeight: 'bold' }}>
							解冻后烹饪即可食用
						</Typography>
					)) ||
				(descBody === 'direction' &&
					(productPathName === ProductData.choyDumpling.pathName ||
						productPathName === ProductData.leekDumpling.pathName) && (
						<DumplingDirection />
					))}
			{(descBody === 'nutrients' &&
				(productPathName === ProductData.driedEastCoastBag.pathName ||
					productPathName === ProductData.driedEastCoastBox.pathName ||
					productPathName === ProductData.driedEastCoastSplitBag.pathName ||
					productPathName === ProductData.driedEastCoastSplitBox.pathName ||
					productPathName === ProductData.driedEastCoastGiftBox.pathName ||
					productPathName === ProductData.rehydratedRedBag.pathName) && (
					<EastNutrients />
				)) ||
				(descBody === 'nutrients' &&
					(productPathName === ProductData.driedWestCoastBag.pathName ||
						productPathName === ProductData.driedWestCoastBox.pathName ||
						productPathName === ProductData.driedWestCoastGiftBox.pathName) && (
						<WestNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.bechePowder.pathName && (
						<BecheNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.becheCollagen.pathName && (
						<CollagenNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.chowder.pathName && (
						<ChowderNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.choyDumpling.pathName && (
						<ChoyDumplingNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.leekDumpling.pathName && (
						<LeekDumplingNutrients />
					)) ||
				(descBody === 'nutrients' &&
					productPathName === ProductData.rehydratedBlackBox.pathName && (
						<WestRehydratedNutrients />
					))}
			{descBody === 'review' && <ProductsComments product={product} />}
		</div>
	)
}
export default ProductDetailParts
