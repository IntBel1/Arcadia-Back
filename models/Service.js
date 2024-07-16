// models/service.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to your database configuration

const Service = sequelize.define('Service', {
  appear: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  intro: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lifeStyle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  preserve: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  service_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  warn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Service;
