import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database'; 
import authRouter from './routes/auth';
import userRouter from './routes/users';
import mealRouter from './routes/meals';
import foodRouter from './routes/food/foods';
import defineAssociations from './models/associations';
import goalRouter from './routes/goals';

dotenv.config();

const app = express();

// Configurações do servidor
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/meals', mealRouter);
app.use('/foods', foodRouter);
app.use('/goals', goalRouter);

// Página de erro 404 para rotas não encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');

    defineAssociations();
    // await sequelize.sync({ alter: true });
    // console.log('Models synchronized successfully!');

    // Iniciar o servidor
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error initializing the server:', error);
  }
};

startServer();
