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

userModel.findLikes = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT foodName, timesLiked FROM likes WHERE userID = ${id}`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results)
        })
    })
}

userModel.editLikes = (times, foodID, userID) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE likes SET timesLiked = ${times} WHERE userID = ${userID} AND foodID = "${foodID}"`, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log("Successfully updated the list of likes!")
            console.log(results)
            return resolve(results);
        });
    });
};

userModel.addLikes = (userID, foodID, foodName) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO likes VALUES (${userID}, ${foodID}, "${foodName}", 1)`, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log("Successfully added to the list of likes!")
            console.log(results)
            return resolve(results);
        });
    });
};

module.exports = { userModel };