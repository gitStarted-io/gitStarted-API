var express = require('express');
var path = require('path');
var routes = path.resolve(__dirname, 'routes');

module.exports = function(app) {

	// Just to check if it's alive.
	app.get('/', require(routes + '/index.js'));

	// GET REQUESTS
	app.get('/template/search/:term', require(routes + '/template/search-term.js'));
	// app.get('/template/search/top', require('./routes/template/search-top.js'));
	// app.get('/template/:template/download', require('./routes/template/template-download.js'));
	// app.get('/template/:template', require('./routes/template/template-info.js'));
	// app.get('/download', require('./routes/download.js'));
	app.get('/user/:user', require(routes +'/user/user-info.js'));

	// POST REQUESTS
	// app.post('/user/create', require('./routes/user/user-create.js'));

};
