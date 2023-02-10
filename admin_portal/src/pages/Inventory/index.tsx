import React, { useEffect, useState } from 'react'
import {
	FormControl,
	MenuItem,
	Table,
	TableCell,
	TableRow,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
	Typography,
	Select,
	TextField,
	ClickAwayListener
} from '@material-ui/core'
import useProducts from 'hooks/products'
import { Product } from 'models'
import { inventoryColumns, inventoryUpdateProduct } from 'constant'
import { useStyles } from './style'
import { getCurrencySymbol } from 'utils'
import Dialogs from './Dialogs'
import { ProductStatus, ProductTaxable } from './constant'
const Inventory = () => {
	const classes = useStyles()
	const [confirmWindowOpen, setConfirmWindowOpen] = useState(false)
	const [outOfStockUpdateOpen, setOutOfStockUpdateOpen] = useState(false)
	const [modifyValue, setModifyValue] = useState('')
	const [fieldName, setFieldName] = useState('')
	const [selectedProductId, setSelectedProductId] = useState('')
	const [selectedOptionId, setSelectedOptionId] = useState('')
	const [statusDescriptionZh, setStatusDescriptionZh] =
		useState('暂时缺货，大概需要2-3周补货时间')
	const [statusDescriptionEn, setStatusDescriptionEn] = useState(
		'Out of stock for 2-3 weeks'
	)
	const { products, updateProduct, getProducts, setEditable } = useProducts()
	const handleProductTaxable =
		(id: string) => (event: React.ChangeEvent<{ value: unknown }>) => {
			setConfirmWindowOpen(true)
			setFieldName(inventoryUpdateProduct.taxable)
			setModifyValue(event.target.value as string)
			setSelectedProductId(id)
		}
	const handleClickProductPrice = (product: Product, row: any) => {
		setSelectedProductId(product.id)
		if (row.label) {
			setFieldName(inventoryUpdateProduct.option)
			setModifyValue(row.price)
			setEditable(row.id, true)
			setSelectedOptionId(row.id)
		} else {
			setFieldName(inventoryUpdateProduct.price)
			setModifyValue(product.price)
			setEditable(product.id, true)
		}
	}
	const handleUpdateProductOutOfStock =
		(id: string, status: ProductStatus) =>
		(event: React.ChangeEvent<{ value: unknown }>) => {
			status === ProductStatus.published
				? setOutOfStockUpdateOpen(true)
				: setConfirmWindowOpen(true)
			setFieldName(inventoryUpdateProduct.status)
			setModifyValue(event.target.value as string)
			setSelectedProductId(id)
		}
	const handleConfirm = async () => {
		setConfirmWindowOpen(false)
		setOutOfStockUpdateOpen(false)
		updateProduct(
			fieldName,
			modifyValue,
			selectedProductId,
			selectedOptionId,
			statusDescriptionZh,
			statusDescriptionEn
		)
	}
	useEffect(() => {
		getProducts()
		// eslint-disable-next-line
	}, [])
	return (
		<Paper variant='outlined' className={classes.root}>
			<TableContainer style={{ minHeight: 450 }}>
				<Table stickyHeader aria-label='sticky table' style={{ width: '100%' }}>
					<TableHead>
						<TableRow>
							{inventoryColumns.map(column => (
								<TableCell key={column.title} align='left'>
									{column.title}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{products &&
							products.map(product => {
								const rows: any = product.options || [product]
								return rows.map((row: any) => {
									return (
										<TableRow key={row.id}>
											<TableCell>
												<img
													alt='flag'
													src={
														product.country === 'CHINA'
															? '/images/icon/cn-flag.svg'
															: '/images/icon/ca-flag.svg'
													}
													width={25}
												/>
											</TableCell>
											<TableCell>
												<img
													alt='productImage'
													src={product.coverImage}
													style={{ height: 88 }}
												/>
											</TableCell>
											<TableCell>
												<Typography
													style={{
														fontSize: '14px'
													}}
												>
													{product.productName}
													{row.label && `(${row.label})`}
												</Typography>
											</TableCell>
											<TableCell>
												{!row.isEditable && (
													<Typography
														style={{
															fontSize: '14px',
															color: 'rgba(0,0,0,0.54)'
														}}
														onClick={() => {
															handleClickProductPrice(product, row)
														}}
													>
														{getCurrencySymbol(product.country)}
														{row.price}
													</Typography>
												)}
												{row.isEditable && (
													<ClickAwayListener
														onClickAway={() => {
															if (modifyValue !== row.price) {
																setEditable(row.id, false)
																setConfirmWindowOpen(true)
															} else {
																setEditable(row.id, false)
																setEditable(product.id, false)
															}
														}}
													>
														<TextField
															variant='outlined'
															defaultValue={row.price}
															size='small'
															style={{ width: 70 }}
															onChange={e => {
																setModifyValue(e.target.value)
															}}
														/>
													</ClickAwayListener>
												)}
											</TableCell>
											<TableCell>
												<FormControl>
													<Select
														disableUnderline
														defaultValue={product.taxable}
														value={product.taxable}
														onChange={handleProductTaxable(product.id)}
													>
														<MenuItem value={ProductTaxable.yes}>是</MenuItem>
														<MenuItem value={ProductTaxable.no}>否</MenuItem>
													</Select>
												</FormControl>
											</TableCell>
											<TableCell>
												<Select
													disableUnderline
													defaultValue={product.status}
													value={product.status}
													onChange={handleUpdateProductOutOfStock(
														product.id,
														product.status as ProductStatus
													)}
													style={
														product.status === ProductStatus.outOfStock
															? { color: '#E02020' }
															: {}
													}
												>
													<MenuItem value={ProductStatus.published}>
														在售
													</MenuItem>
													<MenuItem
														value={ProductStatus.outOfStock}
														style={{ color: '#E02020' }}
													>
														缺货
													</MenuItem>
												</Select>
											</TableCell>
										</TableRow>
									)
								})
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<Dialogs
				confirmWindowOpen={confirmWindowOpen}
				setConfirmWindowOpen={setConfirmWindowOpen}
				outOfStockUpdateOpen={outOfStockUpdateOpen}
				setOutOfStockUpdateOpen={setOutOfStockUpdateOpen}
				statusDescriptionZh={statusDescriptionZh}
				setStatusDescriptionZh={setStatusDescriptionZh}
				statusDescriptionEn={statusDescriptionEn}
				setStatusDescriptionEn={setStatusDescriptionEn}
				handleConfirm={handleConfirm}
			/>
		</Paper>
	)
}
export default Inventory
