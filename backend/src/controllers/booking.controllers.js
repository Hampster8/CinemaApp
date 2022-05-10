const JWT = require('jsonwebtoken');
const Bookings = require('../models/booking.models');

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
        res.send(bookings)
    } catch {
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