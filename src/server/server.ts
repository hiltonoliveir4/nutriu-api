import dotenv from 'dotenv';
import sequelize from '../config/database';
import createApp from './app';
import defineAssociations from '../config/associations';

dotenv.config();

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');

    defineAssociations();

    const app = createApp();
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Error initializing the server:', error);
  }
};

export default startServer;
