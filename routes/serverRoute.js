const express = require('express');
const router = express.Router();
const foodModel = require('../database/foodModel').foodDatabase;
const userModel = require('../database/userModel').userModel;

// Authentication check
const { ensureAuthenticated } = require('../middleware/checkAuth');

// Unsplash setup
const fetch  = require("node-fetch")
const { createApi } =require("unsplash-js");

global.fetch = fetch;
const unsplash = createApi({
  accessKey: "-Q82q_FR4IuZQx80N1nReT52ntv7r2tjSVvIVLZSA6w",
  fetch: fetch
})

/* Return a list of food items */
router.get('/', ensureAuthenticated, async(req, res, next) => {
    try {
        let results = await foodModel.all();
        res.json(results)
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

/* Send the picture of a food item to the swipe page */
router.get('/:id', ensureAuthenticated, async(req, res, next) => {
    try {
        let result = await foodModel.one(req.params.id);
        let food = JSON.parse(JSON.stringify(result));
        let name = food[0].FoodName
        let userID = await req.session.passport.user;
        await unsplash.photos.getRandom({
            query: name,
            featured: true,
            count: 1
        }).then(result => {
            switch (result.type) {
                case 'error':
                    console.log('unsplash error occured: ', result.errors[0]);
                case 'success':
                    const photo = JSON.parse(JSON.stringify(result.response));
                    url = photo[0].urls.regular
                    res.render("./swipe", {food: name, photo: url, id: userID})
            }
        });
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

/* Add a food item to the list of like */
router.get('/:id/likes', ensureAuthenticated, async(req, res, next) => {
    try {
        let result = await foodModel.one(req.params.id);
        let food = JSON.parse(JSON.stringify(result));
        let foodID = food[0].ID;
        let name = food[0].FoodName;
        let userID = req.session.passport.user;
        let likes = await userModel.findLikes(userID)
        
        let isUpdate = false;
        let times = 0;
        for (const food of likes) {
            if (name === food.foodName) {
                isUpdate = true
                times = food.timesLiked
            }
        };

        if (isUpdate) {
            let newTimes = times + 1;
            await userModel.editLikes(newTimes, foodID, userID);
            res.redirect(`/api/food/${foodID}`)
        } else {
            await userModel.addLikes(userID, foodID, name);
            res.redirect(`/api/food/${foodID}`);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


module.exports = router;