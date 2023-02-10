import { Domains } from 'constant'
import moment from 'moment'

export const priceFormatter = (amount: number) => {
	const locale = 'en-CA'
	const options = {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}
	const formatter = new Intl.NumberFormat(locale, options).format(amount)
	return formatter
}

// calculate if today is canada day
export const isCanadaDay = () => {
	const today = new Date()
	const startDate = new Date('2021-07-01T00:00:00.000-03:00')
	const endDate = new Date('2021-07-08T00:00:00.000-03:00')
	if (
		moment.utc(today) > moment.utc(startDate) &&
		moment.utc(today) < moment.utc(endDate)
	) {
		return true
	}
	return false
}

export const isSeacoo = () => {
	if (process.env.REACT_APP_DOMAIN_NAME === Domains.seacoo) {
		return true
	}
	return false
}
export const isSeacooCN = () => {
	if (process.env.REACT_APP_DOMAIN_NAME === Domains.seacooCN) {
		return true
	}
	return false
}
export const isBeche = () => {
	if (process.env.REACT_APP_DOMAIN_NAME === Domains.beche) {
		return true
	}
	return false
}
