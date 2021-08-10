const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const auth = require("../middlewares/auth");
const { bookTickets } = require('../controllers/tickets');


//@route  GET api/auth
//desc    Test Route
//access  public

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.post("/: movieId /: cinemaId", [auth, [
    check("Seats", "seats is required").not().isEmpty(),
    check("watchers", "watchers is Required").not().isEmpty(),
    check("bookingDate", "bookingDate is required").not().isEmpty()
]],
    bookTickets
)

module.exports = router;