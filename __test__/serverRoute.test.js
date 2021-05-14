const app = require("../index");
const db = require("../database/index");
const users = require('../database/userModel').userModel;
const request = require("supertest");
const auth = require("../middleware/checkAuth")
const server = request.agent(app);

function loginUser() {
    return function (done) {
        server
        .post("/auth/login")
        .send({ email: "ayamamoto7@my.bcit.ca", password: "Group7!" })
        .expect(302)
        .expect("Location", "/api/food/1")
        .then(() => done());
    };
}
  

// ========== GET a list of food (/api/food/) ==========
describe("GET a list of food (/api/food/)", () => {
    const mockDbAll = jest.fn()
    mockDbAll.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"},
                          {ID: 2, FoodName: "Ramen"},
                          {ID: 3, FoodName: "Roast Chicken"}])
    db.all = mockDbAll
    it("test if login is success", loginUser());


    it("Check the statuscode (success)", async () => {
        server
        .get("/api/food")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        
    });

    it("Check the length of the data", function (done) {
        server
        .get("/api/food")
        .then((response) => {
            expect(response.body.length).toEqual(3);
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", async () => {
        db.all.mockImplementationOnce(() => Promise.reject());
        server
        .get("/api/food")
        .then((response) => {
            expect(response.res.body).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                                               {ID: 2, FoodName: "Ramen"},
                                               {ID: 3, FoodName: "Roast Chicken"}]);
        })
        .then(() => done());
    });
});


// ========== GET a food pict (/api/food/:id) ==========
describe("Get a food pict (/api/food/:id)", () => {
    const mockDbOne = jest.fn()
    mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
    db.one = mockDbOne

    it("Check the statuscode (success)", async () => {
        server
        .get("/api/food/1")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });

    it("Check the rendering data (success)", async () => {
        server
        .get("/api/food/1")
        .then((response) => {
            expect(response.res.text).toContain("Chocolate Donuts");
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", async () => {
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

    it("Check the statuscode (success)", async () => {
        server
        .get("/api/food/1/likes")
        .then((response) => {
            expect(response.res.statusCode).toEqual(200);
        })
        .then(() => done());
    });

    it("Check the statuscode (failure)", async () => {
        db.one.mockImplementationOnce(() => Promise.reject());
        server
        .get("/api/food/1/likes")
        .then((response) => {
            expect(response.res.statusCode).toEqual(500);
        })
        .then(() => done());
    });
});

