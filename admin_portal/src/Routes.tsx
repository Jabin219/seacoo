import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Inventory from 'pages/Inventory'
import Statistics from './pages/Statistics'
import Discount from './pages/Discount'
import MailBox from './pages/MailInbox'
import Subscription from 'pages/Subscription'
import { Grid } from '@material-ui/core'

const Routes = () => {
	return (
		<Router>
			<Grid container>
				<Grid item xs={2}>
					<Menu />
				</Grid>
				<Grid item xs={10}>
					<div className='App-content'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/orders' component={Orders} />
							<Route path='/inventory' component={Inventory} />
							<Route path='/statistics' component={Statistics} />
							<Route exact path='/discount' component={Discount} />
							<Route path='/mailbox' component={MailBox} />
							<Route path='/subscription' component={Subscription} />
						</Switch>
					</div>
				</Grid>
			</Grid>
		</Router>
	)
}

export default Routes
