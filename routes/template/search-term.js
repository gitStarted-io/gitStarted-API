/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

var express = require('express');
var router = express.Router();

module.exports = (function() {

    var router = express.Router();

    router.get('/template/search/:term', function(req, res, next) {
        res.send('<h1>'+req.params.term+'</h1>');
    });

    return router;
})();