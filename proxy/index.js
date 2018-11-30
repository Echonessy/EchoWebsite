/**
 * Created by Echonessy on 2018/10/19.  config
 */
const path = require('path');
const common = require("./common");

module.exports.test = function (data) {
    let url = config.javaServerUrl;
    let reqUrl=url+'后台URL';
    return common.postMethod(reqUrl,data);
};
