const express = require('express');
const router = express.Router();
const db = require('../database/index');

// Unsplash setup
const fetch  = require("node-fetch")
const { createApi } =require("unsplash-js");

// Authentication check
const { ensureAuthenticated } = require('../middleware/checkAuth');

global.fetch = fetch;
const unsplash = createApi({
  accessKey: "YZxaihlPPvx1yPCqSc-euoYSTlmiFuB-2q8j1w-rZvU",
  fetch: fetch
})


router.get('/', ensureAuthenticated, async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results)
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:id', ensureAuthenticated, async(req, res, next) => {
    try {
        let result = await db.one(req.params.id);
        let food = JSON.parse(JSON.stringify(result));
        let name = food[0].FoodName
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
                    res.render("./swipe", {food: name, photo: url})
            }
        });
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;