const createRandomCoupon = () => {
	const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	const allCharsLength = allChars.length
	let randomCode = ''
	for (let i = 0; i < 5; i++) {
		randomCode += allChars.charAt(Math.floor(Math.random() * allCharsLength))
	}
	return randomCode
}

export { createRandomCoupon }
