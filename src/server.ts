import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database'; // Importando a configuração do banco
import authRouter from './routes/auth';
import userRouter from './routes/users';
import mealRouter from './routes/meals';

dotenv.config(); // Carrega variáveis de ambiente

const app = express();

// Configurações do servidor
app.use(cors());               // Permitir CORS
app.use(express.json());        // Para parsear o body das requisições como JSON

// Rotas
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/meals', mealRouter);

// Página de erro 404 para rotas não encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Conectar ao banco de dados e iniciar o servidor
const startServer = async () => {
  try {
    // Verificar a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Database connected successfully!');

    // Sincronizar as tabelas com o banco (caso necessário)
    await sequelize.sync({ alter: true });
    console.log('Models synchronized successfully!');

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
