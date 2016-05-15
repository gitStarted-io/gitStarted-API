/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */
var path = require('path');
var express = require('express');
var router = express.Router();

// Sample data
var templates = require(path.resolve(__dirname, '../../sample_data/template-info.js')).templates;

var notFound = {message: "Not Found"};

module.exports = (function() {

    var router = express.Router();

    router.get('/template/:template', function(req, res, next) {
        // query database
        console.log(templates.length);
        for(var i in templates) {
        	if(req.params.template === templates[i].templateName) {
	        	// If parameter is valid, send template info
	        	res.json(templates[i]);
	        }
        }
        res.status(404).json(notFound);
        
    });

    return router;
})();