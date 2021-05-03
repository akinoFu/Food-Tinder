const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results)
    } 
    catch (error) {
        console.log(error);
        res.sentStatus(500);
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