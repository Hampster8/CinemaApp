
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        minlength: 1,
        required: true
    },

    category: {
        type: String,
    },

    playTime: {
        type: Number,
    }
});

module.exports = mongoose.model('movies', movieSchema);
