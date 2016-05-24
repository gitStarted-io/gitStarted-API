/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */
var path = require('path');
var express = require('express');
var router = express.Router();

// Sample data
var topTemplates = require(path.resolve(__dirname, '../../sample_data/template-info.js')).templates;

module.exports = (function() {

    var router = express.Router();

    router.get('/template/get/top', function(req, res, next) {
    	// get templates in order of popularity from db
    	// sort templates
    	if(topTemplates)
        	res.send(topTemplates);
        else
        	res.status(500).json({message: "Database error - unable to retrieve top templates"});
    });

    return router;
})();