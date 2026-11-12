import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,        
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB
});

export default {
  query: (text, params) => pool.query(text, params)
};