// const app = require("../index");
// const db = require("../database/index");
// const request = require("supertest");


// // ========== GET a list of likes (/api/user/:id) ==========
// describe("GET a list of likes (/api/user/:id)", () => {
//     const mockDbUser = jest.fn();
//     const result = [{userId: 1, foodId: 1, FoodName: "Chocolate Donuts", TimesLiked:4},
//                     {userId: 1, foodId: 2, FoodName: "Ramen", TimesLiked:3},
//                     {userId: 1, foodId: 3, FoodName: "Roast Chichen", TimedsLiked: 2},
//                     {userId: 1, foodId: 4, FoodName: "Pho", TimedsLiked: 1},
//                     {userId: 1, foodId: 5, FoodName: "Hamburger", TimedsLiked: 2}]
//     mockDbUser.mockReturnValue(result)
//     db.user = mockDbUser

//     it("Check the statuscode (success)", async () => {
//         await request(app).get("/api/user/1")
//         .expect(200);
//     });
    
//     it("Check the statuscode (failure)", async () => {
//         db.all.mockImplementationOnce(() => Promise.reject());
//         await request(app).get("/api/user/100")
//         .expect(404);
//       });

//     it("Check the length of the data", async () => {
//         await request(app).get("/api/user/1")
//         .expect((response) => {
//             expect(response.body.length).toEqual(5);
//         });
//     });
    
// });