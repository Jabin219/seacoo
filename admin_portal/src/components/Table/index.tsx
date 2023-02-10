import React from 'react'
import {
	Size,
	Table as MUITable,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
	Typography
} from '@material-ui/core'

interface Props {
	size: Size | undefined
	columns: any
	rows: any
	rowBuilder: (row: any) => void
	page: number
	setPage: (page: number) => void
	hasNext: boolean
}

const Table = ({
	size,
	columns,
	rows,
	rowBuilder,
	page,
	setPage,
	hasNext
}: Props) => {
	const rowsPerPage = 10
	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage)
	}
	return (
		<TableContainer style={{ border: '1px solid #F5F5F5' }}>
			<MUITable size={size} style={{ width: '100%' }}>
				<TableHead style={{ backgroundColor: '#F5F5F5' }}>
					<TableRow>
						{columns.map(column => (
							<TableCell key={column.title} style={{ minWidth: 32 }}>
								<Typography variant='h2' style={{ whiteSpace: 'nowrap' }}>
									{column.title}
								</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{rows && rows.map(row => rowBuilder(row))}</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							style={{ border: 0 }}
							rowsPerPageOptions={[]}
							colSpan={4}
							count={-1}
							rowsPerPage={rowsPerPage}
							page={page}
							onChangePage={handleChangePage}
							nextIconButtonProps={{ disabled: hasNext ? false : true }}
						/>
					</TableRow>
				</TableFooter>
			</MUITable>
		</TableContainer>
	)
}

export default Table
