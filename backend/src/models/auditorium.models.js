const mongoose = require('mongoose');

const auditoriumSchema = mongoose.Schema({
    auditoriumName: {
        type: String,
        required: true
    },
    auditoriumSeats: {
        type: Number,
        minlength: 1,
        maxlength: 100,
        required: true
    }
});

module.exports = mongoose.model('Auditorium', auditoriumSchema)