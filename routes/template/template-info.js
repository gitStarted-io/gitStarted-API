/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

var express = require('express');
var router = express.Router();

module.exports = (function() {

    var router = express.Router();

    router.get('/template/:template', function(req, res, next) {
        res.send('<h1>This is template: '+req.params.template+'</h1>');
    });

    return router;
})();