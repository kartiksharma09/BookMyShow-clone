const { adminLogin } = require("../../../controllers/admin-login");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const adminLoginTests = () =>
  describe("Test suite adminLogin in admin-login file in controller", () => {
    console.log("2");

    it("it should test adminLogin function with status code 200, as it is an admin", async () => {
      let req = {
        body: {
          email: "sonu19@navgurukul.org",
          password: "111111111",
        },
      };
      const res = mockResponse();

      await adminLogin(req,res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });

    it("test should return status code 400, if the user is not an admin", async () => {
      let req = {
        body: {
          email: "kartik19@navgurukul.org",
          password: "111111111",
        },
      };
      const res = mockResponse();
      const next = jest.fn()

      await adminLogin(req, res,next);
      expect(next.mock.calls[0][0].status).toBe(400)

    });

    it("test should return status code 400, if the password is not valid", async () => {
        let req = {
          body: {
            email: "kartik19@navgurukul.org",
            password: "111111511",
          },
        };
        const res = mockResponse();
        const next = jest.fn()
  
        await adminLogin(req, res, next);
        expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Invalid Credentials"})
      });

    it("test, if the user is not exits with code 400", async () => {
      let req = {
        body: {
          email: "hello@navgurukul.org",
          password: "111111111",
        },
      };
      const res = mockResponse();
      const next = jest.fn()

      await adminLogin(req, res, next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Invalid Credentials"})
    });

    it("It should be called with status 400 as there is no body passed in reqest", async () => {
      const res = mockResponse();
      const req = {
        "express-validator#contexts": [
          { email: "please include a valid email" },
        ],
      };
      const next = jest.fn()

      await adminLogin(req, res, next);
      expect(next.mock.calls[0][0].status).toBe(400)
    });

  });

module.exports = { adminLoginTests };
