import { Router} from 'express';
import { addFoodToMeal, allFoods, getFood } from '../../controllers/food/foodController';
import authMiddleware from '../../middleware/auth';

const foodRouter = Router();

foodRouter.get('/', authMiddleware(), allFoods);
foodRouter.get('/:id', authMiddleware(), getFood);
foodRouter.post('/addtomeal', authMiddleware(), addFoodToMeal);

export default foodRouter;