/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import FontFaceObserver from 'fontfaceobserver'
import SnackContextProvider from 'context/SnackContextProvider'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0080B9'
		},
		secondary: {
			main: '#fff'
		}
	},
	typography: {
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		fontFamily: ['Montserrat', 'PT Serif'].join(','),
		body1: {
			fontFamily: 'PT Serif',
			color: '#4d4d4e'
		},
		body2: {
			fontFamily: 'Montserrat',
			color: '#4d4d4e'
		},
		h1: { fontFamily: 'Montserrat', color: '#4d4d4e' },
		h2: { fontFamily: 'Montserrat', color: '#4d4d4e' },
		h3: { fontFamily: 'Montserrat', color: '#4d4d4e' },
		h4: { fontFamily: 'Montserrat', color: '#4d4d4e' },
		h5: { fontFamily: 'Montserrat', color: '#4d4d4e' },
		h6: { fontFamily: 'Montserrat', color: '#4d4d4e' }
	}
})

const fontMontserrat400 = new FontFaceObserver('Montserrat', { weight: 400 })
const fontMontserrat500 = new FontFaceObserver('Montserrat', { weight: 500 })
const fontMontserrat600 = new FontFaceObserver('Montserrat', { weight: 600 })
const fontMontserrat700 = new FontFaceObserver('Montserrat', { weight: 700 })
const fontMontserrat900 = new FontFaceObserver('Montserrat', { weight: 900 })
const fontPTSerif400 = new FontFaceObserver('PT Serif', { weight: 400 })
const fontPTSerifItalic = new FontFaceObserver('PT Serif', { style: 'italic' })

Promise.all([
	fontMontserrat400.load(),
	fontMontserrat500.load(),
	fontMontserrat600.load(),
	fontMontserrat700.load(),
	fontMontserrat900.load(),
	fontPTSerif400.load(),
	fontPTSerifItalic.load()
]).then(() =>
	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<SnackContextProvider>
				<App />
			</SnackContextProvider>
		</ThemeProvider>,
		document.getElementById('root')
	)
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
/*eslint-disable*/
