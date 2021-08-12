const Cinema = require('../models/cinema');
const User = require('../models/Users');
const ObjectId = require('mongoose').Types.ObjectId;
const movieModel = require('../models/Movies');

const findMovie = async(movieName) => {
    const movie = await movieModel.findOne({ movieName: movieName });
    console.log(movie);
    return movie;
};


const findCinema = async(id) => {
    const cinema = await Cinema.findOne({ _id: id });
    return cinema;
};


const { validationResult } = require('express-validator');

const cinema = async(req, res) => {
    console.log(req.body, "djkjd");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(400).json({ msg: "checking" });
    }

    const cinemas = new Cinema(req.body);

    console.log(cinemas);
    try {


        cinemas.adminId = req.user.id;

        await cinemas.save();
        res.status(200).json({ msg: "your cinemaHall is added..." });



    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "server error....." });
    }
};


const assignMovieToCinema = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }
    if (!ObjectId.isValid(req.params.cinemaId)) {
        return next({
            status: 400,
            errors: "Invalid Object Id"
        });
    }



    const { movieName, from, to, startDate, endDate } = req.body;

    const movie = await findMovie(movieName);

    if (!movie) {
        return next({
            status: 400,
            errors: "Movie does not exists"
        });
    }

    let cinema = await findCinema(req.params.cinemaId);

    if (!cinema) {
        return next({
            status: 400,
            errors: "cinema does not exists"
        });
    }


    if (from.length !== to.length) {
        return next({
            status: 400,
            errors: "format of timings should be same"
        });
    }

    const startingTime = from.split(":");
    const endingTime = to.split(":");

    if (startingTime[0] > 24 || startingTime[1] > 59) {
        return next({
            status: 400,
            errors: "Starting time is not valid"
        });
    }

    if (endingTime[0] > 24 || endingTime[1] > 59) {
        return next({
            status: 400,
            errors: "ending time is not valid"
        });
    }

    //getting entered and saved both times in minutes and comparing it


    const startingTimeToMinutes = Number(startingTime[0]) * 60 + Number(startingTime[1]);
    const endingTimeToMinutes = Number(endingTime[0]) * 60 + Number(endingTime[1]);

    const currentDuration = endingTimeToMinutes - startingTimeToMinutes;


    const movieDuration = movie.timeDuration.split(':');
    const movieDurationToMinutes = Number(movieDuration[0]) * 60 + Number(movieDuration[1]);


    if (movieDurationToMinutes + 20 > currentDuration) {
        return next({
            status: 400,
            errors: "Give duration does matches to movie"
        });
    }

    if (cinema.Movies.length) {
        const movieName = cinema.Movies.filter(movies => (movies.endDate.toISOString().slice(0, 10) >= startDate) && (movies.from === from || movies.to === to));
        if (movieName.length) {
            return next({
                status: 400,
                errors: "Movie Slot is already booked"
            });
        }
    }



    cinema.Movies.push({
        movieId: movie.id,
        from: from,
        to: to,
        startDate: startDate,
        endDate: endDate
    });
    await cinema.save();

    res.status(200).json({ msg: "movie has added succefully" });
};

const searchCinema = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }

    const { cinemaName } = req.body;

    const searchedCinema = await Cinema.find({ movieName: cinemaName });

};

module.exports = { cinema,searchCinema, assignMovieToCinema };
