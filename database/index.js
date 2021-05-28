const mysql = require('mysql');

/* Create a mysql pool */
const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'root',
    database: process.env.NODE_ENV == "test"? 'food_test': "food",
    port: '3306',
    connectionLimit: 10
});

module.exports = { pool };