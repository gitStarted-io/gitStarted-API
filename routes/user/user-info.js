var express = require('express');
var router = express.Router();

module.exports = (function() {

	var router = express.Router();

	router.get('/user/:user', function(req, res, next) {
		res.send({
			id:1,
			username:req.params.user
		});
	});

	return router;
})();