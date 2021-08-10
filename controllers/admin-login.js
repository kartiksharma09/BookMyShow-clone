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

const adminLogin = async(req, res, next) => {
    const errors = validationResult(req);
    if (errors) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        return next({
            status: 400,
            errors: "Invalid Credentials"
        });
    } else if (user.isAdmin !== true) {

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

    return res.status(200).json({ token });
};

module.exports = { adminLogin };