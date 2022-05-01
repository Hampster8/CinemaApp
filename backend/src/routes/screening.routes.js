const express = require('express');
const controller = require('../controllers/screening.controllers');

const router = express.Router();

router.get('/', controller.getAllScreenings);
router.post('/', controller.createAScreening);
router.get('/date/:date', controller.getAllScreeningsByDate);
router.get('/id/:id', controller.getAScreeningById);
router.patch('/:id', controller.updateScreeningById);
router.delete('/:id', controller.deleteAScreeningById);

module.exports = router;