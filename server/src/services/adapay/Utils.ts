import axios from 'axios'

const checkObject = obj => {
	if (!(typeof obj == 'object')) {
		return
	}
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] == undefined) {
			delete obj[key]
		}
	}
	return obj
}

/**
 *  对象根据 ASCII 降序组装
 * @param {*} obj 键值对对象
 */
const sortByASCII = obj => {
	const arr = new Array()
	let num = 0
	for (const i in obj) {
		arr[num] = i
		num++
	}
	const sortArr = arr.sort((a, b) => {
		return a > b ? 1 : -1
	})
	const sortStrArr = []
	for (const i in sortArr) {
		const s1 = sortArr[i]
		const s2 = obj[s1]
		const s3 = s1 + '=' + s2

		sortStrArr.push(s3)
	}

	const string = sortStrArr.join('&')
	return string
}

const getWeChatOpenId = async code => {
	const wxParams = {
		appid: process.env.WX_PUB_APP_ID,
		secret: process.env.WX_PUB_APP_SECRET,
		code: code,
		grant_type: 'authorization_code'
	}
	const getOpenIdResult = await axios.get(
		'https://api.weixin.qq.com/sns/oauth2/access_token',
		{
			params: wxParams
		}
	)
	return getOpenIdResult
}

export { checkObject, sortByASCII, getWeChatOpenId }
