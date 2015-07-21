'use strict';

// Development specific configuration
// ==================================
module.exports = {
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
