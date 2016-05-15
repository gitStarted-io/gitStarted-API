/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */
var path = require('path');
var info = require(path.resolve(__dirname, '../../sample_data/template_info.js'));

var express = require('express');
var router = express.Router();

var notFound = {message: "Not Found"}

module.exports = (function() {

    var router = express.Router();

    router.get('/template/:template', function(req, res, next) {
        // query database
        console.log(info.templates.length);
        for(var i in info.templates) {
        	if(req.params.template === info.templates[i].templateName) {
	        	// If parameter is valid, send template info
	        	res.json(info.templates[i]);
	        }
        }
        res.status(404).json(notFound);
        
    });

    return router;
})();