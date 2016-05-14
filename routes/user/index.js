var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
// 	// validate username
// 	next();
// });


router.get('/', function(req, res) {
	// query db
	var sampleUser = {
		id: 4521347,
		username: 'zack',
		email: 'zack.harley@queensu.ca',
		accType: 1,
		joined: '2016-05-04 5:52:34:7892345',
		lastActive: '2016-05-04 8:32:55:218348'
	}
	res.send('user');
});

module.exports = router;