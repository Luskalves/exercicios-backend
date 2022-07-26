require('dotenv').config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || null,
  database: process.env.DB_NAME || 'database_development',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5434,
  dialect: process.env.DB_DIALECT || 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};