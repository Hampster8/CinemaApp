const express = require('express');
const controller = require('../controllers/user.controllers');
const auth = require('../middlewares/userAuthentication.middlewares');

const router = express.Router();

// Deine the routes
router.post('/login', controller.loginUser);
router.post('/signup', controller.signupUser);

router.get('/logout', auth.isAuthorized, controller.logoutUser);
router.get('/verify', auth.isAuthorized, controller.verifyUser);
router.delete('/delete', auth.isAuthorized, controller.deleteUser);

module.exports = router;