const express = require("express");
const router = express.Router();
const users = require("./users");
const login = require("./login");
const auth = require("../auth/check-auth");

//*******Users Routes*******
router.get("/users", auth, users.getallusers);
router.post("/users", users.createuser);
router.patch("/users/:email", auth, users.updateuser);
router.delete("/users/:email", auth, users.deleteuser);

//*******Login Routes*******
router.post("/login", login.loginuser);

//*******Courses Routes*******

//*******Tutor Courses Routes*******

//*******Admin Routes*******

module.exports = router;
