const Auditorium = require('../models/auditorium.models');

const getAllAuditoriums = async (req, res) => {
    try {
        const auditorium = await Auditorium.find()
        res.send(auditorium)
    } catch {
        res.status(404)
        res.send({ error: "Auditorium does not exist." })
    }
};

const getAuditoriumById = async (req, res) => {
    try {
        const auditorium = await Auditorium.findOne({_id: req.params.id })
        res.send(auditorium)
    } catch {
        res.status(404)
        res.send({ error: "Auditorium does not exist." })
    }
};

const deleteAuditorium = async (req, res) => {
    try {
        await Auditorium.deleteOne({_id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Auditorium does not exist." })
    }
}

const updateAuditorium = async (req, res) => {
    try {

        const auditorium = await Auditorium.findById(req.params.id)

        if (req.body.auditoriumName) {
            auditorium.name = req.body.auditoriumName
        }
        if (req.body.auditoriumSeats) {
            auditorium.seats = req.body.auditoriumSeats
        }
        await auditorium.save()
        res.send(auditorium)

    } catch {
        res.status(404)
        res.send({ error: "Auditorium does not exist." })
        }
};

module.exports = {
    getAuditoriumById,
    getAllAuditoriums,
    deleteAuditorium,
    updateAuditorium
};

