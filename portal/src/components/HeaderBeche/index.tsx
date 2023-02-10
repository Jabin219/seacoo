import React, { useContext } from 'react'
import { useStyles } from './style'
import { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import { CartContext } from 'context/CartContextProvider'

const HeaderBeche = () => {
	const classes = useStyles()
	const { cartCount } = useContext(CartContext)
	return (
		<div className={classes.header}>
			<a href='https://beche.ca' className='logo'>
				<img src='/images/logo/beche-logo.png' alt='logo' />
			</a>
			<div className='cart-icon'>
				<HashLink to='/order'>
					<Badge variant='dot' invisible={cartCount === 0}>
						<ShoppingCart />
					</Badge>
				</HashLink>
			</div>
		</div>
	)
}

export default HeaderBeche
