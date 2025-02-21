import { Router} from 'express';
import { addFoodToMeal, allFoods, getFood, updateFoodToMeal } from '../controllers/foodController';
import authMiddleware from '../middleware/auth';
import { validateMealFoods, validateMealFoodsUpdate } from '../validators/mealFoodsValidation';

const foodRouter = Router();

foodRouter.get('/', authMiddleware(), allFoods);
foodRouter.get('/:id', authMiddleware(), getFood);
foodRouter.post('/addtomeal', authMiddleware(), validateMealFoods, addFoodToMeal);
foodRouter.post('/updatemealfood', authMiddleware(), validateMealFoodsUpdate, updateFoodToMeal);

export default foodRouter;