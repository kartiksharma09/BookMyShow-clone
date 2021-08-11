const Tickets = require("../models/tickets");
const { validatioResult } = require("express-validator")

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    } else {
        return false
    }
};

// const Tickets = async(req, res) => {

// };