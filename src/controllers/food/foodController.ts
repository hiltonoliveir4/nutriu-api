import { Request, Response } from "express";
import Food from "../../models/food/food";
import Category from "../../models/food/category";
import Nutrient from "../../models/food/nutrient";

export const allFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: Nutrient,
          as: "nutrients",
        },
      ],
    });

    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching foods", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: Nutrient,
          as: "nutrients",
        },
      ],
    });

    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching food", error });
  }
};
