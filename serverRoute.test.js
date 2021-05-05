const router = require("./routes/serverRoute");
const app = require("./index");
const request = require("supertest");
const { resolve } = require("path");

beforeAll((done) => {
    done();
});

afterAll(async (done) => {
    // await prisma.user.deleteMany();
    // await prisma.$discount();
    // router.close();
    done();
});


// ========== GET a list of food (/api/food/) ==========
it("return all food", async () => {
    await request(app).get("/api/food")
    .expect(200)
})
// it("return all food", async () => {
//     await request(router)
//         .get("/")
//         .expect((response) => {
//             expect(response.body[0].id).toBe(1);
//         });
// });

// ========== GET a food (/api/:id) ==========
// it("return a food pict", async () => {
//     pass
// });


// ========== GET a list of likes (/api/likes) ==========
// it("return a list of likes", async () => {
//     pass
// });

// ========== GET a list of history (/api/hists) ==========
// it("return a list of history", async () => {
//     pass
// });

// ========== POST a food to a list of like (/api/food/:id) ==========
// it("Add a food to a list of like", async () => {
//     pass
// });

// ========== POST a restaurant the user viewd to a list of hitory (/api/hist/rest/:restaurantId) ==========
// it("Add a restaurant the user viewd to a list of hitory", async () => {
//     pass
// });



/*
const express = require('express');
const router = express.Router();
const db = require('../database');

// Unsplash setup
const fetch  = require("node-fetch")
const { createApi } =require("unsplash-js")

global.fetch = fetch;
const unsplash = createApi({
  accessKey: "YZxaihlPPvx1yPCqSc-euoYSTlmiFuB-2q8j1w-rZvU",
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
        res.sentStatus(500);
    }
});

module.exports = router;
*/