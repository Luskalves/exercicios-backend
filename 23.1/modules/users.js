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
  },

  async listAll() {
    const [item] = await connection
      .execute('SELECT id, first_name, last_name, email FROM registro.users');
  
    return item;
  },

  async listUser(id) {
    const query = 'SELECT id, first_name, last_name, email FROM registro.users WHERE id = ?';
    const [item] = await connection.execute(query, [id]);

    return item;
  }
}

module.exports = userModule;