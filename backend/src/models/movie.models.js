const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    imdbID: {
        type: String,
        required: true
    },
    playingNow: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Movies', movieSchema);
