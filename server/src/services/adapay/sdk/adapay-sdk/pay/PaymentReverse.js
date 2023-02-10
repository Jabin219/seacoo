var Http=require('../adapay-core/Http');var Logger=require('../adapay-core/Logger');var Config=require('./Config');async function create(kwargs){return new Promise(function(resolve,reject){let url=Config.base_url+`/v1/payments/reverse`;Http.post(url,kwargs,Config).then(function(result){Logger.info(result);resolve(result)}).catch(function(error){Logger.error(error);reject(error)})})}async function query(kwargs){return new Promise(function(resolve,reject){let url=Config.base_url+`/v1/payments/reverse/${kwargs.reverse_id}`;Http.get(url,kwargs,Config).then(function(result){Logger.info(result);resolve(result)}).catch(function(error){Logger.error(error);reject(error)})})}async function queryList(kwargs){return new Promise(function(resolve,reject){let url=Config.base_url+`/v1/payments/reverse/list`;Http.get(url,kwargs,Config).then(function(result){Logger.info(result);resolve(result)}).catch(function(error){Logger.error(error);reject(error)})})}module.exports={create,query,queryList};