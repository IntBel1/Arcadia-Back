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
  timestamps: false,
  freezeTableName: true  
});

module.exports = Role;
