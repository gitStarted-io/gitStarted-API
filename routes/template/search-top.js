/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

var express = require('express');
var router = express.Router();

module.exports = (function() {

    var router = express.Router();

    router.get('/template/get/top', function(req, res, next) {
        res.send('<h1>Top 20 Templates</h1>');
    });

    return router;
})();