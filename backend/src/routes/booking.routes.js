
const express = require('express');
const controller = require('../controllers/booking.controllers');


const router = express.Router();

// Defining the routes
router.post('/', controller.createBooking);
router.delete('/:id', controller.deleteBooking);
router.get('/', controller.getAllBookings)
router.get('/:id', controller.getBookingById);
router.get('/email/:email', controller.getBookingByEmail);


module.exports = router;