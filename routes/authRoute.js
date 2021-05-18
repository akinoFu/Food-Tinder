const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const userController = require("../controllers/userController")


const router = express.Router();

const num = Math.floor(Math.random() * 100) + 1;

router.get("/login", forwardAuthenticated, (req, res) => {
  const email = req.query.email
  if (email === undefined) {
    res.render("login")
  } else {
    res.render("login", {email: email})
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: `/api/food/${num}`,
    failureRedirect: "/auth/login",
  })
);

router.get("/register", forwardAuthenticated, (req, res) =>  res.render("register"));

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const pw1 = req.body.password1;
  const pw2 = req.body.password2;
  let isInputValid = true
  // Passwords check
  if (pw1 != pw2) {
    isInputValid = false
    res.render("register", {name: name, email: email, message: "Please make sure your passwords match"})
  } else if (! pw1.trim()) {
    isInputValid = false
    res.render("register", {name: name, email: email, message: "Please enter a valid password"})
  // Email check
  } else {
    const userCheck = await userController.getUserByEmail(email)
    if (userCheck) {
      isInputValid = false
      res.render("register", {name: name, email: null, message: "The email already exists."})
    }
  }
  // Add a user
  if (isInputValid) {
    const user = await userController.addUser(name, email, pw1)
    res.redirect(`/auth/login?email=${user.email}`)
  }
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
