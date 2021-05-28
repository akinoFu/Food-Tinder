const express = require('express');
const router = express.Router();
const userModel = require('../database/userModel').userModel;

const { ensureAuthenticated } = require('../middleware/checkAuth');

/* Send the user's list of likes to the dashboard page */
router.get('/:id', ensureAuthenticated, async(req, res, next) => {
    try {
        let user = await userModel.findById(req.params.id);
        let name = JSON.parse(JSON.stringify(user))[0].fullname;
        let userID = JSON.parse(JSON.stringify(user))[0].id;
        let result = await userModel.findLikes(req.params.id);
        let likes = JSON.parse(JSON.stringify(result));
        let sortedLikes = likes.sort(function(a, b) {
            return b.timesLiked - a.timesLiked
        })
        res.render("./dashboard", {user: name, list: sortedLikes, id:userID});  
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;