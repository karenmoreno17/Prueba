const Flights = require('../models/flights');
const Reservations = require('../models/reservations');
const Airline = require('../models/airline');
const { Sequelize, Op } = require('sequelize');
const sequelize = require('../config/database');

exports.getStatistics = async (req, res) => {
    try {
        const airlines = await Airline.findAll({
            attributes: [
                'id',
                'name',
                [sequelize.fn('COUNT', sequelize.col('Flights.Reservations.id')), 'reservations']
            ],
            include: [{
                model: Flights,
                attributes: [],
                include: [{
                    model: Reservations,
                    attributes: [],
                }],
            }],
            group: ['Airline.id', 'Airline.name'],
        });

        const totalAirlines = await Airline.count();

        res.json({
            totalAirlines,
            topAirlines: airlines.map(airline => ({
                name: airline.name,
                reservations: airline.get('reservations'),
            })),
        });
    } catch (error) {
        console.error('Error al obtener estadísticas:', error);
        res.status(500).send('Error al obtener estadísticas');
    }
};
