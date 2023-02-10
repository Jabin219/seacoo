import React from 'react'
import { act } from '@testing-library/react-hooks'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
	act(() => {
		ReactDOM.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
			document.createElement('div')
		)
	})
})
