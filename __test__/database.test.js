const foodModel = require("../database/foodModel").foodDatabase
const userModel = require("../database/userModel").userModel
const pool = require("../database/index").pool

/* #######################################
        test for database/index.js
   ####################################### */
describe("Test foodModel.all - return all food", () => {
    it("success", async () => {
        const result = await foodModel.all();
        expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"},
                                {ID: 2, FoodName: "Ramen"},
                                {ID: 3, FoodName: "Roast Chichen"},
                                {ID: 4, FoodName: "Pho"},
                                {ID: 5, FoodName: "Hamburger"}])
    });
});

describe("Return a food with an ID", () => {
    it("ID = 1 (exist)", async () => {
        const result = await foodModel.one(1);
        expect(result).toEqual([{ID: 1, FoodName: "Chocolate Donuts"}])
    });
    
    it("ID = 500 (no exist)", async () => {
        const result = await foodModel.one(500);
        expect(result).toEqual([])
    });
});

/* #######################################
        test for database/userModel.js
   ####################################### */
describe("Test userModel.findOne - return info by user email", () => {
    it("success", async () => {
        const result = await userModel.findOne('ayamamoto7@my.bcit.ca');
        expect(result).toEqual([{id: 1, fullname: 'Akino', email:'ayamamoto7@my.bcit.ca', password:'Group7!'}])
    });
});

describe("Test userModel.findById - return info by user id", () => {
    it("success", async () => {
        const result = await userModel.findById(1);
        expect(result).toEqual([{id: 1, fullname: 'Akino', email:'ayamamoto7@my.bcit.ca', password:'Group7!'}])
    });
});

describe("Test userModel.findLikes - ", () => {
    it("success", async () => {
        const result = await userModel.findLikes(1);
        expect(result).toEqual([{"foodName": "Chocolate Donuts", "timesLiked":3}, 
                                {"foodName": "Ramen", "timesLiked": 2}, 
                                {"foodName": "Roast Chichen", "timesLiked": 3},
                                {"foodName": "Pho", "timesLiked": 5}, 
                                {"foodName": "Hamburger", "timesLiked": 1}])
    });
});

describe("Test userModel.editLikes - ", () => {
    it("success", async () => {
        const result = await userModel.editLikes(3, 1, 1);
        expect(result.affectedRows).toEqual(1)
    });

    it("fail", async () => {
        const result = await userModel.editLikes(3, 65, 7);
        expect(result.affectedRows).toEqual(0)
    });
    
});

describe("Test userModel.addLikes - ", () => {
    it("success", async () => {
        const result = await userModel.addLikes(5, 5, 'Hamburger');
        expect(result.affectedRows).toEqual(1)
        pool.query(`DELETE FROM likes WHERE userID = 5 and foodID = 5`)
    });
});

describe("Test userModel.addNewUser - ", () => {
    it("success", async () => {
        const result = await userModel.addNewUser('test name', 'test@test', 'testpw');
        expect(result.affectedRows).toEqual(1)
        pool.query(`DELETE FROM users WHERE email = "test@test"`)
    });
});
