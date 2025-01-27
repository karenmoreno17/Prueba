const sequelize = require('./src/config/database');
const Flight = require('./src/models/flights');
const Airline = require('./src/models/airline');
const Reservation = require('./src/models/reservations');
const Users = require('./src/models/users');

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('¡Base de datos sincronizada correctamente!');
    } catch (error) {
        console.error('Error al sincronizar la base de datos', error);
    }
}

syncDatabase();
