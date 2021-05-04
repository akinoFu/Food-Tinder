const express = require('express');
const router = express.Router();
const db = require('../database');

// Unsplash setup
const fetch  = require("node-fetch")
const { createApi } =require("unsplash-js")

global.fetch = fetch;
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS,
  fetch: fetch
})


router.get('/', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results)
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        let result = await db.one(req.params.id);
        res.json(result)
    } 
    catch (error) {
        console.log(error);
        res.sentStatus(500);
    }
});

module.exports = router;