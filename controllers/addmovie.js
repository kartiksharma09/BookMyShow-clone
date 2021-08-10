const { validationResult } = require('express-validator');
const movieModel = require('../models/Movies');

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
    console.log(movie, "movie");
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

module.exports = { addMovie };