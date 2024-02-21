//models/project.js

const { Sequelize, DataTypes, DATE } = require("sequelize");
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    headline: {
        type: DataTypes.STRING(140),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    why: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    what: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    attachment: {
        type: DataTypes.STRING, // We will be storing PATH here
        allowNull: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    next_milestone_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phase: {
        type: DataTypes.ENUM('Pitch', 'Priority', 'Discovery', 'Delivery', 'Operations'),
        allowNull: false
    },
    company_id_fk:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'company',
            key: 'id'
        }
    },
    priority_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Priority',
            key: 'id'
        }
    },
    health: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sponsor_id_fk:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Person',
            key: 'id'
        }
    },
    prime_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Person',
            key: 'id'
        }
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    effort: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    benefit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    impact: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    complexity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tags_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tags',
            key: 'id'
        }
    },
    deleted_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    change_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'Project'
});

module.exports = Project;