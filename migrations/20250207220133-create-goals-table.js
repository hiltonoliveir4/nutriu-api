'use strict';

const { DataTypes } = require('sequelize');

const NutrientType = {
  MOISTURE: "moisture",
  KCAL: "kcal",
  KJ: "kJ",
  PROTEIN: "protein",
  LIPIDS: "lipids",
  CHOLESTEROL: "cholesterol",
  CARBOHYDRATES: "carbohydrates",
  DIETARY_FIBER: "dietaryFiber",
  ASH: "ash",
  CALCIUM: "calcium",
  MAGNESIUM: "magnesium",
  MANGANESE: "manganese",
  PHOSPHORUS: "phosphorus",
  IRON: "iron",
  SODIUM: "sodium",
  POTASSIUM: "potassium",
  COPPER: "copper",
  ZINC: "zinc",
  RETINOL: "retinol",
  RE: "re",
  RAE: "rae",
  THIAMIN: "thiamin",
  RIBOFLAVIN: "riboflavin",
  PYRIDOXINE: "pyridoxine",
  NIACIN: "niacin",
  VITAMIN_C: "vitaminC"
}
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
    await queryInterface.createTable('goals', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nutrient: {
        type: DataTypes.ENUM(...Object.values(NutrientType)),
        allowNull: false,
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
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('goals');
  }
};