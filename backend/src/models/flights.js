const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Airline = require('./airline');

const Flights = sequelize.define('Flights', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    departureDate: { type: DataTypes.DATEONLY, allowNull: false },
    arrivalDate: { type: DataTypes.DATEONLY, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    departureHour: { type: DataTypes.TIME, allowNull: false },
    arrivalHour: { type: DataTypes.TIME, allowNull: false },
    idAirline: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Airlines',
            key: 'id',
        },
    },
}, {
    tableName: 'Flights',
    timestamps: false,
});

Airline.hasMany(Flights, { foreignKey: 'idAirline' });
Flights.belongsTo(Airline, { foreignKey: 'idAirline' });

module.exports = Flights;
