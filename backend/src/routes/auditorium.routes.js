const express = require('express');
const controller = require('../controllers/auditorium.controllers');
const auth = require('../middlewares/userAuthentication.middlewares');
const router = express.Router();


router.get('/', controller.getAllAuditoriums)
router.get('/:id', controller.getAuditoriumById);
router.delete('/:id',  controller.deleteAuditorium);
router.patch('/:id', controller.updateAuditorium);
router.post('/', controller.createAuditorium);


module.exports = router;