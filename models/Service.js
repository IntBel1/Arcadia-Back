// models/service.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Adjust the path to your database configuration

const Service = sequelize.define('Service', {
  description: {
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
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
}, {
    tableName: 'services',
  timestamps: false,
  freezeTableName: true  
});

module.exports = Service;
