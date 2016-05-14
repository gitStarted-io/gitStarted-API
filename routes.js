var express = require('express');
var path = require('path');
var routes = path.resolve(__dirname, 'routes');

module.exports = function(app) {

	// Just to check if it's alive.
	app.get('/', require(routes + '/index.js'));

};
