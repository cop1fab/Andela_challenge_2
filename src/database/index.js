import {
  Pool,
} from 'pg';
import dotenv from 'dotenv';
import dbconfig from './config';

dotenv.config();

const env = process.env.NODE_ENV === 'test' ? 'test' : 'production';

const pool = new Pool({
  connectionString: dbconfig[env],
});

function query(text, params) {
  return new Promise((resolve, reject) => {
    pool.query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default {
  query,
};