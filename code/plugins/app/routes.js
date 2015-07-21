// this is for internal proxies like corporate proxies that thwart your development efforts.


exports.register = function (server, options, next) {
    // no require neccesary!!
    // var config = options.config;

    // for proxying static content
    // example http://www.gmc.com/content/dam/GMC/global/master/nscwebsite/en/home/Tools/Holiday%20Landing%20Pages/Sierra%20Sales%20Event/2015-gmc-landingpage-sierra-apr-image-july-480x145.png
    server.route({
        method: 'GET',
        path: '/content/{param*}',
        handler: {
            proxy: {
                host: 'www.gmc.com',
                port: 80,
                protocol: 'http',
                passThrough: true,
                xforward: true,
                agent: options.httpAgent
            }
        }
    });

    next(); //IMPORTANT
};

// Also important
exports.register.attributes = {
    name: 'app-proxy'
};