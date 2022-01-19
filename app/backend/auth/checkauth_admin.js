const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  var token;

  try {
    token = req.headers.authorization.split(" ")[1]; // Bearer Token
  } catch (error) {
    return next(
      res.json({
        success: false,
        message: "Invalid or No Token- Error while splitting",
        records: 0,
        data: [],
      })
    );
  }

  // console.log("***********************" + token);
  // console.log(jwt.verify(token, "privatekey").isStudent == true);
  try {
    if (token) {
      const decodedToken = jwt.verify(token, "privatekey");
      console.log("Into token");
      // next();
      if (decodedToken.isAdmin == true) {
        next();
      } else {
        json({
          success: false,
          message: "Invalid access-It is student token",
          records: 0,
          data: [],
        });
      }
    } else {
      throw new Error(
        json({
          success: false,
          message: "Invalid Token- Not token found",
          records: 0,
          data: [],
        })
      );
    }
  } catch (error) {
    return next(
      res.json({
        success: false,
        message: "Invalid or No Token or Invalid token type",
        records: 0,
        data: [],
      })
    );
  }
};
