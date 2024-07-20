const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Adjust the path to your database configuration

const Role = sequelize.define('Role', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'role', // Optional: set a custom table name
});

module.exports = Role;
