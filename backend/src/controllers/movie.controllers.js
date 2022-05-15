const Movie = require('../models/movie.models');
const Config = require('../configs/env.configs');
const axios = require('axios').default;
const cleanUp = require('../utils/cleanUp.utils');

const getAllMovies = async (_req, res) => {
    const movies = await Movie.find();
    omdbapi(movies).then((data) => {
        res.status(200).json(data);
    });
}

const createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    movie.save(e => {
        if (e) return res.status(422).json({error: 'requries imdbID and playingNow'});
        return res.sendStatus(200);
    });
}

const getOneMovie = async (req, res) => {
    Movie.findOne({imdbID: req.params.imdbID}, (e, foundMovie) => {
        if (e) return res.status(422).json({error: 'Not valid id'});
        omdbapi([foundMovie]).then((data) => {
            res.status(200).json({...data[0], ...foundMovie._doc});
        });
    })

    cleanUp();
}

const deleteMovie = async (req, res) => {
    Movie.findOneAndDelete({imdbID: req.params.imdbID}, e => {
        if (e) return res.status(422).json({error: 'Not valid id'});
        res.sendStatus(200);
    })
}

const omdbapi = async (movieRecords) => {
    var movies = [];
    for (const movieRecord of movieRecords) {
        const url = `https://www.omdbapi.com/?apikey=${Config.omdbapi}&i=${movieRecord.imdbID}`;
        const movie = await axios.get(url);
        const obj = {
            ...movieRecord._doc,
            ...movie.data
        }

        movies.push(obj);
    }
    return movies;
}

module.exports = {
    getOneMovie,
    getAllMovies,
    createMovie,
    deleteMovie
};
