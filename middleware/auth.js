const jwt = require('jsonwebtoken');

const config = require('config');

module.exports = (req, res, next) => {
    const Token = req.header('x-auth-token');

    // check if token is not there
    console.log(!Token)
    if (!Token) {
        return res.status(401).json({ msg: "Token not found " });
    }

    // verifying the token

    try {

        const decoded = jwt.verify(Token, config.get("jwtsecret"));
        req.user = decoded.user;

        next();
    } catch (err) {
        res.status(401).json({ msg: "your Token is not valid" });
    }

};