const router = require('express').Router();
const { check } = require('express-validator');
const isVerify = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const movieModel = require('../models/Movies');
const userModel = require('../models/Users');
const { addMovie } = require('../controllers/addmovie');
const { adminLogin } = require('../controllers/admin-login');

//@route  POST api/admins/login
//desc    Login admin
//access  public

router.post(
    '/admin/login', [
        check("email", "please include a valid email").isEmail(),
        check(
            "password",
            "please enter a password with 8 or more characters"
        ).isLength({ min: 8 })
], adminLogin);

//@route  POST api/admins/addmovie
//desc    Add a movie
//access private

router.post(
    '/movies/addmovie', [
        isVerify,
        isAdmin,
        check('movieName', 'movie name is required').not().isEmpty(),
        check('posterUrl', 'posterUrl is required').not().isEmpty(),
        check('timeDuration', 'timeDuration is required').not().isEmpty(),
        check('genre', 'genre is required').not().isEmpty(),
        check('language', 'language is required').not().isEmpty(),
        check('cast', 'cast is required').not().isEmpty(),
        check('aboutTheMovie', 'aboutTheMovie is required').not().isEmpty(),
        check('price', 'price is required').not().isEmpty()
], addMovie);

module.exports = router;
