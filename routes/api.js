var express = require('express');
var router = express.Router();
var path = require('path');

var db = require('../dbcontroller.js').db;
var Token = require('../controllers/users/token');
var localPassportUser = require('../controllers/users/localPassportUser');

router.get('/auth/:token', function (req, res, next) {
    var token = req.params.token;
    Token.isAuth(req, token) ?
        res.status(200).send(true)
        : null;
});

router.post('/login', function(req, res, next) {
    localPassportUser.loginUser(req, res, next);
});

router.post('/registration', function(req, res, next) {
    localPassportUser.registerUser(req, res, next);
});

router.post('/logout', function(req,res,next){
    localPassportUser.logoutUser(req, res, next);
});

module.exports = router;