var NamedRoutes = require('named-routes');
var express = require('express');

var createRouter = function() {
    var router = express.Router();
    var namedRoutes = new NamedRoutes();
    namedRoutes.extendExpress4(router);
    router.build = namedRoutes.build.bind(namedRoutes);

    return router;
};

module.exports = createRouter;