const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/checkAuth');

const fetch  = require("node-fetch")

/* Show a list of restaurants for a food item */
router.get('/:food', ensureAuthenticated, async(req, res, next) => {
    try {
        let clientID = "AIzaSyBCf63k5kDJVoymppDpviycoU2czteAZUo";
        let query = req.params.food;
        let userID = await req.session.passport.user;
        res.render("./restaurant", {apiID: clientID, query: query, id: userID});
        //let result = await fetch (`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${clientID}`)
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;