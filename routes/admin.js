const Router = require('express').Router();
const { check } = require('express-validator');
const isVerify = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const movieModel = require('../models/Movies');
const userModel = require('../models/Users');
const cinemaModel = require('../models/Cinema');
const { addMovie } = require('../controllers/addmovie');


//@route  POST api/admins/addmovie
//desc    Add a movie
//access private

Router.post(
    '/movies/addmovie', [
        isVerify,
        isAdmin,
        check('movieName', 'movie name is required').not().isEmpty(),
        check('posterUrl', 'posterUrl is required').not().isEmpty(),
        check('timeDuration', 'movie name is required').not().isEmpty(),
        check('genre', 'movie name is required').not().isEmpty(),
        check('language', 'movie name is required').not().isEmpty(),
        check('cast', 'movie name is required').not().isEmpty(),
        check('aboutTheMovie', 'movie name is required').not().isEmpty(),
        check('price', 'movie name is required').not().isEmpty()
    ], addMovie);

module.exports = Router;