import React, { createContext } from 'react'
import SnackBar from 'components/SnackBar/SnackBar'
export const SnackContext = createContext<ContextData>({
	showSnackbar: () => {}
})

type Severity = 'success' | 'error' | ''
interface State {
	snackType: string
	snackOpen: boolean
	snackSeverity: Severity
}
const initialState: State = {
	snackType: '',
	snackOpen: false,
	snackSeverity: ''
}
type Action =
	| { type: 'close' }
	| {
			type: 'open'
			payload: { snackType: string; snackSeverity: Severity }
	  }
export type ContextData = {
	showSnackbar: (snackType: string, snackSeverity: Severity) => void
}
const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'close':
			return { ...state, snackOpen: false }
		case 'open':
			return {
				...state,
				snackOpen: true,
				snackSeverity: action.payload.snackSeverity,
				snackType: action.payload.snackType
			}
		default:
			return { ...initialState }
	}
}

const SnackContextProvider = ({ children }: any) => {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const snackClose = () => {
		dispatch({ type: 'close' })
	}
	const showSnackbar = (snackType: string, snackSeverity: Severity) => {
		dispatch({ type: 'open', payload: { snackType, snackSeverity } })
	}
	return (
		<SnackContext.Provider
			value={{
				showSnackbar
			}}
		>
			<SnackBar
				open={state.snackOpen}
				snackClose={snackClose}
				snackType={state.snackType}
				snackSeverity={state.snackSeverity}
			/>
			{children}
		</SnackContext.Provider>
	)
}

export default SnackContextProvider
