const express = require('express');
const Airlines = require('../models/airline');
const router = express.Router();

// Ruta para obtener todas las aerolíneas
router.get('/airlines', async (req, res) => {
    try {
        const airlines = await Airlines.findAll();
        res.status(200).json(airlines);
    } catch (error) {
        console.error('Error al obtener las aerolíneas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
