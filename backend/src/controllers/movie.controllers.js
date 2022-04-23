
const movieController = require('../models/movie.models');

const getAllMovies = async (req, res) => {

    try {
        const getMovies = await movieController.find();
        res.json(getMovies);

    } catch (err) {
        return res.status(401).json({error: 'Something went wrong, try again!'});

    }
}

const createMovie = async (req, res) => {

    const post = new movieController ({

        id: req.params.id,
        title: req.body.title,
        category: req.body.category,
        playTime: req.body.playTime
    })

    try {
        const saveMovie = await post.save();
        res.json(saveMovie);
    } catch (err) {
        res.status(400);
    }

}


module.exports = {
    getAllMovies,
    createMovie
};
