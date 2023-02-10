import React from 'react'
import Login from './pages/Login'
import { OrderProvider } from 'context'
import Routes from './Routes'
import './App.css'
import MuiTheme from './MuiTheme'
import { NotificationProvider } from 'context/NotificationContext'

const App = () => {
	if (!localStorage.getItem('token')) {
		return <Login />
	}
	return (
		<MuiTheme>
			<NotificationProvider>
				<div className='App'>
					<OrderProvider>
						<Routes />
					</OrderProvider>
				</div>
			</NotificationProvider>
		</MuiTheme>
	)
}

export default App
