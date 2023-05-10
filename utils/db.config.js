const mysql = require('mysql2');

// mysql config
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'user_database'
});

module.exports = db;