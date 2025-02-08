import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'nutriu',
  port: parseInt(process.env.DB_PORT || '5432'),
  define: {
    freezeTableName: true,
  },
});

export default sequelize;