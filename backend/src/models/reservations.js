const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Users = require('./users');
const Flights = require('./flights')

const Reservations = sequelize.define('Reservations', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    idUsers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users, // Llave foránea hacia el modelo Users
            key: 'id',
        },
    },
    idFlights: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Flights, // Llave foránea hacia el modelo Flights
            key: 'id',
        },
    },

}, {
    timestamps: false
});

Flights.hasMany(Reservations, { foreignKey: 'idFlights' });
Reservations.belongsTo(Flights, { foreignKey: 'idFlights' });

Users.hasMany(Reservations, { foreignKey: 'idUsers' });
Reservations.belongsTo(Users, { foreignKey: 'idUsers' });

module.exports = Reservations;