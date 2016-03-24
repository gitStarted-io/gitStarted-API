var express = require('express');
var async = require('async');
var router = express.Router();

// Middleware to verify user authentication
router.use(function (req, res, next) {
    var auth = req.query.auth;
    if (auth) {
        console.log(auth);
        next();
    } else {
        res.status(400).send('error');
    }
    // verify OAuth
});

// GET all user data
router.get('/', function (req, res, next) {
    // retrieve user data and store in var userData
    // res.send(userData)
    res.send('Current user: userdata');
});

router.get('/templates', function (req, res, next) {
    // retrieve user's templates and send them back
    res.send('Current user: userdata.templates');
});

router.post('/templates', function (req, res, next) {
    // Grab POST request data
    // Ensure config file is valid
    // if(config is valid) create new template and send status code 201
    // else res.send({}) w/ status code 400
    res.send('Adding new template');
});

router.get('/templates/:template', function (req, res, next) {
    var template = req.params.template;
    // verify user existence
    // if (user exists) {
    //    verify template existence
    //    if (template exists) SEND ZIP FILE
    //    else res.send({}) w/ status code 400
    // } else res.send({}) w/ status code 400
    res.send('Current user: userdata.templates.' + template);
});

module.exports = router;