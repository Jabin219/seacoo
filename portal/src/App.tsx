import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'
import './i18n'
import Subscription from 'components/Subscription'
import CartContextProvider from 'context/CartContextProvider'
import RouterSeacoo from './RouterSeacoo'
import RouterBeche from './RouterBeche'
import { isBeche, isSeacoo, isSeacooCN } from 'utils'
const App = () => {
	const [subscribeWindowOpen, setSubscribeWindowOpen] = useState(false)
	const handleSubscribeDialogClose = () => {
		setSubscribeWindowOpen(false)
	}
	return (
		<CartContextProvider>
			<Dialog
				open={subscribeWindowOpen}
				onClose={handleSubscribeDialogClose}
				maxWidth='sm'
			>
				<Subscription handleSubscribeDialogClose={handleSubscribeDialogClose} />
			</Dialog>
			<div className='App'>
				{(isSeacoo() || isSeacooCN()) && (
					<RouterSeacoo setSubscribeWindowOpen={setSubscribeWindowOpen} />
				)}
				{isBeche() && <RouterBeche />}
			</div>
		</CartContextProvider>
	)
}
export default App
