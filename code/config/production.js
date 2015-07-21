'use strict';
var path = require('path');

// Production specific configuration
// =================================
module.exports = {
  // Root path of server
  appRoot: path.normalize(__dirname + '/dist'),

  // proxy connection options
  proxy: 'http://myproxy.local',
  joeService: {
    accountInfo: {
      accountNumber: '12345',
      accountSecret: 'adcdefghijlkmnop',
      locale: {
        country: 'US',
        language: 'en'
      }
    },
    uri: 'http://joe.service.com'
  }
};
