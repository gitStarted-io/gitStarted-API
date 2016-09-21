/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */
const path = require('path');
const express = require('express');
const router = express.Router();

// Sample data
const templates = require(path.resolve(__dirname, '../../sample_data/template-info.js')).templates;

const MESSAGES = {
	NOT_FOUND:{message: 'This search produced no results.'}
};

module.exports = (function() {

    var router = express.Router();
    var templatesToSend = [];

    // find matching terms and add them to an array
    /*
		Search Algorithm:
		 - Use a 100 point scale
		 - If the search term and the package match perfectly, score 100
		 - If the search term and the package match imperfectly, use the expression score = match.length / packageName.length
		 - If the search term matches a keyword, add 15 points
    */


    router.get('/template/search/:term', function(req, res, next) {
    	var searchTerms = req.params.term.split(' ');
    	
    	// Increase efficiency
    	var points = templates.map(function(template) {
    		for(var i in searchTerms) {
    			var regex = new RegExp(searchTerms[i]);
    			var matchArray = template.templateName.match(regex);
    			var matchPoints = 0;
    			if(matchArray) {
    				if(matchArray[0] === template.templateName)
    					// check if perfect macth with templateName +100
    					return {score: 100, name: template.templateName};
    				else {
    					// check if imperfect match with templateName +expression
    					matchPoints += Math.round(100 * matchArray[0].length / template.templateName.length);
    				}
    			}
    			for(var j in template.tags) {
    				matchArray = null;
    				matchArray = template.tags[j].match(regex);
    				// check if match with any tags +15 each
    				if(matchArray)
    					matchPoints += 15;
    			}
    			return matchPoints > 100 ? {score: 100, name: template.templateName} : {score: matchPoints, name: template.templateName};
    		}    		
    	});
    	// Sort results using algorithm
    	
    	if(points)
    		res.send(points);
    	else
    		res.status(404).send(MESSAGES.NOT_FOUND);
    });

    router.get('/template/search/:term', function() {

    });

    return router;
})();