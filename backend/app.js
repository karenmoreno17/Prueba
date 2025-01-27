const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./src/routes/userRoutes');
const flightRoutes = require('./src/routes/flightRoutes');
const airlineRoutes = require('./src/routes/airlineRoutes');
const statisticsRoutes = require('./src/routes/statisticsRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/api/auth', usersRoutes);
app.use('/api', flightRoutes);
app.use('/api', airlineRoutes);
app.use('/api', statisticsRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
