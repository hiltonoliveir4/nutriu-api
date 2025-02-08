import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import Meal from "../models/meal";
import Food from "../models/food/food";
import { UnitTypeValues } from "../enums/unitType";

export const validateMealFoods = [
  body("mealId")
    .isInt()
    .withMessage("Meal ID must be an integer")
    .custom(async (value) => {
      const meal = await Meal.findByPk(value);
      if (!meal) {
        return Promise.reject("Meal ID does not exist");
      }
    }),
  body("foodId")
    .isInt()
    .withMessage("Food ID must be an integer")
    .custom(async (value) => {
      const food = await Food.findByPk(value);
      if (!food) {
        return Promise.reject("Food ID does not exist");
      }
    }),
  body("quantity")
    .isFloat({ min: 0 })
    .withMessage("Quantity must be a number greater than or equal to 0"),
  body("unit")
    .isIn(UnitTypeValues)
    .withMessage("Unit must be one of the predefined values"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },
];
