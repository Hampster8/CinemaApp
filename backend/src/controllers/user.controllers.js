const JWT = require('jsonwebtoken');
const Config = require('../configs/env.configs');
const User = require('../models/user.models');
const hashPassword = require('../utils/hash.utils');
const Validator = require('../utils/validator.utils');

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = hashPassword(req.body.password);
    const user = await User.findOne({email: email});

    if (password === user.password){
        const token = JWT.sign(
            {_id: user._id},
            Config.secrets.jwt,
            {expiresIn: '86400s'}
        );

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 86_400_000
        });

        return res.sendStatus(200);
    }
    return res.status(401).json({error: 'Credentials is not valid!'});
};

const signupUser = async (req, res) => {

    const errorStr =
        'A user requires a fullName (3-25 chars), ' +
        'lastName (3-25 chars), email (3-50 chars) ' +
        'and a password. ' +
        'The Password has to have a minimum of eight characters, ' +
        'at least one uppercase letter, one lowercase letter, ' +
        'one number and one special character!';

    const password = req.body.password;
    if (!Validator.validatePassword(password)) {
        return res.status(422).json({error: errorStr});
    }

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword(password)
    });

    user.save(e => {
        if (e) return res.status(422).json({error: errorStr});
        return res.sendStatus(200);
    });
}

const logoutUser = async (_req, res) => {
    res.clearCookie('token');
    return res.sendStatus(200);
};

const verifyUser = async (req, res) => {
    const token = req.cookies.token;
    const jwt = JWT.decode(token, {complete: true});
    if (jwt === null) return res.status(422).json({error: 'The ID may not be valid!'});
    const id = jwt.payload._id;
    User.findById(id, (e, user) => {
        if (e) return res.status(422).json({error: 'The ID may not be valid!'});
        return res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt
        });
    });
};

const deleteUser = async (req, res) => {
    const token = req.cookies.token;
    const id = JWT.decode(token, {complete: true}).payload._id;
    User.deleteOne({_id: id}, e => {
        if (e) return res.status(422).json({error: 'The ID may not be valid!'});
        res.clearCookie('token');
        return res.sendStatus(200);
    });
};

module.exports = {
    loginUser,
    signupUser,
    logoutUser,
    verifyUser,
    deleteUser
};