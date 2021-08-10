const {connect,close,clear} = require('../../../config/testDb')
const User = require("../../../models/Users");

const {createUserTests, loginUserTests} = require('./users')


beforeAll(async () => await connect())
afterAll(async () => await clear())
afterAll(async () => await close())


describe("Test suite for full backend",()=>{
    createUserTests()

    loginUserTests()
})
