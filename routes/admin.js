const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const cinema=require('../controllers/cinema')
const {adminLogin}=require("../controllers/admin-login")
const auth=require('../middleware/auth')
const isAdmin=require('../middleware/isAdmin')


router.post("/admin/Adminlogin",[
    check("email", "please include a valid email").isEmail(),
    check("password", "password is required").exists(),
],adminLogin)



router.post("/admin/addCinema",[auth, isAdmin,
    [check("cinemaName","cinema hall name is required")   .not()
    .isEmpty(),
    check("locationOdCinema","cinema location is required")   .not()
    .isEmpty(),
    check("seats","seats is required").not()
    .isEmpty(),,
    check("Movies","movies is required")   .not()
    .isEmpty()]
    ],cinema)

module.exports = router;