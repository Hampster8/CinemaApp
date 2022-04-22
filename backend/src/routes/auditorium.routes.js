const express = require('express');
const controller = require('../controllers/auditorium.controllers');
//const auth = require('../middlewares/userAuthentication.middlewares');

const router = express.Router();


router.get('/audi', controller.getAllAuditoriums)
router.get('/audi/:id', controller.getAuditoriumById);
router.delete('/audi/delete',  controller.deleteAuditorium);
router.patch('/audi/update', controller.updateAuditorium);
router.post('/audi/create', controller.createAuditorium);


module.exports = router;