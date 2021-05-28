const pool = require("./index").pool

let userModel = {}

/* Find a user by an email */
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

/* Find a user by a user id */
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

/* Get a list of like by a user id */
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

/* Update a record in likes table */
userModel.editLikes = (times, foodID, userID) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE likes SET timesLiked = ${times} WHERE userID = ${userID} AND foodID = "${foodID}"`, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log("Successfully updated the list of likes!")
            return resolve(results);
        });
    });
};

/* Insert a record into likes table */
userModel.addLikes = (userID, foodID, foodName) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO likes VALUES (${userID}, ${foodID}, "${foodName}", 1)`, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log("Successfully added to the list of likes!")
            return resolve(results);
        });
    });
};

/* Insert a new user data into users table */
userModel.addNewUser = (name, email, password) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO users SELECT MAX(id) + 1, "${name}", "${email}", "${password}" FROM users`, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results)
        })
    })
}

module.exports = { userModel };