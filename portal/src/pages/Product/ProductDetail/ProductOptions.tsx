import { Button, Grid, Typography } from '@material-ui/core'
import { Product, Option } from 'models'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
	product: Product
	selectedOption: Option | undefined
	setSelectedOption: (selectedOption: Option | undefined) => void
}

const ProductOptions = ({
	product,
	selectedOption,
	setSelectedOption
}: Props) => {
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	return (
		<div>
			<Typography variant='h6' className='product-options'>
				{t('Options')}
			</Typography>
			<Grid container spacing={1} className='product-options-info'>
				{product.options &&
					product.options.map((option: any) => {
						return (
							<Grid item xs={4} key={option.id}>
								<Button
									style={{ textTransform: 'none' }}
									key={option.id}
									color={
										selectedOption?.id === option.id ? 'primary' : 'inherit'
									}
									onClick={() => {
										setSelectedOption(option)
									}}
									variant='outlined'
									disableRipple
								>
									{product.id === '303517f2-aea8-4ee4-b7eb-b22dd16ddef9' ? (
										<Typography
											variant='body2'
											style={{
												fontWeight: 500,
												color:
													selectedOption?.id === option.id
														? 'primary'
														: 'inherit',
												whiteSpace: 'nowrap'
											}}
											dangerouslySetInnerHTML={{
												__html:
													lng === 'en'
														? `${option.label.slice(
																0,
																-5
														  )}<br/>${option.label.substr(-4)}`
														: `${option.labelZh.slice(
																0,
																-5
														  )}<br/>${option.labelZh.substr(-4)}`
											}}
										></Typography>
									) : (
										<Typography
											variant='body2'
											style={{
												fontWeight: 500,
												color:
													selectedOption?.id === option.id
														? 'primary'
														: 'inherit',
												whiteSpace: 'nowrap'
											}}
										>
											{lng === 'en' ? option.label : option.labelZh}
										</Typography>
									)}
								</Button>
							</Grid>
						)
					})}
			</Grid>
		</div>
	)
}

export default ProductOptions
