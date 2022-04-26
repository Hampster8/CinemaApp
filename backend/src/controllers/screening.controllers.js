const Screening = require('../models/screening.models');

const errorStr =
'A screening requires the id of a movie and the ' +
'id of an auditorium ';

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
    res.send(student);
}


const getAllScreeningsByDate = async (req, res) => {
    const screeningsByDay = await Screening.find(req.params.date).exec();
    if (!screeningsByDay) return res.status(404).send('No Screenings at this Date.')
    res.send(screeningsByDay);
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



module.exports = {
    createAScreening,
    getAScreeningById,
    getAllScreeningsByDate,
    updateScreeningById,
    deleteAScreeningById
};