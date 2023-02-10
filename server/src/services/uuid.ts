import { v4 as uuidv4 } from 'uuid'

export const generateUUID = () => uuidv4()

export const generateOrderNumber = () => {
	let result = ''
	const charaterInit: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	for (let i = 0; i < 13; i++) {
		if (i === 0) {
			result += charaterInit.charAt(
				Math.floor(Math.random() * charaterInit.length)
			)
		}
		result += Math.floor(Math.random() * 10)
	}
	return result
}
