const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const isVerify = require('../middleware/auth');
//@route  GET api/auth
//desc    Test Route
//access  public

router.get("/", isVerify, async (req, res) =>{
    try {
        console.log(req.user.id)
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;