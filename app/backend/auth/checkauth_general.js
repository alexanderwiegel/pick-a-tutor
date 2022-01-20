const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  var token;

  const testtokenrecieved = req.headers.authorization;
  console.log(
    "**************************testdecodedToken:" + testtokenrecieved
  );
  try {
    // token = req.headers.authorization.split(" ")[2]; // Bearer Token
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

      next();
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
