const express = require('express');
const router = express.Router();
const { login } = require('../controllers/userControllers');

router.post('/login', login);

module.exports = router;