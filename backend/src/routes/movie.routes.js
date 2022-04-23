const express = require('express');
const controller = require('../controllers/movie.controllers');

const router = express.Router();

// Define the routes for movies
router.post('/', controller.createMovie);


router.get('/', controller.getAllMovies);


module.exports = router;
