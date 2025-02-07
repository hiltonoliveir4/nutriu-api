import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { NutrientTypeValues } from "../enums/nutrientType";
import { UnitTypeValues } from "../enums/unitType";

export const validateGoal = [
  body("nutrient")
    .isIn(NutrientTypeValues)
    .withMessage("Nutrient must be one of the predefined values"),
  body("unit")
    .isIn(UnitTypeValues)
    .withMessage("Unit must be one of the predefined values"),
  body("quantity")
    .isFloat({ min: 0 })
    .withMessage("Quantity must be a number greater than or equal to 0"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return
    }
    next();
  },
];

export const validateGoalUpdate = [
  body("nutrient")
    .optional()
    .isIn(NutrientTypeValues)
    .withMessage("Nutrient must be one of the predefined values"),
  body("unit")
    .optional()
    .isIn(UnitTypeValues)
    .withMessage("Unit must be one of the predefined values"),
  body("quantity")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Quantity must be a number greater than or equal to 0"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return
    }
    next();
  },
];
