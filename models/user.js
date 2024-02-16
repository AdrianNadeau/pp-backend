// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development); // Use the 'development' configuration

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;
