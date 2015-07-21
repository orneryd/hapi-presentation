'use strict';

/**
 * All the endpoints for anything related to vehicle
 *
 * @type {exports}
 */

var exampleController = require('./controller');

exports.register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/{methodCall}/{brand}',
      config: {
        description: 'exectutes method call on a legacy internal server',
        handler: exampleController.getInternalCall
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'example-plugin',
  pkg: require('./package.json')
};
