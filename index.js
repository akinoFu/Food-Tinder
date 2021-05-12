const express = require("express");
const path = require("path");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const passport = require("./middleware/passport");
const apiRouter = require('./routes/serverRoute');
const authRouter = require('./routes/authRoute');

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

app.use(express.json());
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(`User details are: `);
    console.log(req.user);
  
    console.log("Entire session object:");
    console.log(req.session);
  
    console.log(`Session details are: `);
    console.log(req.session.passport);
  
    console.log(`Session stored`);
    console.log(req.sessionStore.sessions);
    next();
});

app.use('/api/food', apiRouter);
app.use('/auth', authRouter);

console.log(`node-env: ${process.env.NODE_ENV}`)

app.listen(3000, function() {
    console.log(
        "Server running. Visit: http://localhost:3000 in your browser 🚀"
    );
});

module.exports = app;