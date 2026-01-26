const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.cookies?.token;

    if(!token) {
        return res.status(401).json({message: " Not Authendicated"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"});
    }
}