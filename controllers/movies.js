const { validationResult } = require('express-validator');
const movieModel = require('../models/Movies');
const cinemaModel = require('../models/cinema');

const findMovie = async(moviename) => {
    const movie = await movieModel.findOne({ movieName: moviename });
    return movie;
};

const addMovie = async(req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }


    const {
        movieName,
        posterUrl,
        timeDuration,
        genre,
        language,
        cast,
        aboutTheMovie,
        price
    } = req.body;


    let movie = await findMovie(movieName);
    if (movie) {
        return next({
            status: 400,
            errors: "cannot add movie is already exists"
        });
    }
    // console.log();
    movie = new movieModel({
        adminId: req.user.id,
        movieName,
        posterUrl,
        timeDuration,
        genre,
        language,
        aboutTheMovie,
        price,
        cast
    });

    await movie.save();

    res.status(200).json({ msg: "movie has added succefully" });

};


const getAllMovies = async(req, res, next) => {
    const movies = await movieModel.find();
    res.status(200).json(
        movies
    );
};


const searchMovie = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }

    const { movieName } = req.body;

    const searchedMovie = await movieModel.findOne({ movieName: movieName });
    if (!searchedMovie) {
        return next({
            status: 404,
            errors: "movie not found"
        });
    }
    const searchCinema = await cinemaModel.find({
        "Movies.movieId": searchedMovie._id
    });


    const currentDate = new Date().toISOString().slice(0, 10);

    for (let n_cinema = 0; n_cinema < searchCinema.length; n_cinema++) {
        for (let n_movies = 0; n_movies < searchCinema[n_cinema].Movies.length; n_movies++) {
            const movies_date = searchCinema[n_cinema].Movies[n_movies].startDate.toISOString().slice(0, 10);
            if (currentDate <= movies_date) {
                searchedMovie.releaseDetails.push({
                    cinemaName: searchCinema[n_cinema].cinemaName,
                    locationOfCinema: searchCinema[n_cinema].locationOfCinema,
                    from: searchCinema[n_cinema].Movies[n_movies].from,
                    to: searchCinema[n_cinema].Movies[n_movies].to,
                    startDate: searchCinema[n_cinema].Movies[n_movies].startDate.toISOString().slice(0, 10),
                    endDate: searchCinema[n_cinema].Movies[n_movies].endDate.toISOString().slice(0, 10)
                });
            }
        }

    }

    res.status(200).json({
        searchedMovie
    });

};
module.exports = { addMovie, getAllMovies, searchMovie };