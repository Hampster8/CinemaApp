
const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true   
    },
    screeningID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screening',
        required: true
    },
    seats: {
        type: [Number],
        min: 1,
        required: true
    }

});

module.exports = mongoose.model('Booking', bookingSchema);
