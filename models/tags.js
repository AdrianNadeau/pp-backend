// models/tags.js

const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const Tags = sequelize.define('Tags', {
    tag_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    tableName: 'Tags' 
});

Tags.belongsTo(Company, { foreignKey: "companyId" });

module.exports = Tags;
