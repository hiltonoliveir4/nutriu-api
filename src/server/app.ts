import express, { Application } from 'express';
import cors from 'cors';
import authRouter from '../routes/auth';
import userRouter from '../routes/users';
import mealRouter from '../routes/meals';
import foodRouter from '../routes/foods';
import goalRouter from '../routes/goals';

const createApp = (): Application => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/meals', mealRouter);
  app.use('/foods', foodRouter);
  app.use('/goals', goalRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  return app;
};

export default createApp;
