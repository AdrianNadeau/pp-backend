const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.json');


const sequelize= new Sequelize(config.development);

const Priority = sequelize.define('Priority', {
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'priority'
});

module.exports = Priority;