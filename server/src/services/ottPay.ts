import axios from 'axios'
import CryptoJS from 'crypto-js'

const signKey = process.env.OTTPAY_SIGN_KEY.toString().toUpperCase()
const sort = function (jsonObject) {
	const obj = JSON.parse(jsonObject)
	const keylist = []
	for (const key in obj) {
		keylist.push(key)
	}
	keylist.sort()

	let sortedStr = ''
	for (let keyidx = 0; keyidx < keylist.length; keyidx++) {
		const value_idx = obj[keylist[keyidx]]
		if (typeof value_idx == 'number') {
			sortedStr += obj[keylist[keyidx]].toString() + '.0'
		} else {
			sortedStr += obj[keylist[keyidx]]
		}
	}
	return sortedStr
}
const getDataStrFromJson = function (jsonObject) {
	return jsonObject.toString()
}

const encrypted = function (data, md5) {
	const aesKeyStr = CryptoJS.MD5(md5.concat(signKey))
		.toString()
		.substring(8, 24)
		.toUpperCase()

	const dataArray = CryptoJS.enc.Utf8.parse(data)
	const keyArray = CryptoJS.enc.Utf8.parse(aesKeyStr)

	const encrypt = CryptoJS.AES.encrypt(dataArray, keyArray, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	})

	return encrypt.toString()
}

const getMD5String = dataStr => {
	return CryptoJS.MD5(dataStr)
}
const getMD5StrFromJson = jsonObject => {
	const dataStr = sort(jsonObject)
	const md5Str = getMD5String(dataStr).toString().toUpperCase()
	return md5Str
}

const decipher = (orgData, md5) => {
	const data = orgData.replace(/[\r\n' ']/g, '')
	const aesKeyStr = CryptoJS.MD5(md5.concat(signKey))
		.toString()
		.substring(8, 24)
		.toUpperCase()

	const dataArray = CryptoJS.enc.Base64.parse(data)
	const keyArray = CryptoJS.enc.Utf8.parse(aesKeyStr)

	const decrypted = CryptoJS.AES.decrypt(
		{ ciphertext: dataArray } as any,
		keyArray,
		{
			mode: CryptoJS.mode.ECB
		}
	)

	const stb_utf8 = sort(decrypted.toString(CryptoJS.enc.Utf8))
	const calmd5 = getMD5String(stb_utf8).toString()

	if (calmd5.toUpperCase() == md5.toUpperCase()) {
		return decrypted.toString(CryptoJS.enc.Utf8)
	} else {
		console.log('check sign fail')
		return JSON.stringify({ error: '-1' })
	}
}

const encryptProcess = data => {
	const dataStr = getDataStrFromJson(JSON.stringify(data))
	const md5Str = getMD5StrFromJson(JSON.stringify(data))
	const signKey = process.env.OTTPAY_SIGN_KEY
	const dataEncrypt = encrypted(dataStr, md5Str)
	return {
		md5Str: md5Str,
		dataEncrypt: dataEncrypt
	}
}

const getExchangeRate = async () => {
	const currency = { 'Currency type': 'CYN' }
	const encryptResult = encryptProcess(currency)
	const request = {
		action: 'EX_RATE_QUERY',
		version: '1.0',
		merchant_id: process.env.OTTPAY_MERCHANT_ID,
		data: encryptResult.dataEncrypt,
		md5: encryptResult.md5Str
	}
	const result = await axios.post(
		'https://frontapi.ottpay.com:443/processV2',
		request
	)
	const response = JSON.parse(decipher(result.data.data, result.data.md5))
	return response.rate / 100000000
}

export {
	getDataStrFromJson,
	encrypted,
	getMD5StrFromJson,
	decipher,
	encryptProcess,
	getExchangeRate
}
