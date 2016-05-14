var express = require('express');
var router = express.Router();

module.exports = (function() {

	var router = express.Router();

	router.get('/user/:user', function(req, res, next) {
		res.send('<h1>Hi there, '+req.params.user+'</h1>');
	});

	return router;
})();