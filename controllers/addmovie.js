const { validationResult } = require('express-validator');
const movieModel = require('../models/Movies');

const findMovie = async(moviename) => {
    const movie = await movieModel.findOne({ movieName: moviename });
    return movie;
};



const addMovie = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
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


    try {

        let movie = await findMovie(movieName);

        if (!movie) {
            return res.status(400).json({ msg: "cannot add movie is already exists" })
        }




    } catch (err) {
        res.status(500).json({ msg: "server error" });
    }

};