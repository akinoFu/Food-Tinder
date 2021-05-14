const db = require("../database/index");
const userdb = require("../database/userModel").userModel
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    passport: '',
    database: process.env.NODE_ENV == "test"? 'food_test': "food",
    port: '3306',
    connectionLimit: 10
});

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

// unit test for like functions

describe("Test userdb.findLikes - ", () => {
    it("success", async () => {
        const result = await userdb.findLikes(1);
        expect(result).toEqual([{"foodName": "Chocolate Donuts", "timesLiked":3}, 
                                {"foodName": "Ramen", "timesLiked": 2}, 
                                {"foodName": "Roast Chichen", "timesLiked": 3},
                                {"foodName": "Pho", "timesLiked": 5}, 
                                {"foodName": "Hamburger", "timesLiked": 1}])
    });
});


describe("Test userdb.editLikes - ", () => {
    it("success", async () => {
        const result = await userdb.editLikes(3, 1, 1);
        expect(result.affectedRows).toEqual(1)
    });

    it("fail", async () => {
        const result = await userdb.editLikes(3, 65, 7);
        expect(result.affectedRows).toEqual(0)
    });
    
});

describe("Test userdb.addLikes - ", () => {
    it("success", async () => {
        const result = await userdb.addLikes(5, 5, 'Hamburger');
        expect(result.affectedRows).toEqual(1)
        pool.query(`DELETE FROM likes WHERE userID = 5 and foodID = 5`)
    });
});
