import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateMeal = [
  body('title').isString().isLength({ max: 30 }).withMessage('Title must be a string with a maximum length of 30 characters'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('date').isISO8601().toDate().withMessage('Date must be a valid date'),
  body('illustration').isString().withMessage('Illustration must be a string'),
  body('color').isString().withMessage('Color must be a string'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return
    }
    next();
  },
];

export const validateMealUpdate = [
  body('title').optional().isString().isLength({ max: 30 }).withMessage('Title must be a string with a maximum length of 30 characters'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('date').optional().isISO8601().toDate().withMessage('Date must be a valid date'),
  body('illustration').optional().isString().withMessage('Illustration must be a string'),
  body('color').optional().isString().withMessage('Color must be a string'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return
    }
    next();
  },
];