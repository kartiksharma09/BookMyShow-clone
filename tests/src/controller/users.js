// const request = require("supertest");
const express = require("express");
// const app = express();
const { createUser, loginUser } = require("../../../controllers/users");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const createUserTests = () =>
  describe("Test suite createUser in users file in controller", () => {
    console.log("1");

    it("it should create a new user", async () => {
      let req = {
        body: {
          name: "sonu",
          email: "sonu19@navgurukul.org",
          password: "111111111",
          isAdmin: true,
        },
      };
      const res = mockResponse();

      await createUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });

    it("it should create a new user", async () => {
      let req = {
        body: {
          name: "Kartik",
          email: "kartik19@navgurukul.org",
          password: "11111111",
          isAdmin: false,
        },
      };
      const res = mockResponse();

      await createUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });

    it("it should give error, user already exists", async () => {
      let req = {
        body: {
          name: "sonu",
          email: "sonu19@navgurukul.org",
          password: "111111111",
          isAdmin: true,
        },
      };

      const next = jest.fn()
      const res = mockResponse();

      await createUser(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "User Already Exists"})
    });

    it("It should be called with status 400 as there is no body passed in reqest", async () => {
      const res = mockResponse();
      const req = {
        "express-validator#contexts": [
          { email: "please include a valid email" },
        ],
      };
      const next = jest.fn()

      await createUser(req, res, next);
      expect(next.mock.calls[0][0].status).toBe(400)
    });
  });


const loginUserTests = () =>
  describe("Test suite loginUser in users file in controller", () => {
    console.log("2");

    it("it should test login function with status code 200", async () => {
      let req = {
        body: {
          email: "sonu19@navgurukul.org",
          password: "111111111",
        },
      };
      const res = mockResponse();
      

      await loginUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
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

      await loginUser(req, res,next);
      expect(next.mock.calls[0][0].status).toBe(400)
      
    });

    it("It should be called with status 400 as there is no body passed in reqest", async () => {
      const res = mockResponse();
      const req = {
        "express-validator#contexts": [
          { email: "please include a valid email" },
        ],
      };

      const next = jest.fn()

      await createUser(req, res, next);
      expect(next.mock.calls[0][0].status).toBe(400)
      
    });
  });

module.exports = { createUserTests, loginUserTests };
