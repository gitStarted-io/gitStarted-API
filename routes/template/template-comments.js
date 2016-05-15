var path = require('path');
var express = require('express');
var router = express.Router();

// Sample data
var comments = require(path.resolve(__dirname,'../../sample_data/template-comments')).comments;

var notFound = {message: "No comments found for template or there exists no template with that id."};

module.exports = (function() {

    var router = express.Router();

    router.get('/template/comment/:templateId', function(req, res, next) {
        var templateId = parseInt(req.params.templateId);
        var num = 0;
        var commentsToSend = [];

        for(var i in comments) {
        	console.dir(typeof(comments[i].templateId));
        	if(comments[i].templateId === templateId) {
        		num +=1;
        		commentsToSend.push(comments[i]);
        	}
        }

        if(commentsToSend.length !== 0) {
        	res.json({
        		templateId: templateId,
        		numberOfCommments: num,
        		comments: commentsToSend
        	});
        }

        res.status(404).json(notFound);
    });

    return router;
})();