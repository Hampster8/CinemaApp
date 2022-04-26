
const express = require('express');
const controller = require('../controllers/booking.controllers');


const router = express.Router();

// Defining the routes
router.post('/bookings', controller.createBooking);
router.delete('/bookings/:id', controller.deleteBooking);
router.get('/bookings', controller.getAllBookings)
router.get('/bookings/:id', controller.getBookingById);
router.get('/bookings/email/:email', controller.getBookingByEmail);


module.exports = router;