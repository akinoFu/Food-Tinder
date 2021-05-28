const express = require("express");
const path = require("path");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const passport = require("./middleware/passport");
const apiRouter = require('./routes/serverRoute');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const restaurantRouter = require('./routes/restaurantRoute');

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

// Routes
app.use('/api/food', apiRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/restaurant', restaurantRouter);

// Start the server
app.listen(3000, function() {
    console.log(
        "Server running. Visit: http://localhost:3000 in your browser 🚀"
    );
});

module.exports = app;