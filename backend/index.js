const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = require('express');
const config = require('./src/configs/env.configs');

// Connect to MongoDB using Moongose
mongoose.connect(config.mongodb.database_url, { 
    dbName:  config.mongodb.database
});

// Setup Express
const router = express();
router.use(express.urlencoded({ extended: false }))
router.use(express.json());
router.use(cookieParser());


// Define API rules
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

// Routes
router.use('/api/auth', require('./src/routes/user.routes'));
router.use('/api', require('./src/routes/booking.routes'));
router.use('/api', require('./src/routes/auditorium.routes'));

// Entry point
router.use(express.static(path.resolve(__dirname, config.react_build_folder)))
router.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, config.react_build_folder) + '/index.html');
});

// Error handling, Request not found
router.use((_req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

// Start the server
const PORT = 3000;
router.listen(PORT, () => {
    console.log(`App is now live: http://localhost:${PORT}`)
});
