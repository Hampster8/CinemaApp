const express = require('express');
const controller = require('../controllers/movie.controllers');
const auth = require('../middlewares/userAuthentication.middlewares');
const router = express.Router();

router.get('/', controller.getAllMovies);
router.get('/:imdbID', controller.getOneMovie);
router.post('/', auth.isAdmin, controller.createMovie);
router.delete('/:imdbID', auth.isAdmin, controller.deleteMovie);

module.exports = router;
