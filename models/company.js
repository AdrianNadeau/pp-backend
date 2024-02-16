// models/company.js

const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const Company = sequelize.define('Company', {

    company_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    company_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_details: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    // Specify the singular table name to match the model name
    tableName: 'company' 
});

module.exports = Company;
