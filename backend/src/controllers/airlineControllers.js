const Airlines = require('../models/airlines');

exports.getAllAirlines = async (req, res) => {
    try {
        const airlines = await Airlines.findAll();
        res.status(200).json(airlines);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer las aerolíneas', error });
    }
};

exports.getAirlineNames = async (req, res) => {
    try {
        const airlines = await Airlines.findAll({ attributes: ['id', 'name'] });
        res.status(200).json(airlines);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer los nombres de las aerolíneas', error });
    }
};