const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    passport: '',
    database: process.env.NODE_ENV == "test"? 'food_test': "food",
    port: '3306',
    connectionLimit: 10
});

let foodDatabase = {};

foodDatabase.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`Select * FROM food_option`, (error, results) => {
            if (error) {
                return reject(error);
            } 
            return resolve(results);
        });
    });
};

foodDatabase.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`Select * FROM food_option where id = ?`, [id], (error, result) => {
            if (error) {
                return reject(error);
            } 
            return resolve(result);
        });
    });
};

module.exports = foodDatabase;