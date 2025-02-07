import { Router} from 'express';
import authMiddleware from '../middleware/auth';
import { validateGoal, validateGoalUpdate } from './../validators/goalValidation';
import { allGoals, destroyGoal, getGoal, storeGoal, updateGoal } from '../controllers/goalController';

const goalRouter = Router();

goalRouter.get('/', authMiddleware(),  allGoals);
goalRouter.get('/:id', authMiddleware(),  getGoal);
goalRouter.post('/', authMiddleware(), validateGoal, storeGoal);
goalRouter.put('/:id', authMiddleware(), validateGoalUpdate, updateGoal);
goalRouter.delete('/:id', authMiddleware(), destroyGoal);


export default goalRouter;