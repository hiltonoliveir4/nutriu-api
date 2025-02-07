import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";
import Category from "./category";
import Nutrient from "./nutrient";

interface FoodAttributes {
  id: number;
  name: string;
  categoryId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface FoodCreationAttributes extends Optional<FoodAttributes, "id"> {}

class Food
  extends Model<FoodAttributes, FoodCreationAttributes>
  implements FoodAttributes
{
  public id!: number;
  public name!: string;
  public categoryId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required",
        },
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "foods",
    modelName: "Food",
  }
);

export default Food;