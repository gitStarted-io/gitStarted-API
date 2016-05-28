/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

var express = require('express');
var router = express.Router();
var sampleTemplate = require("../../sample_data/template-download");

module.exports = (function() {

    var router = express.Router();

    router.get('/template/:template/download', function(req, res, next) {
        // Get the template information by name.
        // ...
        // Send it back.
        console.log("GOT HERE");
        console.log(sampleTemplate);
        res.send(sampleTemplate);
    });

    return router;
})();
