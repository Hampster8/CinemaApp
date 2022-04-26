const JWT = require('jsonwebtoken');
const Config = require('../configs/env.configs');

module.exports.isAuthorized  = function(req, res, next) {
    const token = req.cookies.token;
    if(token === null || typeof token === 'undefined') return res.sendStatus(401);
    return JWT.verify(token, Config.secrets.jwt, (err) => {
        if (err) return res.sendStatus(401);
        return next();
    });
}

module.exports.isAdmin  = function(req, res, next) {
    const authHeader = String(req.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        if (token == Config.secrets.admin) {
            return next();
        }
    }
    return res.sendStatus(401);
}