import React from 'react'
import Snackbar from 'components/Snackbar'

type Status = 'success' | 'error' | ''
interface State {
	type: string
	open: boolean
	message: string
	status: Status
}

const initialState: State = {
	type: 'close',
	open: false,
	message: '',
	status: ''
}

type Action =
	| { type: 'close' }
	| {
			type: 'open'
			payload: { message: string; status: Status }
	  }

export type ContextData = {
	state: State
	dispatch: React.Dispatch<Action>
	displayNotification: (message: string, status: Status) => void
}

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'close':
			return { ...state, open: false }

		case 'open':
			return {
				...state,
				open: true,
				message: action.payload.message,
				status: action.payload.status
			}

		default:
			return { ...initialState }
	}
}

export const NotificationContext = React.createContext<ContextData>({
	state: { ...initialState },
	dispatch: () => {},
	displayNotification: () => {}
})

export const NotificationProvider = ({ children }: any) => {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	const handleClose = (): void => {
		dispatch({ type: 'close' })
	}

	const displayNotification = (message: string, status: Status) => {
		dispatch({ type: 'open', payload: { message, status } })
	}

	return (
		<NotificationContext.Provider
			value={{ state, dispatch, displayNotification }}
		>
			<Snackbar
				open={state.open}
				content={state.message}
				status={state.status}
				onClose={handleClose}
			/>
			{children}
		</NotificationContext.Provider>
	)
}
