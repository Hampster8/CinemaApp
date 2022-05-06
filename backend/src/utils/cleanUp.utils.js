const movie = require('../models/movie.models');
const user = require('../models/user.models');
const screening = require('../models/screening.models');
const auditorium = require('../models/auditorium.models');
const bookingModels = require('../models/booking.models');
const config = require('../configs/env.configs');

const cleanUp = async () => {

    // Delete old screenings and bookings
    const currentDate = new Date();
    await screening.deleteMany({start_time: { $lte: currentDate }});
    await bookingModels.deleteMany({createdAt: { $lte: currentDate }});

    if (config.dummyData) await dummyData();
}


const dummyData = async () => {

    // await screening.deleteMany();
    // return;

    const movies = await movie.find({playingNow: true});
    const auditoriums = await auditorium.find();
    const currentDate = new Date();

    // for every auditorium
    for (let audi = 0; audi < auditoriums.length; audi++) {

        // For every day
        for (let day = 0; day < 1; day++) {

            var date = new Date(currentDate);
            date.setDate(date.getDate() + day );
            date.setUTCHours(0,0,0,0);

             // every third hour, between 8 -> 23 = 5h
            for (let hour = 8; hour < 26; hour = hour + 3) {

                const moveToShow = movies[Math.floor(Math.random()*movies.length)];

                date.setUTCHours(hour,0,0,0);

                const found = await screening.findOne({auditorium: auditoriums[audi]._id, start_time: date});

                if (found) continue;

                await new screening({
                    movie: moveToShow._id,
                    auditorium: auditoriums[audi]._id,
                    start_time: date
                }).save();

            }
        }
    }
}

module.exports = cleanUp;