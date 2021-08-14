const { addMovie, searchMovie } = require("../../../controllers/movies");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const addMovieTests = () =>
  describe("Test suite for addMovie function in addmovie file in controller", () => {
    const mockRequest = {
      body: {
        movieName: "fast and furious 9",
        posterUrl:
          "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fast_and_furious_nine_ver12_480x.progressive.jpg?v=1619716827",
        timeDuration: "01:53",
        genre: "thriller",
        language: "english",
        cast: [
          {
            actor: "Vin Diesel",
            character: "Dominic Toretto",
            characterImg:
              "https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_UY317_CR7,0,214,317_AL__QL50.jpg",
          },
          {
            actor: "Michelle Rodriguez",
            character: "Letty",
            characterImg:
              "https://m.media-amazon.com/images/M/MV5BMTkwODIzMzYyMl5BMl5BanBnXkFtZTYwNzAyNjAz._V1_UX214_CR0,0,214,317_AL__QL50.jpg",
          },
          {
            actor: "Jordana Brewster",
            character: "Mia",
            characterImg:
              "https://m.media-amazon.com/images/M/MV5BMTc1OTMwMzM3NF5BMl5BanBnXkFtZTgwMTM5MzIyODE@._V1_UX214_CR0,0,214,317_AL__QL50.jpg",
          },
          {
            actor: "John Cena",
            character: "Jakob",
            characterImg:
              "https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_UX214_CR0,0,214,317_AL__QL50.jpg",
          },
        ],
        aboutTheMovie:
          "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother",
        price: 20,
      },
      user: { id: "60e29e6e4372bf3e1f81d187" },
    };

    it("It should add the movie in the database, with 200 status", async () => {
      const res = mockResponse();

      let req = { ...mockRequest };
      const next = jest.fn()

      await addMovie(req, res,next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status).toHaveBeenCalled();
    });

    it("It should add the movie in the database, with 200 status", async () => {
        const res = mockResponse();
  
        let req = { ...mockRequest };
        const next = jest.fn()
  
        await addMovie(req, res,next);
      expect(next.mock.calls[0][0]).toEqual({status: 400,errors: "cannot add movie is already exists"})
      });

      it("It should be called with status 400 as there is no body passed in reqest", async () => {
        const res = mockResponse();
        const req = {
          "express-validator#contexts": [{ msg: "movie name is required" }],
        };

        const next = jest.fn()

        await addMovie(req, res, next);

      expect(next.mock.calls[0][0].status).toBe(400)
      });
  });

module.exports = { addMovieTests };
