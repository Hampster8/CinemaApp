const Screening = require('../models/screening.models');
const Booking = require('../models/booking.models');
const Auditorium = require('../models/auditorium.models');


const errorStr =
'A screening requires the id of a movie and the ' +
'id of an auditorium ';

const getAllScreenings = async (_req, res) => {
    const screening = await Screening.find()
    appendAvailableSeatsForScreening(screening).then((data) => {
        res.status(200).json(data);
    });
};

const createAScreening = async (req, res) => {
    const screening = new Screening({
        movie: req.body.movie,
        auditorium: req.body.auditorium,
        start_time: req.body.start_time
    });
    screening.save(e => {
    if (e) return res.status(422).json({error: errorStr});
    return res.status(200).json(screening);
    });
}

const getAScreeningById = async (req, res) => {
    const foundScreening = await Screening.findById(req.params.id).exec();
    if (!foundScreening) return res.status(404).send('No Screening with this ID.');
    appendAvailableSeatsForScreening([foundScreening]).then((data) => {
        res.status(200).json(data);
    });
}


const getAllScreeningsByDateAndMovieId = async (req, res) => {
    const date = req.params.date;
    const movieId = req.params.movieId;
    var start = new Date(date);
    start.setDate(start.getDate() + 1 );
    start.setUTCHours(0,0,0,0);
    var end = new Date(date);
    end.setDate(end.getDate() + 1 );
    end.setUTCHours(23,59,59,999);
    Screening.find({start_time: { '$gte': start, '$lte': end }, movie: movieId }, async (e, screenings) => {
        if (e) return res.status(422).json({error: 'The date may not be valid!'});
        appendAvailableSeatsForScreening(screenings).then((data) => {
            res.status(200).json(data);
        });
    });
}

const updateScreeningById = async (req, res) => {
    const updateScreening = await Screening.findOneAndUpdate(req.params.id,
        {
            movie: req.body.movie,
            auditorium: req.body.auditorium,
            start_time: req.body.start_time
        },
        { new: true });

    updateScreening.save(e => {
        if (e) return res.status(422).json({error: errorStr});
        return res.status(200).json(updateScreening);
    });
}



const deleteAScreeningById = async (req, res) => {
    const deleteThisScreening = await Screening.findByIdAndDelete(req.params.id).exec();

    if (!deleteThisScreening) return res.status(404).send('No Screening with this ID.');
    res.status(200).send(deleteThisScreening);
}

const appendAvailableSeatsForScreening = async (screenings) => {
    var data = [];

    for (const screening of screenings) {
        const bookings = await Booking.find({screeningID: screening._id});
        const auditorium = await Auditorium.findById(screening.auditorium);

        var seats = [];
        bookings.forEach(booking => booking.seats.forEach(seat => seats.push(seat)));

        const seatsObj = {
            takenSeats: seats
        }

        const final = {
            ...auditorium._doc,
            ...screening._doc,
            ...seatsObj,
        }
        data.push(final);
    }

    return data;
}


module.exports = {
    getAllScreenings,
    createAScreening,
    getAScreeningById,
    getAllScreeningsByDateAndMovieId,
    updateScreeningById,
    deleteAScreeningById
};