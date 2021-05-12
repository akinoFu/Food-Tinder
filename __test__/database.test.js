const db = require("../database/index");

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

