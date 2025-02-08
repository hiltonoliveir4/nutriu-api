'use strict';

const { DataTypes } = require('sequelize');

const UnitType = {
  GRAMS: "g",
  KILOGRAMS: "kg",
  MILLIGRAMS: "mg",
  MICROGRAMS: "µg",
  LITERS: "L",
  MILLILITERS: "mL",
  JOULES: "kJ",
  KILOCALORIES: "kcal",
  CALORIES: "cal",
  MILLIMOL_PER_LITER: "mmol/L",
  PERCENTAGE: "%",
  IU: "IU",
}

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
    await queryInterface.createTable('meal_foods', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      mealId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            schema: 'public',
            tableName: 'meals'
          },
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            schema: 'food',
            tableName: 'foods'
          },
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unit: {
        type: DataTypes.ENUM(...Object.values(UnitType)),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
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
    });
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
      tableName: 'meal_foods'
    });
  }
};
