const Reservations = require('../models/reservations');

exports.createReservation = async (req, res) => {
    try {
        const { idUsers, idFlights } = req.body;
        const newReservation = await Reservations.create({ idUsers, idFlights });
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reservación', error });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservations.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer la reservación', error });
    }
};