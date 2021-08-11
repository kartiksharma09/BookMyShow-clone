const auth = require('../../../middleware/auth')

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
    

}

describe("Test suite for auth midleware",()=>{

    it('when token not found, shoud call with status 401',async()=>{
        
        let req = {}
        req.header = (input)=>{if(input==='x-auth-token') return ""}

        const res = mockResponse()
    
        await auth(req,res)
        expect(res.status).toHaveBeenCalledWith(401)
        expect(res.json).toHaveBeenCalled()
    })

    it('when token is invalid, shoud call with status 401',async()=>{
        
        let req = {}
        req.header = (input)=>{if(input==='x-auth-token') return "BBBBBBBBBBBBBBBBBBB"}

        const res = mockResponse()
    
        await auth(req,res)
        expect(res.status).toHaveBeenCalledWith(401)
        expect(res.json).toHaveBeenCalledWith({ msg: "your Token is not valid" })
    })


    it('when token is valid, shoud call with status 200',async()=>{
        const next = jest.fn()
        let req = {}
        req.header = (input)=>{if(input==='x-auth-token') return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjExMmQ5MjAyZWIyYmY3MjNjYTk2ZDNhIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE2Mjg2MjUxODQsImV4cCI6My42ZSs3NH0.uYYh0-9qZNqR__pjAtiHwAyysUgpbvzGl_xcqD0mDaw"}
        req.user = (input)=>{ return req }

        const res = mockResponse()
    
        await auth(req,res,next)
        expect(next).toHaveBeenCalled()
    })

});
