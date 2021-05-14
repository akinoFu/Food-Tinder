// const app = require("../index");
// const db = require("../database/index");
// const users = require('../database/userModel').userModel;
// const request = require("supertest");
// const auth = require("../middleware/checkAuth")
// const router = require("../routes/authRoute")

// // const mockAuth = jest.fn()
// // mockAuth.mockReturnValue( function next() {return true});
// // auth.ensureAuthenticated = mockAuth;

// function loginUser() {
//     return function (done) {
//         router
//         .post("/login")
//         .send({ email: "ayamamoto7@my.bcit.ca", password: "Group7!" })
//         .expect(302)
//         .expect("Location", "/api/food/1")
//         .then(() => done());
//     };
//   }
  

// // ========== GET a list of food (/api/food/) ==========
// describe("GET a list of food (/api/food/)", () => {
//     const mockDbAll = jest.fn()
//     mockDbAll.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"},
//                           {ID: 2, FoodName: "Ramen"},
//                           {ID: 3, FoodName: "Roast Chicken"}])
//     db.all = mockDbAll
//     it("test if login is success", loginUser());

//     it("Check the statuscode (success)", async () => {
//         await request(app).get("/api/food")
//         .expect(200);
//     });
    
//     it("Check the statuscode (failure)", async () => {
//         db.all.mockImplementationOnce(() => Promise.reject());
//         await request(app).get("/api/food")
//         .expect(500);
//       });

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
//                                            {ID: 3, FoodName: "Roast Chicken"}]);
//         });
//     });
// });


// // ========== GET a food pict (/api/food/:id) ==========
// describe("Get a food pict (/api/food/:id)", () => {
//     const mockDbOne = jest.fn()
//     mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
//     db.one = mockDbOne

//     it("Check the statuscode (success)", async () => {
//         await request(app).get("/api/food/1")
//         .expect(200);
//     });

//     it("Check the rendering data (success)", async () => {
//         await request(app).get("/api/food/1")
//         .expect((response) => {
//             expect(response.res.text).toContain("Chocolate Donuts")
//         })
//     });

//     it("Check the statuscode (failure)", async () => {
//         db.one.mockImplementationOnce(() => Promise.reject());
//         await request(app).get("/api/food/1")
//         .expect(500);
//     });
// });


// // ========== Update likes (/api/food/:id/likes) ==========
// describe("Update the likes table (/api/food/:id/likes)", () => {
//     const mockDbOne = jest.fn()
//     mockDbOne.mockReturnValue([{ID: 1, FoodName: "Chocolate Donuts"}])
//     db.one = mockDbOne

//     const mockFindLikes = jest.fn()
//     const result = [{FoodName: "Chocolate Donuts", TimesLiked:4},
//                     {FoodName: "Ramen", TimesLiked:3},
//                     {FoodName: "Roast Chichen", TimedsLiked: 2},
//                     {FoodName: "Pho", TimedsLiked: 1},
//                     {FoodName: "Hamburger", TimedsLiked: 2}]
//     mockFindLikes.mockReturnValue(result)
//     users.findLikes = mockFindLikes

//     // const mockEditLikes = jest.fn()
//     // mockEditLikes.mockReturnValue()
//     // users.editLikes = mockEditLikes

//     // const mockAddLikes = jest.fn()
//     // mockAddLikes.mockReturnValue()
//     // users.addLikes = mockAddLikes

//     it("Check the statuscode (success)", async () => {
//         await request(app).get("/api/food/1/likes")
//         .expect(200);
//     });

//     it("Check the rendering data (success)", async () => {
//         await request(app).get("/api/food/1/likes")
//         .expect((response) => {
//             expect(response.res.text).toContain("Chocolate Donuts")
//         })
//     });

//     it("Check the statuscode (failure)", async () => {
//         db.one.mockImplementationOnce(() => Promise.reject());
//         await request(app).get("/api/food/1")
//         .expect(500);
//     });
// });

