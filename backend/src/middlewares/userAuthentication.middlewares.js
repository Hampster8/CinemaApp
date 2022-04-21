const JWT = require('jsonwebtoken');
const Config = require('../configs/env.configs');

module.exports.isAuthorized  = function(req, res, next) {
    const token = req.cookies.token;
    if(token === null || typeof token === 'undefined') return res.sendStatus(401);
    JWT.verify(token, Config.secrets.jwt, (err) => {
        if (err) return res.sendStatus(401);
    });
    return next();
}