import { Address } from 'models'

export const getAddress = () => {
	const address = localStorage.getItem('address')
	return address ? JSON.parse(address) : {}
}

export const saveAddress = (addressStorage: Address) => {
	localStorage.setItem('address', JSON.stringify(addressStorage))
}
