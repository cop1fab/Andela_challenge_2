import dotenv from 'dotenv';

dotenv.config();

export default {
  production: process.env.DATABASE_URL,
  test: process.env.DATABASE_URL_TEST,
};
