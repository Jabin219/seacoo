var Http = require('../adapay-core/Http');
var Logger = require('../adapay-core/Logger');
var Config = require('./Config');

function payment(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/account/payment`;
        Http.post(url, kwargs, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}
module.exports = {
    payment
};