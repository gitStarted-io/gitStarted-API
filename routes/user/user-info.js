var path = require('path');
var express = require('express');
var router = express.Router();

// Sample data
var users = require(path.resolve(__dirname, '../../sample_data/user-info.js')).users;

module.exports = (function() {

	var router = express.Router();

	router.get('/user/:user', function(req, res, next) {
		for(var i in users) {
			if(req.params.user === users[i].username)
				return res.json(users[i]);
		}
		res.status(404).json ({message: "User " + req.params.user + " not found."});
	});

	return router;
})();