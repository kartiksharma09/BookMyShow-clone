const { cinema } = require("../../../controllers/cinema");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const addCinemaTests = () =>
  describe("Test suite for cinema function of cinema file in controller", () => {
    const mockRequest = {
      body: {
        "cinemaName":"dlf saket",
        "locationOfCinema":"Delhi ncr",
        "seats":"30"
    }
    ,
      user: { id: "60e29e6e4372bf3e1f81d187" },
    };

    it("It should add the cinema in the database, with status 200", async () => {
      const res = mockResponse();

      let req = { ...mockRequest };
      const next = jest.fn()

      await cinema(req, res,next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status).toHaveBeenCalled();
    });

      it("It should be called with status 400 as there is no body passed in reqest", async () => {
        const res = mockResponse();
        const req = {
          "express-validator#contexts": [{ msg: "cinema name is required" }],
        };

        const next = jest.fn()

        await cinema(req, res, next);

      expect(next.mock.calls[0][0].status).toBe(400)
      });

  });

module.exports = { addCinemaTests };
