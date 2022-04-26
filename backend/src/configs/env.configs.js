const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongodb: {
        database_url: process.env.MONGODB_DATABASE_URL,
        database: process.env.MONGODB_DATABASE_NAME
    },
    secrets: {
        hash: process.env.HASH_SECRET,
        jwt: process.env.JWT_SECRET,
        admin: process.env.ADMIN_SECRET
    }
};
