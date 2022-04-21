const Crypto = require('crypto');
const Config = require('../configs/env.configs');

const hashPassword = (password) => {
    return Crypto
        .createHash('sha256', Config.secrets.hash)
        .update(password).digest('hex');
}

module.exports = hashPassword;