const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const userController = require("../controllers/userController")

const router = express.Router();

const num = Math.floor(Math.random() * 100) + 1;

/* Show the login page */
router.get("/login", forwardAuthenticated, (req, res) => {
  const email = req.query.email
  if (email === undefined) {
    // Show login page
    res.render("login")
  } else {
    // If the url parameter exists, show the login page with the data
    res.render("login", {email: email})
  }
});

/* Login on the login page */
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: `/api/food/${num}`,
    failureRedirect: "/auth/login",
  })
);

/* Show the registration page */
router.get("/register", forwardAuthenticated, (req, res) =>  res.render("register"));

/* Create an acount on the registration page */
router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const pw1 = req.body.password1;
  const pw2 = req.body.password2;
  let isInputValid = true
  // Check if two passwords match
  if (pw1 != pw2) {
    isInputValid = false
    // if not, show the ragistration page with the error message
    res.render("register", {name: name, email: email, message: "Please make sure your passwords match"})

  // Check if the paswords are not empty
  } else if (! pw1.trim()) {
    isInputValid = false
    // if not, show the ragistration page with the error message
    res.render("register", {name: name, email: email, message: "Please enter a valid password"})
  // Check if the email exists
  } else {
    const userCheck = await userController.getUserByEmail(email)
    if (userCheck) {
      isInputValid = false
      // if so, show the ragistration page with the error message
      res.render("register", {name: name, email: null, message: "The email already exists."})
    }
  }
  // Add a user
  if (isInputValid) {
    const user = await userController.addUser(name, email, pw1)
    // Show the login page
    res.redirect(`/auth/login?email=${user.email}`)
  }
})

/* Logout */
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
