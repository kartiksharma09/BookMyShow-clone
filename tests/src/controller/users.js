// const request = require('supertest');
// const app = require('../server')
const { createUser, loginUser } = require('../../../controllers/users')


const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
    

}

const createUserTests = () => describe("Test suite createUser in users file in controller",()=>{
    console.log("1")

    it('it should create a new user',async()=>{
        let req = {
            body:{
                name:"sonu",
                email:"sonu19@navgurukul.org",
                password:"111111111",
                isAdmin:true
            }
        }
        const res = mockResponse()
    
        await createUser(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalled()
    })

    it('it should give error, user already exists',async()=>{
        let req = {
            body:{
                name:"sonu",
                email:"sonu19@navgurukul.org",
                password:"111111111",
                isAdmin:true
            }
        }
        const res = mockResponse()
    
        await createUser(req,res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalled()
    })

    it("It should be called with status 400 as there is no body passed in reqest", async () => {
        const res = mockResponse();
        const req = {
          "express-validator#contexts": [{"email": "please include a valid email" }],
        };

        await createUser(req, res);
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalled()
      });

      it('it should give server error, finding difficulty in adding data as there is no email',async()=>{
        let req = {
            body:{
                name:"sonu",
                email:"",
                password:"111111111",
                isAdmin:true
            }
        }
        const res = mockResponse()
    
        await createUser(req,res)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalled()
    })


})


const loginUserTests = () => describe("Test suite loginUser in users file in controller",()=>{
    console.log("2")

    it('it should test login function with status code 200',async()=>{
        let req = {
            body:{
                email:"sonu19@navgurukul.org",
                password:"111111111",
            }
        }
        const res = mockResponse()
    
        await loginUser(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalled()
    })

})


module.exports = { createUserTests, loginUserTests }
