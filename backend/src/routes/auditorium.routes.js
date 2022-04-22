const express = require('express');
const controller = require('../controllers/auditorium.controllers');
const auth = require('../middlewares/userAuthentication.middlewares');

const router = express.Router();

router.get('/:id', auth.isAuthorized, controller.getAuditoriumById);
router.get('/', auth.isAuthorized, controller.getAllAuditoriums)
router.delete('/delete', auth.isAuthorized, controller.deleteAuditorium);
router.pacth('/update', auth.isAuthorized, controller.updateAuditorium)

module.exports = router;