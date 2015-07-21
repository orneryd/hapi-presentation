'use strict';
/**
 * Hapi.js server.
 *
 * @type {exports}
 */

//var modules = require('./modules');

var Hapi = require('hapi');
var _ = require('lodash');
var chalk = require('chalk');
var config = require('./config');

var swig = require('swig');

swig.setDefaults({
  varControls: ['%{', '}%']
});

// Instantiate the server
var server = new Hapi.Server();

server.connection({
  port: config.port
});

/**
 * The hapijs plugins that we want to use and their configs
 */
server.register({
  register: require('./plugins/app/routes.js'),
  options: {
    config: config
    //httpAgent: require('./components/http-agent')
  }
}, function (err) {

});

var plugins = [
  {
    register: require('./plugins/example/routes.js'),
    options: {
      config: config
      //httpAgent: require('./components/http-agent')
    }
  }
];


/**
 * Setup the server with plugins, callback executed after plugins loaded
 */
server.register(plugins, {
  routes: {
    prefix: config.baseApiRoute
  }
}, function(err) {

  // If there is an error on server startup
  if(err) {
    throw err;
  }

  /**
   * Make sure if this script is being required as a module by another script, we don't start the server.
   */
  if(!module.parent) {

    /**
     * Starts the server
     */

    server.start(function () {
      chalk.yellow('\nHapi server started @', server.info.uri);
      chalk.yellow(config.appRoot);
    });

    server.views({
      path: config.appRoot + '/views',
      engines: {
        html: swig
      }
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        reply.view('index', {
          hostname: request.headers.host,
          username: 'Tim'
        });
      }
    });

    server.route({
      method: 'GET',
      path: '/listing/{param*}',
      handler: {
        directory: {
          path: config.appRoot + '/views',
          listing: true,
          index: ['index.html']
        }
      }
    });
  }
});

/**
 * Add all the modules within the modules folder
 */
//_.each(modules, function(element) {
//  server.route(element);
//});
//

/**
 * Expose the server's methods when used as a require statement
 *
 * @type {exports.server}
 */
module.exports = server;
