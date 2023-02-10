import { ProductData } from 'constant'
import { Product } from 'models'
import { useTranslation } from 'react-i18next'

const ProductMeta = () => {
	const { t } = useTranslation()
	const productTitle = (product: Product) => {
		switch (product.pathName) {
			case ProductData.bechePowder.pathName:
				return t('Bêche | 100% Canadian Sea Cucumber Extract Powder Supplement')
				break
			case ProductData.becheCollagen.pathName:
				return t('Bêche | Sea Cucumber & Collagen Women Health Support')
				break
			case ProductData.driedEastCoastBag.pathName:
				return t(
					'Seacoo | Premium Quality Dried Atlantic Sea Cucumber - Whole Cut - 454g/Bag'
				)
				break
			case ProductData.driedWestCoastBag.pathName:
				return t(
					'Seacoo | Premium Quality Dried Alaska Giant Red Sea Cucumber - 454g/Bag'
				)
				break
			case ProductData.driedEastCoastSplitBag.pathName:
				return t(
					'Seacoo | Premium Quality Dried Atlantic Sea Cucumber - Split Cut- 454g/Bag'
				)
				break
			case ProductData.driedEastCoastBox.pathName:
				return t(
					'Seacoo | Premium Quality Dried Atlantic Sea Cucumber - Whole Cut - 454g/Gift Box'
				)
				break
			case ProductData.driedEastCoastSplitBox.pathName:
				return t(
					'Seacoo | Premium Quality Dried Atlantic Sea Cucumber - Split Cut - 454g/Gift Box'
				)
				break
			case ProductData.driedWestCoastBox.pathName:
				return t(
					'Seacoo | Premium Quality Dried Alaska Giant Red Sea Cucumber - 454g/Gift Box'
				)
				break
			default:
				break
		}
	}

	const productMetaDescription = product => {
		switch (product.pathName) {
			case ProductData.bechePowder.pathName:
				return t(
					'The benefits of sea cucumber capsules include reducing hot flashes, strengthening bones and immunity.'
				)
				break
			case ProductData.becheCollagen.pathName:
				return t(
					'The perfect combination of natural collagen and sea cucumber concentrate.Joint technology of Canada and Japan. Get your daily antioxidants and organic supplements.'
				)
				break
			case ProductData.driedEastCoastBag.pathName:
				return t(
					'Pure sourced and premium quality wild-caught dried Atlantic Sea Cucumber from the East Coast of Canada. SEACOO - the most trusted brand in North America.'
				)
				break
			case ProductData.driedWestCoastBag.pathName:
				return t(
					'Pure sourced and premium quality wild-caught dried Atlantic Sea Cucumber from the East Coast of Canada. SEACOO - the most trusted brand in North America.'
				)
				break
			case ProductData.driedEastCoastSplitBag.pathName:
				return t(
					'Pure sourced and premium quality wild-caught Alaska Red Sea Cucumber from the West Coast of Canada. SEACOO - the most trusted brand in North America.'
				)
				break
			case ProductData.driedEastCoastBox.pathName:
				return t(
					'Pure sourced and premium quality wild-caught Atlantic Sea Cucumber from the East Coast of Canada. Your perfect gift idea for family and friends from SEACOO.'
				)
				break
			case ProductData.driedEastCoastSplitBox.pathName:
				return t(
					'Pure sourced and premium quality wild-caught Atlantic Sea Cucumber from the East Coast of Canada. SEACOO - the perfect gift idea for your family and friends.'
				)
				break
			case ProductData.driedWestCoastBox.pathName:
				return t(
					'Looking for decent gift for family and friends? SEACOO provides you with pure sourced and premium quality wild-caught Alaska Red Sea Cucumber from the West Coast of Canada.'
				)
				break
			default:
				break
		}
	}
	return {
		productTitle,
		productMetaDescription
	}
}

export default ProductMeta
