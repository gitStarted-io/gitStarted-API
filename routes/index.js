var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('<h1>It\'s ALIVE!</h1>');
});

router.get('/user', function(req, res) {
	res.send('<h1>This is a user page</h1>');
});

module.exports = router;
