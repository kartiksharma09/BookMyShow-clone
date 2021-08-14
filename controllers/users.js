const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/Users");

const getSignedJwtToken = function(
    payload,
    secret = config.get("jwtsecret"),
    expiresIn = 360000
) {
    return jwt.sign(payload, secret, { expiresIn });
};

const createUser = async(req, res, next) => {
    // console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }

    const { name, email, password, isAdmin } = req.body;

    console.log(req.body);
    // console.log(req.body);

    let user = await User.findOne({ email });

    if (user) {
        return next({
            status: 400,
            errors: "User Already Exists"
        });
    }

    user = new User({
        name,
        email,
        password,
        isAdmin
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();
    // console.log(user);

    const payload = {
        user: {
            id: user.id,
            isAdmin: user.isAdmin,
        },
    };

    const token = getSignedJwtToken(payload);
    return res.status(200).json({ token });
};


const loginUser = async(req, res, next) => {
    console.log(res.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    // console.log(user)
    if (!user) {
        return next({
            status: 400,
            errors: "Invalid Credentials"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return next({
            status: 400,
            errors: "Invalid Credentials"
        });
    }

    const payload = {
        user: {
            id: user.id,
            isAdmin: user.isAdmin,
        },
    };
    const token = getSignedJwtToken(payload);
    res.status(200).json({ token });
};

module.exports = { createUser, loginUser };