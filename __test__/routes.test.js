const app = require("../index");
const db = require("../database/index");
const users = require('../database/userModel').userModel;
const request = require("supertest");
const server = request.agent(app);

function loginUser() {
    return function (done) {
        server
        .post("/auth/login")
        .send({ email: "ayamamoto7@my.bcit.ca", password: "Group7!" })
        .expect(302)
        .then(() => done());
    };
}

/* #######################################
        test for serverRoute.js
   ####################################### */

// ========== GET a list of food (/api/food/) ==========
describe("GET a list of food (/api/food/)", () => {
    const mockDbAll = jest.fn()
    mockDbAll.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"},
                          {ID: 2, FoodName: "Ramen"},
                          {ID: 3, FoodName: "Roast Chicken"}])
    db.all = mockDbAll
    it("test if login is success", loginUser());


    it("Check the statuscode (success)", (done) => {
        server
        .get("/api/food")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });

    it("Check the length of the data", (done) => {
        server
        .get("/api/food")
        .then((response) => {
            expect(response.body.length).toEqual(3);
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", (done) => {
        db.all.mockImplementationOnce(() => Promise.reject());
        server
        .get("/api/food")
        .then((response) => {
            expect(response.res.statusCode).toEqual(500);
        })
        .then(() => done());
    });
});


// ========== GET a food pict (/api/food/:id) ==========
describe("Get a food pict (/api/food/:id)", () => {
    const mockDbOne = jest.fn()
    const r = Promise.resolve([{ID: 1, FoodName: "Chocolate Donuts"}])
    mockDbOne.mockReturnValue(r)
    // mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
    db.one = mockDbOne

    it("Check the statuscode (success)", (done) => {
        server
        .get("/api/food/1")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });

    it("Check the rendering data (success)", (done) => {
        server
        .get("/api/food/1")
        .then((response) => {
            expect(response.res.text).toContain("Chocolate Donuts");
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", (done) => {
        db.one.mockImplementationOnce(() => Promise.reject());
        server
        .get("/api/food/1")
        .then((response) => {
            expect(response.res.statusCode).toEqual(500);
        })
        .then(() => done());
    });
});


// ========== Update likes (/api/food/:id/likes) ==========
describe("Update the likes table (/api/food/:id/likes)", () => {
    const mockDbOne = jest.fn()
    mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
    db.one = mockDbOne

    const mockFindLikes = jest.fn()
    const result = [{FoodName: "Chocolate Donuts", TimesLiked:4},
                    {FoodName: "Ramen", TimesLiked:3},
                    {FoodName: "Roast Chichen", TimedsLiked: 2},
                    {FoodName: "Pho", TimedsLiked: 1},
                    {FoodName: "Hamburger", TimedsLiked: 2}]
    mockFindLikes.mockReturnValue(result)
    users.findLikes = mockFindLikes

    const mockEditLikes = jest.fn(() => true)
    users.editLikes = mockEditLikes

    const mockAddLikes = jest.fn(() => true)
    users.addLikes = mockAddLikes

    it("Check the statuscode (success)", (done) => {
        server
        .get("/api/food/1/likes")
        .then((response) => {
            expect(response.res.statusCode).toEqual(302);
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", (done) => {
        db.one.mockImplementationOnce(() => Promise.reject());
        server
        .get("/api/food/1/likes")
        .then((response) => {
            expect(response.res.statusCode).toEqual(500);
        })
        .then(() => done());
    });
});
/* #######################################
        test for userRoute.js
   ####################################### */
// ========== GET a list of likes (/user/:id) ==========
describe("GET a list of likes (/user/:id)", () => {
    const mockFindById = jest.fn();
    const result1 = [{id: 1, fullname: "test", email:"test@test", password:"test"}]
    mockFindById.mockReturnValue(result1)
    users.findById = mockFindById

    const mockFindLikes = jest.fn();
    const result2 = [{userId: 1, foodId: 1, FoodName: "Chocolate Donuts", TimesLiked:4},
                    {userId: 1, foodId: 2, FoodName: "Ramen", TimesLiked:3},
                    {userId: 1, foodId: 3, FoodName: "Roast Chichen", TimedsLiked: 2},
                    {userId: 1, foodId: 4, FoodName: "Pho", TimedsLiked: 1},
                    {userId: 1, foodId: 5, FoodName: "Hamburger", TimedsLiked: 2}]
    mockFindLikes.mockReturnValue(result2)
    users.findLikes = mockFindLikes

    it("Check the statuscode (success)", (done) => {
        server
        .get("/user/1")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", (done) => {
        users.findLikes.mockImplementationOnce(() => Promise.reject());
        server
        .get("/user/100")
        .then((response) => {
            expect(response.res.statusCode).toEqual(500);
        })
        .then(() => done());
      });
});

/* #######################################
        test for restaurantRoute.js
   ####################################### */

   describe("GET a list of restaurants (/restaurant/:food)", () => {

    it("Check the statuscode (success)", (done) => {
        server
        .get("/restaurant/1")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });
});