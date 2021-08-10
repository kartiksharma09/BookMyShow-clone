const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/Users");

const getSignedJwtToken = function (
    payload,
    secret = config.get("jwtsecret"),
    expiresIn = 360000
) {
    return jwt.sign(payload, secret, { expiresIn });
};

const createUser = async (req, res) => {
    // console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        console.log("no problem")
    }

    const { name, email, password, isAdmin } = req.body;
    // console.log(req.body);
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "User Already Exists" }] });
        }

        user = new User({
            name,
            email,
            password,
            isAdmin,
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin,
            },
        };
        const token = getSignedJwtToken(payload);
        res.status(200).json({ token });
    } catch (err) {
        console.log("yes,................")
        res.status(500).json({ msg: "server error" });
    }
};

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        // console.log(user)
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin,
            },
        };

        const token = getSignedJwtToken(payload);
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "server error" });
    }
};

module.exports = { createUser, loginUser };