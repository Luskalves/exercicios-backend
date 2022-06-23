const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root1234',
  host: 'localhost',
  database: 'users'
});

module.exports = connection;