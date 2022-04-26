const express = require('express');
const controller = require('../controllers/screening.controllers');

const router = express.Router();

router.get('/', controller.getAllScreenings);
router.post('/', controller.createAScreening);
router.get('/:id', controller.getAScreeningById);
router.get('/date/:date', controller.getAllScreeningsByDate);
router.patch('/:id', controller.updateScreeningById);
router.delete('/:id', controller.deleteAScreeningById);

module.exports = router;