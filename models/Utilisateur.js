const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Adjust the path to your database configuration

const Utilisateur = sequelize.define('Utilisateur', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Roles', // Name of the role table
      key: 'role_id', // Key in the role table
    },
    allowNull: true,
  },
}, {
  timestamps: false,
  freezeTableName: true  
});

module.exports = Utilisateur;
