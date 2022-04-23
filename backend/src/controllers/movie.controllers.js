
const movieController = require('../models/movie.models');

const getAllMovies = async (req, res) => {

    try {
        const getMovies = await movieController.findAll();
        return res.json(getMovies);

    } catch (err) {
        return res.status(401).json({error: 'Something went wrong, try again!'});

    }
}


module.exports = {
    getAllMovies
};
