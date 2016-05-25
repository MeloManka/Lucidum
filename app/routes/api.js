var express = require('express');
var router = express.Router();
var path = require('path');

var db = require('../dbcontroller.js').db;
var Token = require('../controllers/users/token');
var localPassportUser = require('../controllers/users/localPassportUser');

var net = require('net');

var netServer = net.createServer();
var socket = null;
netServer.listen(6969, '192.168.1.5', function () {
    console.log('Net server work');
    netServer.on('connection', function (sock) {
        console.log('connection');
        socket = sock;
    });
});

router.get('/auth/:token', function (req, res, next) {
    var token = req.params.token;
    Token.isAuth(req, token).then(function (data) {
            res.status(200).send(true);
        })
        .catch(function (err) {
            res.status(401).send(false);
        });
});

router.post('/login', function (req, res, next) {
    localPassportUser.loginUser(req, res, next);
});

router.post('/registration', function (req, res, next) {
    localPassportUser.registerUser(req, res, next);
});

router.post('/logout', function (req, res, next) {
    localPassportUser.logoutUser(req, res, next);
});

router.get('/users', function (req, res, next) {

});
router.get('/proposals', function (req, res, next) {

});
router.get('/auctions', function (req, res, next) {

});
router.post('/send', function (req, res, next) {
    console.log('req = ',req.body);
    var num = req.body.num;
    console.log('num = ',req.body.num);
    var prog1 = '1 3 ';
    var prog2 = '10 0 1 1 0 0 0 0 0 0 0 ';
    socket.write(prog2);
    res.send('ok');
});

module.exports = router;