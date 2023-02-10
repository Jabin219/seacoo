const default_public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwN6xgd6Ad8v2hIIsQVnbt8a3JituR8o4Tc3B5WlcFR55bz4OMqrG/356Ur3cPbc2Fe8ArNd/0gZbC9q56Eb16JTkVNA/fye4SXznWxdyBPR7+guuJZHc/VW2fKH2lfZ2P3Tt0QkKZZoawYOGSMdIvO+WqK44updyax0ikK6JlNQIDAQAB';
var debug = false;
var prod_mode = "1";
var config_dirname = "";
var config_global = {};
var api_key = '';
var private_key_path = '';
var private_key = '';
var public_key_path = '';
var public_key = default_public_key;
var connect_timeout = 30000;
var base_url = 'https://api.adapay.tech';
var page_base_url = 'https://page.adapay.tech';
var log_file_path = './';
var log_level = 'warn';
var log_console_enable = false;
module.exports = {
    default_public_key,
    debug,
    prod_mode,
    config_dirname,
    config_global,
    api_key,
    private_key_path,
    private_key,
    public_key_path,
    public_key,
    connect_timeout,
    base_url,
    page_base_url,
    log_file_path,
    log_level,
    log_console_enable
};