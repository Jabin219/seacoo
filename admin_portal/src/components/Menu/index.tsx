import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import {
	Button,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Badge
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { HashLink } from 'react-router-hash-link'
import { menuItems } from 'constant'
import OrderContext from 'context'
const useStyles = makeStyles({
	paper: {
		minWidth: 200,
		background: '#333333',
		filter: 'drop-shadow(4px 1px 12px rgba(0,0,0,0.23))',
		width: '17vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'fixed',
		'& .Mui-selected': {
			backgroundColor: 'rgba(0,0,0,0.23)'
		},
		'& .MuiTouchRipple-root': {
			display: 'none'
		},
		'& .MuiListItem-button:hover': {
			backgroundColor: 'rgba(0,0,0,0.23)'
		}
	},
	text: {
		color: '#fff',
		fontSize: 14,
		lineHeight: '20px',
		letterSpacing: '1.17px'
	}
})

const Menu = () => {
	const { pathname } = useLocation()
	const styles = useStyles()
	const handleLogOut = () => {
		localStorage.removeItem('token')
		window.location.reload()
	}
	const { unshippedOrders } = useContext(OrderContext)
	return (
		<Drawer classes={{ paper: styles.paper }} variant='permanent' anchor='left'>
			<HashLink to='/#'>
				<img
					alt='logo'
					src='/images/logo/logo.png'
					style={{ width: '64%', margin: '30px auto 63px auto' }}
				/>
			</HashLink>
			<List component='nav' style={{ width: '100%' }}>
				{menuItems.map((menuItem, index) => (
					<div key={index}>
						<ListItem
							key={menuItem.name}
							button
							to={`${menuItem.url}#`}
							component={HashLink}
							selected={pathname === menuItem.url}
						>
							<ListItemIcon style={{ marginLeft: '20%', minWidth: 40 }}>
								{menuItem.icon()}
							</ListItemIcon>
							<ListItemText
								classes={{ primary: styles.text }}
								primary={menuItem.name}
							/>
							{menuItem.name === '订单管理' &&
								unshippedOrders &&
								unshippedOrders.length > 0 && (
									<ListItemText
										classes={{ primary: styles.text }}
										primary={
											<Badge
												color='error'
												badgeContent={unshippedOrders.length}
											></Badge>
										}
									/>
								)}
						</ListItem>
					</div>
				))}
			</List>
			<Button
				disableRipple
				startIcon={<ExitToApp style={{ color: '#adadad' }} />}
				onClick={handleLogOut}
				style={{
					color: '#adadad',
					fontSize: '13px',
					fontWeight: 500,
					letterSpacing: '0.37px',
					lineHeight: '23px',
					textAlign: 'center',
					left: 16,
					bottom: 9,
					position: 'absolute'
				}}
			>
				Log out
			</Button>
		</Drawer>
	)
}

export default Menu
