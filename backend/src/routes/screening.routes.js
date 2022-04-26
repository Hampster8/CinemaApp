const express = require('express');
const controller = require('../controllers/screening.controllers');

const router = express.Router();

//Post
router.post('/createAScreening', controller.createAScreening);
//Get
router.get('/getAScreeningById', controller.getAScreeningById);
router.get('/getAllScreeningsByDate', controller.getAllScreeningsByDate);
router.get('/getAllScreeningsByWeek', controller.getAllScreeningsByWeek);
//router.get('/getAllBookingsForScreening', controller.getAllBookingsForScreening); 
//Update
router.patch('/xxx', controller.updateScreeningById);
//Delete
router.delete('/xxx', controller.deleteAScreeningById);

module.exports = router;