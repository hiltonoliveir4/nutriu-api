import Food from "../models/food/food";
import Category from "../models/food/category";
import Nutrient from "../models/food/nutrient";
import User from "../models/user";
import Goal from "../models/goal";
import Meal from "../models/meal";
import MealFoods from "../models/food/mealFoods";

export default function defineAssociations() {
  Food.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category",
  });

  Food.hasOne(Nutrient, {
    foreignKey: "foodId",
    as: "nutrients",
  });

  Food.belongsToMany(Meal, {
    through: MealFoods,
    foreignKey: "foodId",
    otherKey: "mealId",
    as: "meals",
  });

  Category.hasOne(Food, {
    foreignKey: "categoryId",
    as: "foods",
  });

  Nutrient.belongsTo(Food, {
    foreignKey: "foodId",
    as: "food",
  });

  User.hasMany(Goal, {
    foreignKey: "userId",
    as: "goals",
  });

  Goal.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  Meal.belongsToMany(Food, {
    through: MealFoods,
    foreignKey: "mealId",
    otherKey: "foodId",
    as: "foods",
  });
}
