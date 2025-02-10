import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";
import UnitType from "../../enums/unitType";

interface MealFoodsAttributes {
  id: string;
  mealId: string;
  foodId: number;
  quantity: number;
  unit: UnitType;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MealFoodsCreationAttributes
  extends Optional<MealFoodsAttributes, "id"> {}

class MealFoods
  extends Model<MealFoodsAttributes, MealFoodsCreationAttributes>
  implements MealFoodsAttributes
{
  public id!: string;
  public mealId!: string;
  public foodId!: number;
  public quantity!: number;
  public unit!: UnitType;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MealFoods.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    mealId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Meal ID is required",
        },
      },
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Food ID is required",
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
    schema: "food",
    tableName: "meal_foods",
    modelName: "mealFoods",
  }
);

export default MealFoods;
