'use strict';

var _ = require('lodash');
var request = require('../../components/request');
var config = require('../../config');

module.exports = {
  getInternalCall: function(req, reply){

    reply(['Sierra', 'Corvette', 'Camaro']);

    //var template = _.template(config.internalUri + '/services/${methodCall}?brand=${brand}');
    //var path = template(req.params);
    //
    //console.log(path);
    //
    //request(path, function (error, response, body) {
    //  if (error) {
    //    reply(error);
    //  }
    //  else {
    //    reply(body);
    //  }
    //}).end();
  }
};
