const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    passport: '',
    database: process.env.NODE_ENV == "test"? 'food_test': "food",
    port: '3306',
    connectionLimit: 10
});

let userModel = {}

userModel.findOne = (email) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE email ="${email}"`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results)
        });
    });
}

userModel.findById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE id =${id}`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results)
        })
    })
}
module.exports = { userModel };