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
    res.status(200).json({
        msg: movies
    });
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

    const searchedMovie = await movieModel.find({ movieName: movieName });

};
module.exports = { addMovie, getAllMovies, searchMovie };