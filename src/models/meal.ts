import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface MealAttributes {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  date: Date;
  repeat: "none" | "daily" | "weekly";
  dayOfWeek?:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  illustration: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MealCreationAttributes extends Optional<MealAttributes, "id"> {}

class Meal
  extends Model<MealAttributes, MealCreationAttributes>
  implements MealAttributes
{
  public id!: string;
  public user_id!: string;
  public title!: string;
  public description?: string;
  public date!: Date;
  public repeat!: "none" | "daily" | "weekly";
  public dayOfWeek?:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  public illustration!: string;
  public color!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Meal.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is required",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Date is required",
        },
        isDate: {
          args: true,
          msg: "Must be a valid date",
        },
      },
    },
    repeat: {
      type: DataTypes.ENUM("none", "daily", "weekly"),
      allowNull: false,
      defaultValue: "none",
    },
    dayOfWeek: {
      type: DataTypes.ENUM(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ),
      allowNull: true,
    },
    illustration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Illustration is required",
        },
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Color is required",
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
    tableName: "meals",
  }
);

export default Meal;
