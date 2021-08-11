const {connect,close,clear} = require('../../../config/testDb')
const User = require("../../../models/Users");

const {createUserTests, loginUserTests} = require('./users')
const { adminLoginTests } = require("./admin-login")


beforeAll(async () => await connect())
afterAll(async () => await close());
// afterAll(async () => await clear())


describe("Test suite for full backend",()=>{
    createUserTests()

    loginUserTests()

    adminLoginTests()
})
