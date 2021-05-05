const app = require("./index");
const request = require("supertest");
const { resolve } = require("path");

beforeAll((done) => {
    done();
});

afterAll(async (done) => {
    // await prisma.user.deleteMany();
    // await prisma.$discount();
    // app.close();
    done();
});


// ========== GET a list of food (/api/food/) ==========
it("return all food", async () => {
    await request(app).get("/api/food")
    .expect((response) => {
        expect(response.body.length).toEqual(100);
    });
});

it("return all food", async () => {
    await request(app).get("/api/food")
    .expect((response) => {
        expect(response.body[0].ID).toEqual(1);
        expect(response.body[0].FoodName).toEqual("Ricotta Poridge");
    });
});


// ========== GET a food (/api/food/:id) ==========
it("return a food pict", async () => {
    await request(app).get("/api/food/1")
    .expect((response) => {
        expect(response.res.text).toContain("Ricotta Poridge")
    })
});


// ========== GET a list of likes (/api/likes) ==========
// it("return a list of likes", async () => {
//     pass
// });

// ========== GET a list of history (/api/hists) ==========
// it("return a list of history", async () => {
//     pass
// });

// ========== POST a food to a list of like (/api/food/:id) ==========
// it("Add a food to a list of like", async () => {
//     pass
// });

// ========== POST a restaurant the user viewd to a list of hitory (/api/hist/rest/:restaurantId) ==========
// it("Add a restaurant the user viewd to a list of hitory", async () => {
//     pass
// });

