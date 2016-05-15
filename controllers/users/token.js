var jwt = require('jsonwebtoken');

function isAuth(req,token) {
    jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
        if(decoded._doc.username && req.user && req.user.username && decoded._doc.username == req.user.username){
            return true;
        } else {
            return false;
        }
    });

}

function generateToken(req,user){
    return jwt.sign(user, req.app.get('superSecret'), {
        expiresIn: "24h"
    });
}

exports.isAuth = isAuth;
exports.generateToken = generateToken;