var db = require('../../dbcontroller.js').db;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Users = require('../../models/users.js').Users;
var Token = require('../../controllers/users/token.js');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, done) {
        var Users = db.model('Users');
        Users.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user.checkPassword(password)) {
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.model('Users').findById(id, function (err, user) {
        done(err, user);
    });
});

function loginUser(req, res, next) {
    passport.authenticate('local',
        function (err, user, info) {
            if (err) return next(err);
            if (user) {
                req.logIn(user, function (err) {
                    if (err) return next(err);
                    var token = Token.generateToken(req,user);
                    res.status(200).send({token: token, type: user.type});
                })
            } else {
                res.status(400).send(info);
            }
        }
    )(req, res, next);
}

function logoutUser(req, res) {
    req.logout();
    res.send('');
}

function registerUser(req, res, next) {
    var Users = db.model('Users');
    var username = req.body.username;
    Users.findOne({
        username: username
    }, function (err, user) {
        if (err) throw new Error(err);
        if (user)
            res.status(409).send('User exist');
        else {
            var userData = {
                username: username,
                password: req.body.password
            };
            var newUser = new Users(userData);

            newUser.save(function (err, user) {
                if (err) throw new Error(err);
                var token = Token.generateToken(req,user);
                res.status(201).send(token);
            });
        }
    });
}

exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
exports.registerUser = registerUser;
