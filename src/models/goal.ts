import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import UnitType from "../enums/unitType";
import NutrientType from "../enums/nutrientType";

interface GoalAttributes {
  id: string;
  userId: string;
  unit: UnitType;
  nutrient: NutrientType;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface GoalCreationAttributes extends Optional<GoalAttributes, "id"> {}

class Goal
  extends Model<GoalAttributes, GoalCreationAttributes>
  implements GoalAttributes
{
  public id!: string;
  public userId!: string;
  public nutrient!: NutrientType;
  public unit!: UnitType;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Goal.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "User ID is required",
        },
      },
    },
    nutrient: {
      type: DataTypes.ENUM(...Object.values(NutrientType)),
      allowNull: false,
      unique: false,
      validate: {
        isIn: {
          args: [Object.values(NutrientType)],
          msg: "Invalid nutrient",
        },
      },
    },
    unit: {
      type: DataTypes.ENUM(...Object.values(UnitType)),
      allowNull: false,
      unique: false,
      validate: {
        isIn: {
          args: [Object.values(UnitType)],
          msg: "Invalid unit",
        },
      },
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Quantity is required",
          },
          min: {
            args: [0],
            msg: "Quantity must be greater than or equal to 0",
          },
        },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "goals",
  }
);

export default Goal;
