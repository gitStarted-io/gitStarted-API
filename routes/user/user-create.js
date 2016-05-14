/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

var express = require('express');
var router = express.Router();

module.exports = (function() {

    var router = express.Router();

    router.post('/user/create', function(req, res, next) {
        res.send('<h1>User was probably created.</h1>');

        res.redirect('/');
        res.close();
    });

    return router;
})();
