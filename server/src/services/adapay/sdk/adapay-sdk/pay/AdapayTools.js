var Http = require('../adapay-core/Http');
var Logger = require('../adapay-core/Logger');
var Config = require('./Config');

function downloadBill(bill_date) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/bill/download`;
        Http.post(url, bill_date, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}

function unionUserId(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/union/user_identity`;
        Http.post(url, kwargs, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}

function verifySign(data, sign, config) {
    return Http.verifySign(data, sign, config)
}
module.exports = {
    downloadBill,
    unionUserId,
    verifySign
};