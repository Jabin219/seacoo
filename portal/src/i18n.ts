import { isSeacooCN } from 'utils'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from 'constant/languageEn'
import { zh } from 'constant/languageZh'
import { zhCN } from 'constant/languageZhCN'
i18n.use(initReactI18next).init({
	resources: {
		en,
		zh,
		zhCN
	},
	lng: isSeacooCN() ? 'zhCN' : 'en',
	fallbackLng: 'en',
	debug: true,
	ns: ['translations'],
	defaultNS: 'translations',
	keySeparator: false,
	interpolation: {
		escapeValue: false
	}
})

export default i18n
