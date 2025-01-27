const { Op } = require('sequelize');
const Flights = require('../models/flights');
const Airline = require('../models/airline');
const Reservations = require('../models/reservations');
const Users = require('../models/users');
const moment = require('moment');


exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flights.findAll({
            include: {
                model: Airline,
                attributes: ['name'],
            }
        });
        res.json(flights);
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send('Error al obtener los vuelos');
    }
};

exports.createFlight = async (req, res) => {
    try {
        const { origin, destination, departureDate, arrivalDate, price, departureHour, arrivalHour, idAirline } = req.body;

        const flight = await Flights.create({
            origin,
            destination,
            departureDate,
            arrivalDate,
            price,
            departureHour,
            arrivalHour,
            idAirline
        });

        res.status(201).json(flight);
    } catch (error) {
        console.error("Error al crear vuelo:", error);
        res.status(500).json({ message: 'Error al crear el vuelo', error });
    }
};

exports.searchFlights = async (req, res) => {
    const { origin, destination, departureDate, arrivalDate } = req.query;

    console.log('Parámetros de búsqueda:', req.query);

    const whereConditions = {};

    if (origin) {
        whereConditions.origin = origin;
    }
    if (destination) {
        whereConditions.destination = destination;
    }
    if (departureDate) {
        const parsedDepartureDate = moment(departureDate).startOf('day').toDate();
        whereConditions.departureDate = { [Op.gte]: parsedDepartureDate };
    }
    if (arrivalDate) {
        const parsedArrivalDate = moment(arrivalDate).endOf('day').toDate();
        whereConditions.arrivalDate = { [Op.lte]: parsedArrivalDate };
    }

    console.log('Condiciones de búsqueda (whereConditions):', whereConditions);

    try {
        const flights = await Flights.findAll({
            where: whereConditions,
            include: {
                model: Airline,
                attributes: ['name'],
            },
        });

        console.log('Vuelos encontrados:', flights);

        res.json(flights);
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send('Error al obtener los vuelos');
    }
};


exports.reserveFlight = async (req, res) => {
    const { flightId, userId } = req.body;

    try {
        const flight = await Flights.findByPk(flightId);
        const user = await Users.findByPk(userId);

        if (!flight || !user) {
            return res.status(400).json({ message: 'Vuelo o usuario no encontrado' });
        }

        const reservation = await Reservations.create({
            idUsers: userId,
            idFlights: flightId
        });

        res.status(200).json({ message: 'Reserva realizada con éxito', reservation });
    } catch (error) {
        console.error('Error al realizar la reserva:', error);
        res.status(500).send('Error al realizar la reserva');
    }
};
