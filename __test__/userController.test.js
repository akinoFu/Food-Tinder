// const userController = require("../controllers/userController");
// const userModel = require("../database/userModel").userModel


// describe("Test userController.getUserByEmailIdAndPassword", () => {
//     const mockModelFindOne = jest.fn();
//     const result = {id: 1, fullname: 'test', email:'test@my.bcit.ca', password:'Group7!'}

//     mockModelFindOne.mockReturnValue(result)
//     userModel.findOne = mockModelFindOne

//     it("success", async () => {
//         const user = await userController.getUserByEmailIdAndPassword('test@my.bcit.ca','Group7!')
//         expect(user).toEqual(result)
//     });
    
//     it("failure", async () => {
//         userModel.findOne.mockImplementationOnce(() => null);
//         const user = await userController.getUserByEmailIdAndPassword('noEmail@my.bcit.ca','Group7!')
//         expect(user).toEqual(null)
//       });
// });

// describe("Test userController.getUserById", () => {
//     const mockModelFindById = jest.fn();
//     const result = {id: 1, fullname: 'test', email:'test@my.bcit.ca', password:'Group7!'}

//     mockModelFindById.mockReturnValue(result)
//     userModel.findById = mockModelFindById

//     it("success", async () => {
//         const user = await userController.getUserById('1')
//         expect(user).toEqual(result)
//     });
    
//     it("failure", async () => {
//         userModel.findById.mockImplementationOnce(() => null);
//         const user = await userController.getUserById('2')
//         expect(user).toEqual(null)
//       });
// });

