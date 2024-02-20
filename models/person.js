// models/person.js

const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);
const Company = require('./company');

const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    initials: {
        type: DataTypes.STRING(4), 
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Persons'
});


// Company.hasMany(Person);
Person.belongsTo(Company, { foreignKey: "companyId", onDelete: 'CASCADE' });

module.exports = Person;
