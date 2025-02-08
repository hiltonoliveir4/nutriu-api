import { Request, Response } from "express";
import Food from "../../models/food/food";
import Category from "../../models/food/category";
import Nutrient from "../../models/food/nutrient";
import MealFoods from "../../models/food/mealFoods";
import Meal from "../../models/meal";

export const allFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.findAll({});

    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching foods", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.findOne({where: { id: req.params.id }});

    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching food", error });
  }
};

export const addFoodToMeal = async (req: Request, res: Response) => {
  try {
    const { mealId, foodId, quantity, unit } = req.body;
    const userId = req.user?.id;

    const meal = await Meal.findOne({ where: { id: mealId, userId: userId } });
    const food = await Food.findByPk(foodId);

    if (!meal || !food) {
      res.status(404).json({ message: "Meal or Food not found" });
      return 
    }

    const mealFood = await MealFoods.create({
      mealId,
      foodId,
      quantity,
      unit,
    });
    res.status(200).json(mealFood);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding food to meal", error });
  }
}
