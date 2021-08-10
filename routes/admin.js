const express = require("express");
const router = express.Router();
const {adminLogin} = require("../controllers/admin-login");
const { check } = require('express-validator');
const isVerify = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const movieModel = require('../models/Movies');
const userModel = require('../models/Users');
const { addMovie } = require('../controllers/addmovie');

//@route  POST api/admins/login
//desc    Login admin
//access  public
router.post("/login",[
    check("email", "please include a valid email").isEmail(),
    check("password", "password is required").exists(),
],adminLogin)


//@route  POST api/admins/addmovie
//desc    Add a movie
//access private

router.post(
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

module.exports = router;
