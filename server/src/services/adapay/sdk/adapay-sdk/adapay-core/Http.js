var fs = require("fs");
var axios = require("axios");
var crypto = require('crypto');
var Logger = require('./Logger');
var Version = require('./Version');
var httpConfig = {};
axios.defaults.timeout = 60000;

function post(url, params, config) {
    return new Promise(function (resolve, reject) {
        httpConfig = config;
        let info = buildRequestInfo(url, 'post', params);
        axios.defaults.headers = info.header;
        axios.post(url, info.params).then(function (res) {
            let signature = res.data.signature;
            if (signature) {
                let data = buildResponseData(res);
                (data instanceof Error) === true ? reject(data) : resolve(data)
            } else {
                Logger.error('signature is wrong!');
                reject(new Error('signature is wrong!'))
            }
        }).catch(function (error) {
            Logger.error(error);
            if (error && error.response.data) {
                resolve(error.response.data.data || error.response.data);
                return
            }
            reject(error.toString())
        })
    })
}

function uploadFile(url, params, formData, config) {
    return new Promise(function (resolve, reject) {
        httpConfig = config;
        let info = buildRequestInfo(url, 'upload', params);
        var headers = formData.getHeaders();
        headers["Authorization"] = info.header["Authorization"];
        headers["Signature"] = info.header["Signature"];
        headers["sdk_version"] = info.header["sdk_version"];
        axios.defaults.headers = headers;
        axios.post(url, formData).then(function (res) {
            let signature = res.data.signature;
            if (signature) {
                let data = buildResponseData(res);
                (data instanceof Error) === true ? reject(data) : resolve(data)
            } else {
                Logger.error('signature is wrong!');
                reject(new Error('signature is wrong!'))
            }
        }).catch(function (error) {
            Logger.error(error);
            if (error && error.response.data) {
                resolve(error.response.data.data || error.response.data);
                return
            }
            reject(error.toString())
        })
    })
}

function get(url, params, config) {
    return new Promise(function (resolve, reject) {
        httpConfig = config;
        let info = buildRequestInfo(url, 'get', params);
        axios.defaults.headers = info.header;
        url = url + "?" + sortByASCII(params);
        axios.get(url).then(function (res) {
            let signature = res.data.signature;
            if (signature) {
                let data = buildResponseData(res);
                (data instanceof Error) === true ? reject(data) : resolve(data)
            } else {
                Logger.error('signature is wrong!');
                reject(new Error('signature is wrong!'))
            }
        }).catch(function (error) {
            Logger.error(error);
            if (error && error.response.data) {
                resolve(error.response.data.data || error.response.data);
                return
            }
            reject(error.toString())
        })
    })
}

function buildRequestInfo(url, method, params) {
    let header = {
        'Authorization': httpConfig.api_key,
        'Signature': '',
        'sdk_version': `node_${Version.version}`
    };
    let plain_text = url;
    if (method == 'post') {
        plain_text = plain_text + JSON.stringify(params);
        header["Content-type"] = 'application/json'
    } else if (method == 'get') {
        plain_text = plain_text + sortByASCII(params)
    } else if (method == 'upload') {
        plain_text = plain_text + sortByASCII(params);
        header["Content-type"] = 'multipart/form-data'
    }
    let private_key = httpConfig.private_key;
    if (!(typeof private_key === 'string' && private_key.length > 0)) {
        private_key = readFile(httpConfig.private_key_path);
        httpConfig.private_key = private_key
    }
    let cipher_text = rsaSign(private_key, plain_text);
    header["Signature"] = cipher_text;
    return {
        header,
        params
    }
}

function buildResponseData(resp) {
    let resp_json = resp.data;
    let public_key = httpConfig.public_key;
    if (!(typeof public_key === 'string' && public_key.length > 0)) {
        public_key = readFile(httpConfig.public_key_path);
        httpConfig.public_key = public_key
    }
    let data = resp_json.data || '';
    let signature = resp_json.signature || '';
    if (rsaDesign(signature, public_key, data)) {
        return data
    }
    let err = new Error('check signature error !');
    Logger.error(err);
    return err
}

function verifySign(resp_json, sign, config) {
    httpConfig = config;
    let public_key = httpConfig.public_key;
    if (!(typeof public_key === 'string' && public_key.length > 0)) {
        public_key = readFile(httpConfig.public_key_path);
        httpConfig.public_key = public_key
    }
    let data = resp_json.data || '';
    let signature = sign || '';
    if (rsaDesign(signature, public_key, data)) {
        return data
    }
    let err = new Error('check signature error !');
    Logger.error(err);
    return err
}

function sortByASCII(obj) {
    var arr = new Array();
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++
    }
    var sortArr = arr.sort((a, b) => {
        return a > b ? 1 : -1
    });
    var sortStrArr = [];
    for (var i in sortArr) {
        let s1 = sortArr[i];
        let s2 = obj[s1];
        let s3 = s1 + "=" + s2;
        sortStrArr.push(s3)
    }
    let string = sortStrArr.join('&');
    return string
}

function readFile(filePath) {
    try {
        var data = fs.readFileSync(filePath, 'utf8');
        return data
    } catch (error) {
        Logger.error(error);
        return ''
    }
}

function rsaSign(private_key, message) {
    try {
        let mKey = fillPrivateKeyMarker(private_key);
        let signer = crypto.createSign('RSA-SHA1');
        let sign = signer.update(new Buffer(message, 'utf-8')).sign(mKey, 'base64');
        return sign
    } catch (error) {
        Logger.error(error);
        return ''
    }
}

function rsaDesign(signature, my_rsa_public, message) {
    try {
        let mpublic = fillPublicKeyMarker(my_rsa_public);
        let verify = crypto.createVerify('RSA-SHA1');
        let design = verify.update(new Buffer(message, 'utf-8')).verify(mpublic, signature, 'base64');
        return design
    } catch (error) {
        Logger.error(error);
        return false
    }
}

function fillPublicKeyMarker(public_key) {
    if (public_key.indexOf('BEGIN PUBLIC KEY') > 0) {
        return public_key
    }
    return "-----BEGIN PUBLIC KEY-----\n" + public_key + "\n-----END PUBLIC KEY-----"
}

function fillPrivateKeyMarker(private_key) {
    if (private_key.indexOf('BEGIN PRIVATE KEY') > 0) {
        return private_key
    }
    return "-----BEGIN PRIVATE KEY-----\n" + private_key + "\n-----END PRIVATE KEY-----"
}
module.exports = {
    httpConfig,
    post,
    get,
    uploadFile,
    rsaSign,
    rsaDesign,
    readFile,
    verifySign
};