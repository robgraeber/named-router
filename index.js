var NamedRoutes = require('named-routes');
var express = require('express');

var NamedRouter = function() {
    var router = express.Router();
    var namedRoutes = new NamedRoutes();
    namedRoutes.extendExpress(router);
    router.build = namedRoutes.build.bind(namedRoutes);

    return router;
};

module.exports = NamedRouter;