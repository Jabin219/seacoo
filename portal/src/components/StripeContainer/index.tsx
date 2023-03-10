import React from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY as string)

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	)
}

export default StripeContainer
