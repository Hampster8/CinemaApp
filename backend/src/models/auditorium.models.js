const mongoose = require('mongoose');

const auditoriumSchema = mongoose.Schema({
    auditoriumName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Auditorium', auditoriumSchema)
