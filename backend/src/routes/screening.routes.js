const express = require('express');
const controller = require('../controllers/screening.controllers');
const auth = require('../middlewares/userAuthentication.middlewares');
const router = express.Router();

router.get('/', controller.getAllScreenings);
router.post('/', auth.isAdmin, controller.createAScreening);
router.get('/date/:date/:movieId', controller.getAllScreeningsByDateAndMovieId);
router.get('/id/:id', controller.getAScreeningById);
router.patch('/:id', auth.isAdmin, controller.updateScreeningById);
router.delete('/:id', auth.isAdmin, controller.deleteAScreeningById);

module.exports = router;