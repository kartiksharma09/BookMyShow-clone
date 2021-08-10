const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {adminLogin} = require("../controllers/admin-login");

//@route  POST api/admins/login
//desc    Login admin
//access  public
router.post("/login",[
    check("email", "please include a valid email").isEmail(),
    check("password", "password is required").exists(),
],adminLogin)


module.exports = router;
