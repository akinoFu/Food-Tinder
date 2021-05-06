const db = require("./database/index");

it("return all food", async () => {
    const result = await db.all();
    expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                            {ID: 2, FoodName: "Ramen"},
                            {ID: 3, FoodName: "Roast Chichen"},
                            {ID: 4, FoodName: "Pho"},
                            {ID: 5, FoodName: "Hamburger"}])
});

it("return a food with an ID", async () => {
    const result = await db.one(1);
    expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"}])
});

it("return a food with an ID (no data)", async () => {
    const result = await db.one(500);
    expect(result).toEqual([])
});


