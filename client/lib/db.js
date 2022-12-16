// db.js
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.DB_ENDPOINT,
    port: process.env.DB_PORT,
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
});

export default async function executeQuery( query_string, values = []) {
    try {
      const results = await db.query(query_string, values);
      await db.end();
      return results;
    } catch (e) {
      return e;
    }
  }