const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createUser, loginUser } = require("../controllers/users");
const { bookTickets } = require('../controllers/tickets');
const isVerify = require('../middleware/auth');
const { cancelTicket, GetTickets } = require('../controllers/tickets');
const { getAllMovies } = require('../controllers/movies');

//@route  POST api/users/signup
//desc    Register user
//access  public

router.post(
    "/signup", [
        check("name", "Name is required").not().isEmpty(),
        check("email", "please include a valid email").isEmail(),
        check("password",
            "please enter a password with 8 or more characters"
        ).isLength({ min: 8 })
    ],
    createUser
);

//@route  POST api/users/login
//desc    Login user
//access  public

router.post(
    "/login", [check("email", "please include a valid email").not().isEmail(),
        check(
            "password",
            "please enter a password with 8 or more characters"
        ).not().isLength({ min: 8 })
    ],
    loginUser
);

//@route  POST api/users/tickets/:cinemaId/:movieId
//desc    Book tickets 
//access  public

router.post("/tickets/:cinemaId/:movieId", isVerify, [
        check("Seats", "seats is required").not().isEmpty(),
        check("watchers", "watchers is Required").not().isEmpty(),
        check("bookingDate", "bookingDate is required").not().isEmpty()
    ],
    bookTickets
)

//@route  DELETE /api/users/tickets/ticketId
//desc    cancel tickets
//access  public

router.delete("/tickets/:ticketId", isVerify, cancelTicket)
router.get("/tickets", isVerify, GetTickets)


//@route  POST /api/users/movies/allmovies
//desc    get all movies
//access public

router
    .get(
        '/movies/allmovies',
        getAllMovies
    );
module.exports = router;