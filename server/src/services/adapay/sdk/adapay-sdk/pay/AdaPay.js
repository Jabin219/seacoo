var Logger = require('../adapay-core/Logger');
var Account = require('./Account');
var AdapayTools = require('./AdapayTools');
var Checkout = require('./Checkout');
var CorpMember = require('./CorpMember');
var Drawcash = require('./Drawcash');
var Member = require('./Member');
var Payment = require('./Payment');
var PaymentConfirm = require('./PaymentConfirm');
var PaymentReverse = require('./PaymentReverse');
var Refund = require('./Refund');
var SettleAccount = require('./SettleAccount');
var Wallet = require('./Wallet');
var Config = require('./Config');
var Utils = require('../adapay-core/Utils');
var Version = require('./Version');
var set_config = (config) => {
    Object.assign(Config, config);
    Logger.setConfig(Config)
};
var set_merchant_path = (path) => {
    try {
        clean_config();
        if (typeof path === 'string' && path.length > 0) {
            var jsonString = Utils.readFile(path);
            var json = JSON.parse(jsonString);
            if (json) {
                if (Config.prod_mode == 1) {
                    Config.api_key = json.api_key_live
                } else {
                    Config.api_key = json.api_key_test
                }
                Config.public_key = json.rsa_public_key || Config.default_public_key;
                Config.private_key = json.rsa_private_key
            }
        }
        Logger.info(Config)
    } catch (error) {
        Logger.error(error)
    }
};
var set_group_merchant_path = (merchant_name) => {
    try {
        clean_config();
        if (typeof merchant_name === 'string' && merchant_name.length > 0) {
            var config = Config.config_global[merchant_name];
            if (config) {
                if (Config.prod_mode == 1) {
                    Config.api_key = config.api_key_live
                } else {
                    Config.api_key = config.api_key_test
                }
                Config.public_key = config.rsa_public_key;
                Config.private_key = config.rsa_private_key
            } else {
                var jsonString = Utils.readFile(Config.config_dirname + '/' + merchant_name + '.json');
                config = JSON.parse(jsonString);
                if (Config.prod_mode == 1) {
                    Config.api_key = config.api_key_live
                } else {
                    Config.api_key = config.api_key_test
                }
                Config.public_key = config.rsa_public_key;
                Config.private_key = config.rsa_private_key;
                Config.config_global[merchant_name] = config
            }
        }
        Logger.info(Config)
    } catch (error) {
        Logger.error(error)
    }
};
var clean_config = () => {
    Config.prod_mode = "1";
    Config.api_key = '';
    Config.private_key_path = '';
    Config.private_key = '';
    Config.public_key_path = '';
    Config.public_key = '';
    Config.base_url = 'https://api.adapay.tech'
};
module.exports = {
    Account,
    AdapayTools,
    Checkout,
    CorpMember,
    Drawcash,
    Member,
    Payment,
    PaymentConfirm,
    PaymentReverse,
    Refund,
    SettleAccount,
    Wallet,
    Config,
    set_merchant_path,
    set_group_merchant_path,
    clean_config,
    set_config,
    version: Version.version
};