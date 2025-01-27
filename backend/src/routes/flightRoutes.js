const express = require('express');
const FlightsController = require('../controllers/flightControllers');
const router = express.Router();

// Ruta para obtener todos los vuelos

router.get('/flights', FlightsController.getAllFlights);

// Ruta para crear un vuelo
router.post('/flights', FlightsController.createFlight);

// Ruta para buscar vuelos con filtros
router.get('/flights/search', FlightsController.searchFlights);

// Ruta para reservar un vuelo
router.post('/reserve', FlightsController.reserveFlight);

module.exports = router;
