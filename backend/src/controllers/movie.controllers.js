const Movie = require('../models/movie.models');
const Config = require('../configs/env.configs');
const axios = require('axios').default;

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
    Movie.find({imdbID: req.params.imdbID}, (e, movies) => {
        if (e) return res.status(422).json({error: 'Not valid id'});
        console.log(movies);
        omdbapi(movies).then((data) => {
            res.status(200).json(data);
        });
    })
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
        movies.push(movie.data);
    }
    return movies;
}

module.exports = {
    getOneMovie,
    getAllMovies,
    createMovie,
    deleteMovie
};
