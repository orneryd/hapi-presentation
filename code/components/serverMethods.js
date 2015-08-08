/**
 * Created by tsweet on 7/22/15.
 */
// this is for internal proxies like corporate proxies that thwart your development efforts.

var _ = require('lodash');

exports.register = function (server, options, next) {

    server.method('find', _.find, {});

    next(); //IMPORTANT
};

// Also important
exports.register.attributes = {
    name: 'app-proxy'
};