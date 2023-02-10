import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const primaryColor = '#2196F3'
const secondaryColor = '#5B5B5B'
const textDark = '#000000'
export const textLight = 'rgba(0,0,0,0.54)'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: primaryColor
		},
		secondary: {
			main: secondaryColor
		},
		text: {
			primary: textDark,
			secondary: textLight
		}
	},
	typography: {
		h1: {
			fontSize: 20,
			fontWeight: 500,
			lineHeight: '32px',
			letterSpacing: '0.15px',
			textAlign: 'center',
			whiteSpace: 'pre-line'
		},
		h2: {
			fontSize: 14,
			fontWeight: 700,
			lineHeight: '20px',
			letterSpacing: '0.15px',
			textAlign: 'left',
			whiteSpace: 'pre-line'
		},
		h3: {
			color: '#4D4D4E',
			fontSize: 14,
			fontWeight: 700,
			lineHeight: '17px',
			letterSpacing: '0.17px',
			textAlign: 'left',
			whiteSpace: 'pre-line'
		},
		h4: {
			color: '#4d4d4e',
			fontSize: 14,
			fontWeight: 400,
			lineHeight: '16px',
			letterSpacing: '0.17px',
			textAlign: 'left',
			whiteSpace: 'pre-line'
		},
		subtitle1: {
			color: textDark,
			fontSize: 34,
			fontWeight: 400,
			lineHeight: '42px',
			letterSpacing: '0.25px',
			whiteSpace: 'pre-line'
		},
		subtitle2: {
			color: textLight,
			fontSize: 16,
			fontWeight: 400,
			lineHeight: '24px',
			letterSpacing: '0.15px',
			whiteSpace: 'pre-line'
		},
		body1: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: '14px',
			letterSpacing: '0.14px',
			textAlign: 'left',
			whiteSpace: 'pre-line'
		},
		body2: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: '20px',
			letterSpacing: '0.15px',
			textAlign: 'left',
			whiteSpace: 'pre-line'
		},
		button: {
			color: '#000',
			fontSize: 14,
			fontWeight: 400,
			lineHeight: '24px',
			letterSpacing: '0.15px',
			textAlign: 'center',
			textTransform: 'capitalize',
			whiteSpace: 'pre-line'
		}
	},

	shape: {
		borderRadius: 4
	}
})

const MuiTheme = (children: any) => {
	return <ThemeProvider theme={theme}>{children.children}</ThemeProvider>
}

export default MuiTheme
