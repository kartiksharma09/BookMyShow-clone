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

const adminLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    console.log(errors)

      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      else if(user.isAdmin !==true){
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      const token = getSignedJwtToken(payload);
  
      return res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "server error" });
    }
  };

  module.exports = {adminLogin};