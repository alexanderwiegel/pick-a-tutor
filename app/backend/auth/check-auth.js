const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    var token;

    try {
        token = req.headers.authorization.split(" ")[2]; // Bearer Token
    } catch (error) {
        console.log("Authentication Failed");
        return next(error);
    }

    try {
        if (!token) {
            throw new Error("No Token sent With Request");
        }
        const decodedToken = jwt.verify(token, "privatekey");
        // req.userData = { userID: decodedToken.userID };
        // console.log(decodedToken.isStudent);
        console.log("Toaken is Valid");
        next();
    } catch (error) {
        console.log("Invalid Token");
        return next(error);
    }
};
