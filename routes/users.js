const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {createUser,loginUser} = require("../controllers/users");

//@route  POST api/users/signup
//desc    Register user
//access  public

router.post(
    "/signup",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "please include a valid email").isEmail(),
        check(
            "password",
            "please enter a password with 8 or more characters"
        ).isLength({ min: 8 })
    ],
    createUser
);

//@route  POST api/users/login
//desc    Login user
//access  public

router.post(
    "/login",
    [check("email", "please include a valid email").isEmail(),
    check(
        "password",
        "please enter a password with 8 or more characters"
    ).isLength({ min: 8 })],
    loginUser
);

module.exports = router;