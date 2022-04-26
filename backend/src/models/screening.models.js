const mongoose = require('mongoose');

const screeningSchema = mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    auditorium: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auditorium",
        required: true
    },
    start_time: Date
    });



module.exports = mongoose.model('Screening', screeningSchema);