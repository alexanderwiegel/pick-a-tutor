const express = require("express");
const router = express.Router();
const users = require("./users");
const login = require("./login");
const authadmin = require("../auth/checkauth_admin");
const authstudent = require("../auth/checkauth_student");
const authgeneral = require("../auth/checkauth_general");

//*******Users Routes*******
router.get("/users", users.getallusers);
router.post("/users", users.createuser);
router.patch("/users/:email", authgeneral, users.updateuser);
router.delete("/users/:email", authgeneral, users.deleteuser);

//*******Login Routes*******
router.post("/login", login.loginuser);

//*******Courses Routes*******

//*******Tutor Courses Routes*******

//*******Admin Routes*******

module.exports = router;
