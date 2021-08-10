const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const cinema=require('../controllers/cinema')
const {adminLogin}=require("../controllers/admin-login")


router.post("/admin/Adminlogin",[
    check("email", "please include a valid email").isEmail(),
    check("password", "password is required").exists(),
],adminLogin)

module.exports = router;