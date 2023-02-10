import React from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	TextField,
	DialogContentText
} from '@material-ui/core'
import { useStyles } from './style'

interface Props {
	confirmWindowOpen: boolean
	setConfirmWindowOpen: (confirmWindowOpen: boolean) => void
	outOfStockUpdateOpen: boolean
	setOutOfStockUpdateOpen: (outOfStockUpdateOpen: boolean) => void
	statusDescriptionZh: string
	statusDescriptionEn: string
	setStatusDescriptionZh: (statusDescriptionZh: string) => void
	setStatusDescriptionEn: (statusDescriptionEn: string) => void
	handleConfirm: () => void
}
const Dialogs = ({
	confirmWindowOpen,
	setConfirmWindowOpen,
	outOfStockUpdateOpen,
	setOutOfStockUpdateOpen,
	statusDescriptionZh,
	setStatusDescriptionZh,
	statusDescriptionEn,
	setStatusDescriptionEn,
	handleConfirm
}: Props) => {
	const classes = useStyles()
	return (
		<>
			<Dialog
				open={confirmWindowOpen}
				onClose={() => setConfirmWindowOpen(false)}
				classes={{ paper: classes.paper }}
			>
				<DialogTitle style={{ textAlign: 'center', fontWeight: 600 }}>
					您已对库存作出更改
				</DialogTitle>
				<DialogActions style={{ marginTop: 'auto' }}>
					<Button onClick={() => setConfirmWindowOpen(false)} color='secondary'>
						放弃
					</Button>
					<Button onClick={handleConfirm} color='primary' autoFocus>
						保存编辑
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={outOfStockUpdateOpen}
				onClose={() => setOutOfStockUpdateOpen(false)}
				classes={{ paper: classes.updateStatusWindow }}
			>
				<div className='update-status-window-container'>
					<DialogTitle
						style={{ fontWeight: 600, fontSize: 20, padding: '20px 0' }}
					>
						缺货原因
					</DialogTitle>
					<DialogContentText style={{ fontSize: 16 }}>
						请分别输入中英文版本的缺货原因简述
					</DialogContentText>
					<DialogActions style={{ display: 'block' }}>
						<TextField
							fullWidth
							margin='normal'
							label='中文版'
							defaultValue={statusDescriptionZh}
							onChange={e => {
								setStatusDescriptionZh(e.target.value)
							}}
							InputLabelProps={{
								style: { fontSize: 16 }
							}}
							InputProps={{
								style: { fontSize: 16 }
							}}
							style={{ fontSize: 20 }}
						></TextField>
						<TextField
							fullWidth
							label='英文版'
							defaultValue={statusDescriptionEn}
							onChange={e => {
								setStatusDescriptionEn(e.target.value)
							}}
							InputLabelProps={{
								style: { fontSize: 16 }
							}}
							InputProps={{
								style: { fontSize: 16 }
							}}
						></TextField>
						<div className='button-container'>
							<Button
								onClick={() => setOutOfStockUpdateOpen(false)}
								color='secondary'
							>
								取消
							</Button>
							<Button onClick={handleConfirm} color='primary' autoFocus>
								确认
							</Button>
						</div>
					</DialogActions>
				</div>
			</Dialog>
		</>
	)
}

export default Dialogs
