const express = require("express");
const router = express.Router();

const login = require("./login");
const reviews = require("./reviews");
const tutors = require("./tutors");
const users = require("./users");

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

//*******Tutor Routes*******
router.get("/tutors", tutors.getAllTutors);
router.post("/tutors", tutors.createTutor);
router.patch("/tutors/:email", authgeneral, users.updateuser);
router.delete("/tutors/:email", authgeneral, users.deleteuser);

//*******Review Routes*******
router.patch("/reviews/:id", authadmin, reviews.approvereview);

module.exports = router;
