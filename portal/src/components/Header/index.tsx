import React, { useState, useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, Translate } from '@material-ui/icons'
import { Tabs, Tab, AppBar, Menu, MenuItem, Badge } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStyles } from './style'
import { CartContext } from 'context/CartContextProvider'
import { isSeacooCN } from 'utils'

const Header = () => {
	const classes = useStyles()
	const history = useHistory()
	const { t, i18n } = useTranslation()
	const lng = i18n.language
	const { pathname } = useLocation()
	const { cartCount } = useContext(CartContext)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const openTranslateMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	return (
		<AppBar position='static' className={classes.header}>
			<div className='header-container'>
				<HashLink to='/#' className='logo'>
					<LazyLoadImage src='/images/logo/seacoo-logo.png' alt='seacoo logo' />
				</HashLink>
				<Tabs className='nav' value={false}>
					<HashLink to='/#'>
						<Tab
							className={pathname === '/' ? 'visited' : ''}
							label={t('HOME')}
						/>
					</HashLink>
					<HashLink to='/product/#'>
						<Tab
							className={pathname === '/product/' ? 'visited' : ''}
							label={t('PRODUCTS')}
						/>
					</HashLink>
					<HashLink to='/about/#'>
						<Tab
							className={pathname === '/about/' ? 'visited' : ''}
							label={t('ABOUT')}
						/>
					</HashLink>
					<HashLink to='/blog/#'>
						<Tab
							className={pathname === '/blog/' ? 'visited' : ''}
							label={t('BLOG')}
						/>
					</HashLink>
					<HashLink to='/contact/#'>
						<Tab
							className={pathname === '/contact/' ? 'visited' : ''}
							label={t('CONTACT')}
						/>
					</HashLink>
					{isSeacooCN() && (
						<a href='http://seacoo.tzqywl.cn' target='_blank' rel='noreferrer'>
							<Tab className='gift-card-portal' label='礼品卡提货' />
						</a>
					)}
				</Tabs>

				<div className='icons'>
					<div className='shoppingCart'>
						<HashLink to='/order/#'>
							<Badge className='cartBadge' badgeContent={cartCount} max={100}>
								<ShoppingCart />
							</Badge>
						</HashLink>
					</div>

					{!isSeacooCN() && (
						<span onClick={openTranslateMenu}>
							<Translate style={{ color: '#000' }} />
						</span>
					)}

					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={() => {
							setAnchorEl(null)
						}}
					>
						<MenuItem
							onClick={() => {
								setAnchorEl(null)
								if (lng === 'zh') {
									i18n.changeLanguage('en')
									if (history.location.pathname.slice(0, 5) === '/blog') {
										history.push('/blog')
									}
								}
							}}
						>
							English
						</MenuItem>
						<MenuItem
							onClick={() => {
								setAnchorEl(null)
								if (lng === 'en') {
									i18n.changeLanguage('zh')
									if (history.location.pathname.slice(0, 5) === '/blog') {
										history.push('/blog')
									}
								}
							}}
						>
							中文
						</MenuItem>
					</Menu>
				</div>
			</div>
		</AppBar>
	)
}

export default Header
