import React, { useState, useContext, createContext } from 'react'
import { Stepper, Step, StepLabel, Grid } from '@material-ui/core'
import ShoppingCart from './ShoppingCart'
import Shipping from './ShippingAddress/Shipping'
import Payment from './Payment'
import Confirmation from './Confirmation'
import OrderSummary from 'components/OrderSideBar/OrderSummary/OrderSummary'
import OrderItems from 'components/OrderSideBar/OrderItems/OrderItems'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { Address, Order } from 'models/index'
import { countCartTotal, saveCart } from './cartHandler'
import { CartContext } from 'context/CartContextProvider'
import MetaTags from 'react-meta-tags'

const OrderContext = createContext<any>(null)

const OrderPage = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	const [activeStep, setActiveStep] = useState(0 as number)
	const [paymentResult, setPaymentResult] = useState({
		status: 'IDLE'
	})
	const { cart, setCart, setCartCount } = useContext(CartContext)
	const [order, setOrder] = useState({
		subtotal: countCartTotal(cart),
		email: '',
		products: cart,
		addressShipping: {} as Address,
		discount: 0
	} as Order)
	const [confirmTimer, setConfirmTimer] = useState()

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}
	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	const clearCart = () => {
		setCart([])
		saveCart(cart)
		localStorage.removeItem('cart')
		setCartCount(0)
	}

	const getStepContent = (step: number) => {
		switch (step) {
			case 0:
				return <ShoppingCart />
			case 1:
				return <Shipping next={handleNext} back={handleBack} />
			case 2:
				return (
					<Payment
						next={handleNext}
						back={handleBack}
						setResult={setPaymentResult}
						paymentResult={paymentResult}
					/>
				)
			case 3:
				return <Confirmation result={paymentResult} />
		}
	}

	return (
		<OrderContext.Provider
			value={{
				order,
				setOrder,
				confirmTimer,
				setConfirmTimer,
				clearCart
			}}
		>
			<MetaTags>
				<title>{t('Check out | Seacoo')}</title>
			</MetaTags>
			<div className={classes.main}>
				<div className={classes.container}>
					<Stepper
						className={classes.stepper}
						activeStep={activeStep}
						color='primary'
					>
						<Step>
							<StepLabel>{t('Shopping Cart')}</StepLabel>
						</Step>
						<Step>
							<StepLabel>{t('Shipping')}</StepLabel>
						</Step>
						<Step>
							<StepLabel>{t('Payment')}</StepLabel>
						</Step>
					</Stepper>
					<Grid container>
						<Grid
							item
							xs={activeStep !== 3 ? 8 : 12}
							style={{ marginRight: 50 }}
						>
							{getStepContent(activeStep)}
						</Grid>
						{activeStep !== 3 && (
							<Grid item xs>
								<OrderSummary
									step={activeStep}
									next={handleNext}
									order={order}
									setOrder={setOrder}
								/>

								{(activeStep === 1 || activeStep === 2) && <OrderItems />}
							</Grid>
						)}
					</Grid>
				</div>
			</div>
		</OrderContext.Provider>
	)
}

export default OrderPage
export { OrderContext }
