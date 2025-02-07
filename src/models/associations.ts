import Food from "./food/food";
import Category from "./food/category";
import Nutrient from "./food/nutrient";

export default function defineAssociations() {
  Food.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category",
  });

  Food.hasMany(Nutrient, {
    foreignKey: "foodId",
    as: "nutrients",
  });

  Category.hasMany(Food, {
    foreignKey: "categoryId",
    as: "foods",
  });

  Nutrient.belongsTo(Food, {
    foreignKey: "foodId",
    as: "food",
});
}
