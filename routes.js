var express = require('express');

module.exports = function(app) {

	// Just to check if it's alive.
	app.get('/', require('./routes/index.js'));

	// GET REQUESTS
	app.get('/template/search/:term', require('./routes/template/search-term.js'));

	// POST REQUESTS
	app.post('/user/create', require('./routes/user/user-create.js'));

};
