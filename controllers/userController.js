const userModel = require("../database/userModel").userModel

const getUserByEmailIdAndPassword = async (email, password) => {
  let result = await userModel.findOne(email);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    console.log(user)
    if (isUserValid(user[0], password)) {
      return user[0];
    }
  }
  return null;
};
const getUserById = async (id) => {
  let result = await userModel.findById(id);
  if (result) {
    user = JSON.parse(JSON.stringify(result))
    return user[0];
  }
  return null;
};

const isUserValid = (user, password) => {
  return user.password === password;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
};
