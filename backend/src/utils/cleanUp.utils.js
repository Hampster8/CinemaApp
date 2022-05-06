const movie = require('../models/movie.models');
const user = require('../models/user.models');
const screening = require('../models/screening.models');
const auditorium = require('../models/auditorium.models');
const bookingModels = require('../models/booking.models');
const config = require('../configs/env.configs');

const cleanUp = async () => {

    // Delete old screenings and bookings
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    await screening.deleteMany({start_time: { $lte: yesterday }});
    await bookingModels.deleteMany({createdAt: { $lte: yesterday }});

    if (config.dummyData) await dummyData();
    console.log("Removed old screenings and bookings ", config.dummyData ? "also added dummy data" : "")
}


const dummyData = async () => {

    // await screening.deleteMany();
    // return;

    const movies = await movie.find({playingNow: true});
    const auditoriums = await auditorium.find();
    const currentDate = new Date();
    // For every day, (current day) -> (currentDay + 20 days)
    for (let day = 1; day < 21; day++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + day );
        date.setUTCHours(8,0,0,0);

         // every third hour, between 8 -> 23 = 5h
        for (let hour = 0; hour < 5; hour++) {
            date.setUTCHours((8 + (hour * 1)),0,0,0);

            for (const audi of auditoriums) {
                const moveToShow = movies[Math.floor(Math.random()*movies.length)];
                const found = await screening.findOne({start_time: date});
                if (found != null) continue;
                new screening({
                    movie: moveToShow._id,
                    auditorium: audi._id,
                    start_time: date
                }).save();
            }
        }
    }
}

module.exports = cleanUp;