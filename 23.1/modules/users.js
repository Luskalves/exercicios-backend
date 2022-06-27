const connection = require('./connection');

const userModule = {
  async createUser(firstName, lastName, email, password) {
    const query = 
      'insert into registro.users (first_name, last_name, email, password) values (?, ?, ?, ?)';
    await connection.execute(query, [firstName, lastName, email, password]);
    const [[item]] = await connection
      .execute('SELECT id FROM registro.users ORDER BY id DESC LIMIT 1;');

    const { id } = item;
    return id;
  }
}

module.exports = userModule;