import { Router} from 'express';
import { allMeals, destroyMeal, getMeal, storeMeal, updateMeal } from '../controllers/mealController';
import authMiddleware from '../middleware/auth';
import { validateMeal, validateMealUpdate } from '../validators/mealValidation';

const mealRouter = Router();

mealRouter.get('/', authMiddleware(),  allMeals);
mealRouter.get('/:id', authMiddleware(),  getMeal);
mealRouter.post('/', authMiddleware(), validateMeal, storeMeal);
mealRouter.put('/:id', authMiddleware(), validateMealUpdate, updateMeal);
mealRouter.delete('/:id', authMiddleware(), destroyMeal);


export default mealRouter;