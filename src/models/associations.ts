import Food from "./food/food";
import Category from "./food/category";
import Nutrient from "./food/nutrient";
import User from "./user";
import Goal from "./goal";
import Meal from "./meal";

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
    through: "meal_foods",
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
    through: "meal_foods",
    foreignKey: "mealId",
    otherKey: "foodId",
    as: "foods",
  });
}
