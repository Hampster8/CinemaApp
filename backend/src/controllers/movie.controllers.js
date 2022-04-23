
const movieController = require('../models/movie.models');

const getAllMovies = async (req, res) => {
    try {
        const getMovies = await movieController.find();
        res.json(getMovies);

    } catch (err) {
        return res.status(401).json({error: 'Something went wrong, try again!'});
    }
};

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
};

// find a specific Movie by _id
const findMoviebyId = async (req, res) => {

    try {
        const post = await movieController.findById(req.params.postId);
        res.json(post);

    } catch (err) {
        res.json("User not found try again! " + "Status code: 404");
    }
};

// delete a specific Movie by _id
const deleteMovie = async (req, res) => {

try {
    const removeMovie = await movieController
        .deleteOne({ _id: req.params.postId });
        res.json(removeMovie);

    } catch (err) {
        res.json("Movie not found try again!");
    }
};

// update a specific movie by _id
const updateMovie = async (req, res) => {

    try {
        const updateMovie = await movieController.updateOne(
            { _id: req.params.postId },
            { $set: { title:req.body.title, category: req.body.category, playTime: req.body.playTime}},
        );
        res.json(updateMovie);
    } catch (err) {
        res.json("User not found try again!");
    }
}

module.exports = {
    getAllMovies,
    createMovie,
    findMoviebyId,
    deleteMovie,
    updateMovie,
};
