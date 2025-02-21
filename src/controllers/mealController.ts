import { Request, Response } from "express";
import Meal from "../models/meal";


export const allMeals = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const meals = await Meal.findAll({ where: { userId: userId } });
    res.status(200).json(meals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching meals", error });
  }
};

export const getMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const mealId = req.params.id;
    const meal = await Meal.findOne({ where: { id: mealId, userId: userId } });

    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    res.status(200).json(meal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching meal", error });
  }
}

export const storeMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const meal = await Meal.create({ ...req.body, userId: userId });
    res.status(201).json(meal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating meal", error });
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const mealId = req.params.id;
    const meal = await Meal.findOne({ where: { id: mealId, userId: userId } });

    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    await meal.update(req.body);
    res.status(200).json(meal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating meal", error });
  }
}

export const destroyMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const mealId = req.params.id;
    const meal = await Meal.findOne({ where: { id: mealId, userId: userId } });

    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    await meal.destroy();
    res.status(200).json({ message: "Meal deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting meal", error });
  }
}
