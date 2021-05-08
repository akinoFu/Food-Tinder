const app = require("./index");
const db = require("./database/index");
const request = require("supertest");


beforeAll((done) => {
    done();
});

afterAll(async (done) => {
    done();
});

// ========== GET a list of food (/api/food/) ==========
describe("GET a list of food (/api/food/) - success", () => {
    const mock1 = jest.fn()
    mock1.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"},
                          {ID: 2, FoodName: "Ramen"},
                          {ID: 3, FoodName: "Roast Chicken"}])
    db.all = mock1

    it("Check the statuscode", async () => {
        await request(app).get("/api/food")
        .expect(200);
    });
    
    it("failing to fetch database", async () => {
        db.all.mockImplementationOnce(() => Promise.reject(error));
        await request(app).get("/api/food")
        .expect(500);
      });

    it("Check for existing id", async () => {
        await request(app).get("/api/food/1")
        .expect(200);
    });

    it("Check error for non existing id", async () => {
        await request(app).get("/api/food/102")
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





// describe("Get food ID(/api/food/:id", () => {
//     const mock2 = jest.fn()
//     mock2.mockReturnValue()
//     db.one = mock2


// });

// describe("GET a list of food (/api/food/) - failure", () => {
    // const mock2 = jest.fn()
    // const result = new Promise(reject)
    // mock2.mockReturnValue(result)
    // db.all = mock2

    // it("Check the statuscode", async () => {
    //     await request(app).get("/api/food")
    //     .expect(500);
    // });
    
//     it("Check the length of the data", async () => {
//         await request(app).get("/api/food")
//         .expect((response) => {
//             expect(response.body.length).toEqual(3);
//         });
//     });
    
//     it("Check the all records", async () => {
//         await request(app).get("/api/food")
//         .expect((response) => {
//             expect(response.body).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
//                                            {ID: 2, FoodName: "Ramen"},
//                                            {ID: 3, FoodName: "Roast Chichen"}]);
//         });
//     });
// });

describe("Test db.all - return all food", () => {
    // const mock3 = jest.fn()
    // mock3.mockReturnValue({food: "Chocolate Donuts", photo: "https://8.8.8.8/"})
    // db.one(1) = mock3

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

