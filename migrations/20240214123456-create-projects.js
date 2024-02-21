

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, company_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'company', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      headline: {
        type: Sequelize.STRING(140),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      why: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      what: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      attachment: {
        type: Sequelize.STRING,
        allowNull: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      next_milestone_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phase: {
        type: Sequelize.ENUM('Pitch', 'Priority', 'Discovery', 'Delivery', 'Operations'),
        allowNull: false
      },
      priority_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Priority',
          key: 'id'
        }
      },
      health: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sponsor_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Persons',
          key: 'id'
        }
      },
      prime_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Persons',
          key: 'id'
        }
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      effort: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      benefit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      impact: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complexity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tags_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id'
        }
      },
      deleted_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      change_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};
