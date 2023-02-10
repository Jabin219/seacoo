import { Product } from 'models'
import { cartStorage } from 'pages/Order/cartHandler'
import React, { useEffect, useState } from 'react'
import { getOttExchangeRate } from 'api/order'
import { isSeacooCN, priceFormatter } from 'utils'

export const CartContext = React.createContext<any>(null)
interface Props {
	children: any
}
const CartContextProvider = ({ children }: Props) => {
	const [cartCount, setCartCount] = useState(cartStorage.length)
	const [cart, setCart] = useState<Product[]>(cartStorage)
	const [wxPubUrl, setWxPubUrl] = useState('')
	const [exchangeRate, setExchangeRate] = useState(1)
	const getExchangeRate = async () => {
		const exchangeRateResult = await getOttExchangeRate()
		setExchangeRate(exchangeRateResult.data.rate)
	}
	const getPriceResult = (price: number) => {
		if (isSeacooCN()) {
			return (price * exchangeRate).toFixed(2)
		}
		return ''
	}
	const priceFormatCN = price => {
		if (isSeacooCN()) {
			return `$ ${priceFormatter(price)}加币/￥ ${priceFormatter(
				Number(getPriceResult(price))
			)}人民币`
		}
		return `CAD$ ${priceFormatter(price)}`
	}

	useEffect(() => {
		if (isSeacooCN()) {
			getExchangeRate()
		}
	}, [])
	return (
		<CartContext.Provider
			value={{
				cartCount,
				setCartCount,
				cart,
				setCart,
				wxPubUrl,
				setWxPubUrl,
				getPriceResult,
				exchangeRate,
				priceFormatCN
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
