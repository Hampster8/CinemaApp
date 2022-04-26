const express = require('express');
const controller = require('../controllers/auditorium.controllers');

const router = express.Router();


router.get('/auditorium', controller.getAllAuditoriums)
router.get('/auditorium/:id', controller.getAuditoriumById);
router.delete('/auditorium/:id',  controller.deleteAuditorium);
router.patch('/auditorium/:id', controller.updateAuditorium);
router.post('/auditorium', controller.createAuditorium);


module.exports = router;