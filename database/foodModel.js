const pool = require("./index").pool
let foodDatabase = {};

/* Get all record from food_options */
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

/* Get a food item from food_options by food id */
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

module.exports = { foodDatabase };