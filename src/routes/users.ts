import { Router} from 'express';
import { allUsers, destroyUser, getUser, updateUser } from '../controllers/userController';
import authMiddleware from '../middleware/auth';

const userRouter = Router();

userRouter.get('/', authMiddleware(), allUsers);
userRouter.get('/:id', authMiddleware(), getUser);
userRouter.put('/:id', authMiddleware(), updateUser);
userRouter.delete('/:id', authMiddleware(), destroyUser);

export default userRouter;