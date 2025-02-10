import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface NutrientAttributes {
  id: number;
  foodId: number;
  moisture: number;
  kcal: number;
  kJ: number;
  protein: number;
  lipids: number;
  cholesterol: number | null;
  carbohydrates: number;
  dietaryFiber: number;
  ash: number;
  calcium: number;
  magnesium: number;
  manganese: number;
  phosphorus: number;
  iron: number;
  sodium: number;
  potassium: number;
  copper: number;
  zinc: number;
  retinol: number | null;
  re: number | null;
  rae: number | null;
  thiamin: number;
  riboflavin: number;
  pyridoxine: number;
  niacin: number;
  vitaminC: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface NutrientCreationAttributes extends Optional<NutrientAttributes, "id"> {}

class Nutrient
  extends Model<NutrientAttributes, NutrientCreationAttributes>
  implements NutrientAttributes
{
  public id!: number;
  public foodId!: number;
  public moisture!: number;
  public kcal!: number;
  public kJ!: number;
  public protein!: number;
  public lipids!: number;
  public cholesterol!: number | null;
  public carbohydrates!: number;
  public dietaryFiber!: number;
  public ash!: number;
  public calcium!: number;
  public magnesium!: number;
  public manganese!: number;
  public phosphorus!: number;
  public iron!: number;
  public sodium!: number;
  public potassium!: number;
  public copper!: number;
  public zinc!: number;
  public retinol!: number | null;
  public re!: number | null;
  public rae!: number | null;
  public thiamin!: number;
  public riboflavin!: number;
  public pyridoxine!: number;
  public niacin!: number;
  public vitaminC!: number | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Nutrient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    moisture: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kcal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kJ: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    lipids: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cholesterol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    carbohydrates: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dietaryFiber: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ash: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    calcium: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    magnesium: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    manganese: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    phosphorus: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    iron: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sodium: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    potassium: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    copper: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    zinc: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    retinol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    re: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rae: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    thiamin: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    riboflavin: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pyridoxine: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    niacin: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitaminC: {
      type: DataTypes.FLOAT,
      allowNull: true,
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
    tableName: "nutrients",
    modelName: "nutrient",
  }
);

export default Nutrient;