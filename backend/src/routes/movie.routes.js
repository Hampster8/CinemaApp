const express = require('express');
const controller = require('../controllers/movie.controllers');

const router = express.Router();

router.get('/', controller.getAllMovies);
router.post('/', controller.createMovie);
router.delete('/:imdbID', controller.deleteMovie);

module.exports = router;
