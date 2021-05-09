const app = require("../index");
const db = require("../database/index");
const request = require("supertest");

// ========== GET a list of food (/api/food/) ==========
describe("GET a list of food (/api/food/)", () => {
    const mockDbAll = jest.fn()
    mockDbAll.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"},
                          {ID: 2, FoodName: "Ramen"},
                          {ID: 3, FoodName: "Roast Chicken"}])
    db.all = mockDbAll

    it("Check the statuscode (success)", async () => {
        await request(app).get("/api/food")
        .expect(200);
    });
    
    it("Check the statuscode (failure)", async () => {
        db.all.mockImplementationOnce(() => Promise.reject());
        await request(app).get("/api/food")
        .expect(500);
      });

    it("Check the length of the data", async () => {
        await request(app).get("/api/food")
        .expect((response) => {
            expect(response.body.length).toEqual(3);
        });
    });
    
    it("Check the all records", async () => {
        await request(app).get("/api/food")
        .expect((response) => {
            expect(response.body).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                                           {ID: 2, FoodName: "Ramen"},
                                           {ID: 3, FoodName: "Roast Chicken"}]);
        });
    });
});


// ========== GET a food pict (/api/food/:id) ==========
describe("Get a food pict (/api/food/:id)", () => {
    const mockDbOne = jest.fn()
    mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
    db.one = mockDbOne

    it("Check the statuscode (success)", async () => {
        await request(app).get("/api/food/1")
        .expect(200);
    });

    it("Check the rendering data (success)", async () => {
        await request(app).get("/api/food/1")
        .expect((response) => {
            expect(response.res.text).toContain("Chocolate Donuts")
        })
    });

    it("Check the statuscode (failure)", async () => {
        db.one.mockImplementationOnce(() => Promise.reject());
        await request(app).get("/api/food/1")
        .expect(500);
    });

});


// ========== GET a list of likes (/api/likes/:userId) ==========
// describe("GET a list of likes (/api/likes/:userId)", async () => {
//     it("Check the statuscode (The user id exists)", async () => {
//         await request(app).get("/api/food/likes/1")
//         .expect(200)
//     });

//     it("Check the value", async () => {
//         await request(app).get("/api/food/likes/1")
//         .expect((response) => {
//             expect(response.body).toEqual([{ID: 1},
//                                            {ID: 2},
//                                            {ID: 5}]);
//         });
//     });

//     it("Check the statuscode (The user id does not exist)", async () => {
//         await request(app).get("/api/food/likes/100")
//         .expect(500)
//     });
// });

// ========== GET a list of history (/api/hists/:userId) ==========
// describe("return a list of history", async () => {
//     pass
// });

// ========== POST a food to a list of like (/api/food/:userId/:id) ==========
// describe("Add a food to a list of like", async () => {
//     pass
// });

// ========== POST a restaurant the user viewd to a list of hitory (/api/hist/rest/:userId/:restaurantId) ==========
// describe("Add a restaurant the user viewd to a list of hitory", async () => {
//     pass
// });

