const db = require("./database/index");

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



