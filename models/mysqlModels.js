const { pool } = require('../config');

const createUser = (email, password, role, callback) => {
  const sql = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
  pool.execute(sql, [email, password, role], callback);
};

// Add more MySQL models as needed

module.exports = { createUser };
