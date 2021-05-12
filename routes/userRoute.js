const express = require('express');
const router = express.Router();
const db = require('../database/userModel').userModel;


const { ensureAuthenticated } = require('../middleware/checkAuth');

router.get('/:id', ensureAuthenticated, async(req, res, next) => {
    try {
        let user = await db.findById(req.params.id);
        let name = JSON.parse(JSON.stringify(user))[0].fullname;
        let result = await db.findLikes(req.params.id);
        let likes = JSON.parse(JSON.stringify(result));
        let sortedLikes = likes.sort(function(a, b) {
            return b.timesLiked - a.timesLiked
        })
        res.render("./dashboard", {user: name, list: sortedLikes});  
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;