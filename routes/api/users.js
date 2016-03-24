var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // send all userdata
    res.send('Generic link');
});

// GET specified user data
router.get('/:username', function (req, res, next) {
    var username = req.params.username;
    // verify user existence
    // if(user exists) res.send(userdata)
    // else res.send({}) w/ status code 400
    res.send(username + ': userdata');
});

router.get('/:username/templates', function(req, res, next) {
    var username = req.params.username;
    // verify user existence
    // if(user exists) res.send(userdata.templates)
    // else res.send({}) w/ status code 400
    res.send(username + ': userdata.templates');
});

router.get('/:username/templates/:template', function(req, res, next) {
    var username = req.params.username;
    var template = req.params.template;
    // verify user existence
    // if (user exists) {
    //    verify template existence
    //    if (template exists) SEND ZIP FILE
    //    else res.send({}) w/ status code 400
    // } else res.send({}) w/ status code 400
    res.send(username + ': userdata.templates.' + template);
}); 

module.exports = router;
