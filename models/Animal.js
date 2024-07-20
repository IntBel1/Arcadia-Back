const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Habitat = require('./Habitat');

const Animal = sequelize.define('Animal', {
    animal_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lifeStyle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habitat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habitatId: {
      type: DataTypes.INTEGER,
      references: {
          model: Habitat,
          key: 'habitat_id',
      },
      allowNull: true, // Set to false if this field is required
  }
}, {
    tableName: 'Animal',
    timestamps: false,
});

module.exports = Animal;
