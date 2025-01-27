const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationControllers');

const router = express.Router();

router.get('/', getReservations);
router.post('/', createReservation);

module.exports = router;