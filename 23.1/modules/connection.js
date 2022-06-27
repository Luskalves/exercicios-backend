const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  port: '3306',
  password: 'root1234',
  host: 'localhost',
});

module.exports = connection;