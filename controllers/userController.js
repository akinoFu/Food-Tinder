const userModel = require("../database/userModel").userModel

/* Check the user existence by an email and the match with the password */
const getUserByEmailIdAndPassword = async (email, password) => {
  let result = await userModel.findOne(email);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    if (user.length === 0) { return null}
    if (isUserValid(user[0], password)) {
      return user[0];
    }
  }
  return null;
};

/* Get a user record by a user id */
const getUserById = async (id) => {
  let result = await userModel.findById(id);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    return user[0];
  }
  return null;
};

/* Get a user record by the an email */
const getUserByEmail = async (email) => {
  let result = await userModel.findOne(email);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    return user[0];
  }
  return null;
};

/* Add a new user */
const addUser = async (name, email, password) => {
  await userModel.addNewUser(name, email, password);
  let result = await getUserByEmail(email);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    return user;
  }
  return null;
};

/* Check if the password input and the one in database match */
const isUserValid = (user, password) => {
  return user.password === password;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  getUserByEmail,
  addUser,
};
