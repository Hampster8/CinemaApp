const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);