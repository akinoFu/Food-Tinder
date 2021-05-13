const db = require("../database/index");
const userdb = require("../database/userModel")

describe("Test db.all - return all food", () => {
    it("success", async () => {
        const result = await db.all();
        expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                                {ID: 2, FoodName: "Ramen"},
                                {ID: 3, FoodName: "Roast Chichen"},
                                {ID: 4, FoodName: "Pho"},
                                {ID: 5, FoodName: "Hamburger"}])
    });
});

describe("Return a food with an ID", () => {
    it("ID = 1 (exist)", async () => {
        const result = await db.one(1);
        expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"}])
    });
    
    it("ID = 500 (no exist)", async () => {
        const result = await db.one(500);
        expect(result).toEqual([])
    });
});

describe("Test db.user - return all likes list", () => {
    it("success", async () => {
        const result = await db.user();
        expect(result).toEqual([{userId: 1, foodId: 1, FoodName: "Chocolate Donuts", TimesLiked:4},
                                {userId: 1, foodId: 2, FoodName: "Ramen", TimesLiked:3},
                                {userId: 1, foodId: 3, FoodName: "Roast Chichen", TimedsLiked: 2},
                                {userId: 1, foodId: 4, FoodName: "Pho", TimedsLiked: 1},
                                {userId: 1, foodId: 5, FoodName: "Hamburger", TimedsLiked: 2}])
    });
});

describe("Test userdb.findOne - return info by user email", () => {
    it("success", async () => {
        const result = await userdb.findOne('ayamamoto7@my.bcit.ca');
        expect(result).toEqual([{id: 1, fullname: 'Akino', email:'ayamamoto7@my.bcit.ca', password:'Group7!'}])
    });
});

describe("Test userdb.findById - return info by user id", () => {
    it("success", async () => {
        const result = await userdb.findById(1);
        expect(result).toEqual([{id: 1, fullname: 'Akino', email:'ayamamoto7@my.bcit.ca', password:'Group7!'}])
    });
});
