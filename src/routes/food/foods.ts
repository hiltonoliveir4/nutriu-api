import { Router} from 'express';
import { allFoods, getFood } from '../../controllers/food/foodController';
import authMiddleware from '../../middleware/auth';

const foodRouter = Router();

foodRouter.get('/', authMiddleware(), allFoods);
foodRouter.get('/:id', authMiddleware(), getFood);

export default foodRouter;