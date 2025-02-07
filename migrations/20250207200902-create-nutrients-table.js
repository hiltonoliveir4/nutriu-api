'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.sequelize.query('CREATE SCHEMA IF NOT EXISTS food;');
    await queryInterface.createTable('nutrients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      foodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'foods',
            schema: 'food'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      moisture: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      kcal: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      kJ: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      protein: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      lipids: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      cholesterol: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      carbohydrates: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      dietaryFiber: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      ash: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      calcium: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      magnesium: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      manganese: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      phosphorus: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      iron: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      sodium: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      potassium: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      copper: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      zinc: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      retinol: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      re: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      rae: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      thiamin: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      riboflavin: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      pyridoxine: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      niacin: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      vitaminC: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      schema: 'food'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable({
      schema: 'food',
      tableName: 'nutrients'
    });
  }
};
