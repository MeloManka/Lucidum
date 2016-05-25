var jwt = require('jsonwebtoken');

function isAuth(req,token) {
    return new Promise((resolve,reject) => {
        jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
            if(decoded._doc.username && req.user && req.user.username && decoded._doc.username == req.user.username){
                resolve(true);
            } else {
                reject(false);
            }
        });
    });
}

function generateToken(req,user){
    return jwt.sign(user, req.app.get('superSecret'), {
        expiresIn: "24h"
    });
}

exports.isAuth = isAuth;
exports.generateToken = generateToken;