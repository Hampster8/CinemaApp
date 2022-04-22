const express = require('express');
const controller = require('../controllers/auditorium.controllers');
//const auth = require('../middlewares/userAuthentication.middlewares');

const router = express.Router();

router.get('/:id', controller.getAuditoriumById);
router.get('/audi', controller.getAllAuditoriums)
router.delete('/delete',  controller.deleteAuditorium);
router.patch('/update', controller.updateAuditorium)

module.exports = router;