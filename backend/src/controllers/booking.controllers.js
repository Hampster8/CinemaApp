
const Bookings = require('../models/booking.models');

const createBooking = async (req, res) => {
    const token = req.cookies.token;
    const jwt = JWT.decode(token, {complete: true});
    if (jwt === null) return res.status(422).json({error: 'The ID may not be valid!'});
    const userId = jwt.payload._id;
    const bookings = new Bookings({
        userID: userId,
        screeningID: req.body.screeningID,
        seats: req.body.seats
    });

    bookings.save(e => {
        if (e) return res.status(422).json({error: "Each booking needs a userID, screeningID  and seats."});
        return res.sendStatus(200);
    });
    
}

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
    try {
        await Bookings.deleteOne({_id: req.params.id })
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
    getBookingById
};