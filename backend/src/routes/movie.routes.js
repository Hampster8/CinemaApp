const express = require('express');
const controller = require('../controllers/movie.controllers');

const router = express.Router();

// Define the routes for movies
router.post('/', controller.createMovie);

router.get('/', controller.getAllMovies);
router.get('/:postId', controller.findMoviebyId);


router.delete('/:postId', controller.deleteMovie);
router.patch('/:postId', controller.updateMovie);

module.exports = router;
