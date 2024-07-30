const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');

const Game = sequelize.define('Game', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Game;
