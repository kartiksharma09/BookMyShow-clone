const { cinema, assignMovieToCinema } = require("../../../controllers/cinema");

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
        "_id":"61135c4d9838d415aead85bb",
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

      await cinema(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status).toHaveBeenCalled();
    });

      it("It should be called with status 400 as there is no body passed in reqest", async () => {
        const res = mockResponse();
        const req = {
          "express-validator#contexts": [{ msg: "cinema name is required" }],
        };

        await cinema(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      });

      it("It should be called with status 500 server error as it is failing to insert data in db", async () => {
        const res = mockResponse();
        const req = {
        };

        await cinema(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      });

  });

  const assignMovieToCinemaTests = () =>
  describe("Test suite for assignMovieToCinema function of cinema file in controller", () => {
    const mockRequest = {
      body: {
        "movieName": "fast and furious 9",
        "from": "20:00",
        "to": "22:20",
        "startDate": "2021-08-09",
        "endDate": "2021-08-10"
      }
    ,
      user: { id: "60e29e6e4372bf3e1f81d187" },
      params:{cinemaId:"61135c4d9838d415aead85bb"}
    };


    it("It should assign the movie to cinema, with status 200", async () => {
      const res = mockResponse();

      let req = { ...mockRequest };
      const next = jest.fn()


      await assignMovieToCinema(req, res,next);
      
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status).toHaveBeenCalled();
    });

    it("It should return status 400, as time slot is already booked", async () => {
      const res = mockResponse();

      let req = {...mockRequest};
      const next = jest.fn()
      

      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Movie Slot is already booked"})
    });

    it("It should return status 400, as given time duration is not compatible with movie time", async () => {
      const res = mockResponse();

      let req = {...mockRequest};
      req.body = {
        "movieName": "fast and furious 9",
        "from": "21:00",
        "to": "22:20",
        "startDate": "2021-08-09",
        "endDate": "2021-08-10"
      }
      const next = jest.fn()
      
      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Given movie duration does matches to movie"})
    });


    it("It should return status 400, starting time is not valid", async () => {
      const res = mockResponse();
      const next = jest.fn()

      let req = {...mockRequest};
      req.body.from = "25:00"

      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Starting time is not valid"})
    });

    it("It should return status 400, starting time is not valid", async () => {
      const res = mockResponse();
      const next = jest.fn()

      let req = {...mockRequest};
      req.body.from = "20:00"
      req.body.to = "25:00"

      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "ending time is not valid"})
    });

    it("It should return status 400, as there is no such movie", async () => {
      const res = mockResponse();
      const next = jest.fn()

      let req = {...mockRequest};
      req.body.movieName = "2.O"

      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "Movie does not exists"})
    });

    it("It should return status 400, as there is no Cinema found", async () => {
      const res = mockResponse();
      const next = jest.fn()

      let req = {...mockRequest};
      req.body = {
        "movieName": "fast and furious 9",
        "from": "20:00",
        "to": "22:20",
        "startDate": "2021-08-09",
        "endDate": "2021-08-10"
      } ;
      req.params.cinemaId = "61135c4d9838d415aead85bc";

      await assignMovieToCinema(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "cinema does not exists"})
    });


  });

module.exports = { addCinemaTests, assignMovieToCinemaTests };
