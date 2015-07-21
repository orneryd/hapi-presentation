/**
 * Created by GZ0DMH on 3/11/2015.
 */

var HttpProxyAgent = require('http-proxy-agent');
var config = require('../../config');
module.exports = new HttpProxyAgent(config.proxy);
