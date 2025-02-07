import Food from "./food/food";
import Category from "./food/category";
import Nutrient from "./food/nutrient";
import User from "./user";
import Goal from "./goal";

export default function defineAssociations() {
  Food.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category",
  });

  Food.hasOne(Nutrient, {
    foreignKey: "foodId",
    as: "nutrients",
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
}
