var Http = require('../adapay-core/Http');
var Logger = require('../adapay-core/Logger');
var Config = require('./Config');
async function create(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + '/v1/payments';
        kwargs["currency"] = kwargs.currency || "cny";
        Http.post(url, kwargs, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}
async function query(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/payments/${kwargs.payment_id}`;
        Http.get(url, kwargs, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}
async function queryList(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/payments/list`;
        Http.get(url, kwargs, Config).then(function (result) {
            Logger.info(result);
            resolve(result)
        }).catch(function (error) {
            Logger.error(error);
            reject(error)
        })
    })
}
async function close(kwargs) {
    return new Promise(function (resolve, reject) {
        let url = Config.base_url + `/v1/payments/${kwargs.payment_id}/close`;
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
    create,
    query,
    close,
    queryList
};