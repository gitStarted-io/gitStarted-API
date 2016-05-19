var express = require('express');
var router = express.Router();

module.exports = (function() {

	var router = express.Router();

	router.get('/user/:user', function(req, res, next) {
		res.send({
			id:1,
			username:req.params.user,
			thumbnail:'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
			joinDate:"2016/05/13 09:05:04:653",
			templates:[
				{
					templateId: 1,
					templateName: 'express-is-awesome',
					description: 'An express template with some cool plugins.',
					tags: [
						'express',
						'jade'
					],
					version: '1.0.3',
					upvotes: 120,
					downvotes: 3,
					author: req.params.user
				},
				{
					templateId: 2,
					templateName: 'gitstarted',
					description: 'The best template of them all.',
					tags: [
						'gitStarted',
						'react',
						'sql',
						'express'
					],
					version: '0.0.1',
					upvotes: 10000000000,
					downvotes: 0,
					author: req.params.user
				}
			]
		});
	});

	return router;
})();