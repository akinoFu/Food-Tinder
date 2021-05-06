const app = require("./index");
const request = require("supertest");

beforeAll((done) => {
    done();
});

afterAll(async (done) => {
    done();
});


// ========== GET a list of food (/api/food/) ==========
it("return all food (check the statuscode", async () => {
    await request(app).get("/api/food")
    .expect(200)
});


it("return all food", async () => {
    await request(app).get("/api/food")
    .expect((response) => {
        expect(response.body.length).toEqual(5);
    });
});

it("return all food", async () => {
    await request(app).get("/api/food")
    .expect((response) => {
        expect(response.body[0].ID).toEqual(1);
        expect(response.body[0].FoodName).toEqual("Chocolate Donuts");
    });
});

it("return all food", async () => {
    await request(app).get("/api/food")
    .expect((response) => {
        expect(response.body).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                                       {ID: 2, FoodName: "Ramen"},
                                       {ID: 3, FoodName: "Roast Chichen"},
                                       {ID: 4, FoodName: "Pho"},
                                       {ID: 5, FoodName: "Hamburger"}]);
    });
});


// ========== GET a food (/api/food/:id) ==========
it("return a food pict (success)", async () => {
    await request(app).get("/api/food/1")
    .expect((response) => {
        expect(response.res.text).toContain("Chocolate Donuts")
    })
});

// it("return a food pict (fail)", async () => {
//     await request(app).get("/api/food/100")
//     .expect((response) => {
//         expect(response.res.statusCode).toBe(500)
//     })
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

