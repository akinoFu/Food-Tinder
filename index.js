const express = require("express");
const path = require("path");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const apiRouter = require('./routes/serverRoute');
const app = express();

require('dotenv').config()

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.json());
app.use('/api/food', apiRouter);
app.set("view engine", "ejs");
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


app.listen(3000, function() {
    console.log(
        "Server running. Visit: http://localhost:3000 in your browser 🚀"
    );
    
});

console.log(`node-env: ${process.env.NODE_ENV}`)


module.exports = app;