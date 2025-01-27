const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Airline = sequelize.define('Airline', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
    tableName: 'Airlines',
    timestamps: false,
});

module.exports = Airline;
