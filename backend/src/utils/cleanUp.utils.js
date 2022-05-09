const movie = require('../models/movie.models');
const user = require('../models/user.models');
const screening = require('../models/screening.models');
const auditorium = require('../models/auditorium.models');
const booking = require('../models/booking.models');
const config = require('../configs/env.configs');

const cleanUp = async () => {

    // Delete old screenings and bookings
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + -2 );
    await screening.deleteMany({start_time: { $lte: currentDate }});
    await booking.deleteMany({createdAt: { $lte: currentDate }});

    if (config.dummyData) await dummyData();
}


const dummyData = async () => {


    const CLEAR_ALL_DUMMY_DATA = false;    // Enable to clear all dummy data
    const AMOUNT_OF_DAYS_TO_POPULATE = 30;


    const dummyUser = await user.findOne({email: 'dummy@dummy.com'});
    if (CLEAR_ALL_DUMMY_DATA) {
        await screening.deleteMany();
        await booking.deleteMany({userID: dummyUser._id});
        return;
    }

    const movies = await movie.find({playingNow: true});
    const auditoriums = await auditorium.find();
    const currentDate = new Date();


    // for every auditorium
    for (let audi = 0; audi < auditoriums.length; audi++) {

        // For every day
        for (let day = 0; day < AMOUNT_OF_DAYS_TO_POPULATE; day++) {

            var date = new Date(currentDate);
            date.setDate(date.getDate() + day );
            date.setUTCHours(0,0,0,0);

             // every third hour, between 8 -> 23 = 5h
            for (let hour = 8; hour < 26; hour = hour + 3) {

                // pick a random movie to show
                const moveToShow = movies[Math.floor(Math.random()*movies.length)];

                // Check if this time and auditorium is not occupied
                date.setUTCHours(hour,0,0,0);
                const found = await screening.findOne({auditorium: auditoriums[audi]._id, start_time: date});
                if (found) continue;

                // Create screening
                const createdScreening = await new screening({
                    movie: moveToShow._id,
                    auditorium: auditoriums[audi]._id,
                    start_time: date
                }).save();

                // Define random amount of already booked seats
                const amountOfSeatsToBook = Math.floor(Math.random() * 310);
                var seats = [];
                for (let i = 8; i < amountOfSeatsToBook; i++) {
                    const seat = Math.floor(Math.random() * 310) + 1;
                    if (seats.includes(seat)) continue
                    seats.push(seat);
                }

                // Create booking
                await new booking({
                    userID: dummyUser._id,
                    screeningID: createdScreening._id,
                    seats: seats
                }).save();

            }
        }
    }
}

module.exports = cleanUp;