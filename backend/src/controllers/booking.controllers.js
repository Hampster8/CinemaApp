const JWT = require('jsonwebtoken');
const Bookings = require('../models/booking.models');
const Screening = require('../models/screening.models');
const Movie = require('../models/movie.models');
const Config = require('../configs/env.configs');
const axios = require('axios').default;

const createBooking = async (req, res) => {
    const token = req.cookies.token;
    const jwt = JWT.decode(token, {complete: true});
    if (jwt === null) return res.status(422).json({error: 'The ID may not be valid!'});
    const userId = jwt.payload._id;
    const booking = new Bookings({
        userID: userId,
        screeningID: req.body.screeningID,
        seats: req.body.seats
    });

    booking.save(e => {
        if (e) return res.status(422).json({error: "Each booking needs a userID, screeningID  and seats."});
        return res.sendStatus(200);
    });
    
}

const getAllBokingsForUser = async (req, res) => {
    const token = req.cookies.token;
    const jwt = JWT.decode(token, {complete: true});
    if (jwt === null) return res.status(422).json({error: 'The ID may not be valid!'});
    const id = jwt.payload._id;
    try {
        const bookings = await Bookings.find({userID: id});
        var data = [];
        for (var i = 0; i < bookings.length; i++) {

            const screening = await Screening.findById(bookings[i].screeningID);
            const movieId = await Movie.findById(screening.movie);
            const url = `https://www.omdbapi.com/?apikey=${Config.omdbapi}&i=${movieId.imdbID}`;
            const movie = await axios.get(url);

            const obj = {
                ...screening._doc,
                ...movie.data,
                ...bookings[i]._doc
            }

            data.push(obj);
        }


        res.send(data)
    } catch (e) {
        console.log(e);
        res.status(404)
        res.send({ error: "This booking does not exist." })
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Bookings.find()
        res.send(bookings)
    } catch {
        res.status(404)
        res.send({ error: "This booking does not exist." })
    }
};

const getBookingByEmail = async (req, res) => {
    try {
        const bookings = await Bookings.findOne({email: req.params.email })
        res.send(bookings)
    } catch {
        res.status(404)
        res.send({ error: "This booking does not exist." })
    }
};

const getBookingById = async (req, res) => {
    try {
        const bookings = await Bookings.findOne({_id: req.params.id })
        res.send(bookings)
    } catch {
        res.status(404)
        res.send({ error: "This booking does not exist." })
    }
};

const deleteBooking = async (req, res) => {
    const token = req.cookies.token;
    const jwt = JWT.decode(token, {complete: true});
    if (jwt === null) return res.status(422).json({error: 'The ID may not be valid!'});
    const id = jwt.payload._id;
    try {
        await Bookings.deleteOne({_id: req.params.id, userID: id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Booking does not exist." })
    }
};

module.exports = {
    createBooking,
    deleteBooking,
    getAllBookings,
    getBookingByEmail,
    getBookingById,
    getAllBokingsForUser
};