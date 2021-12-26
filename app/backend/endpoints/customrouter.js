const express = require("express");
const router = express.Router();
const login = require("./login");
const tutors = require("./tutors");
const users = require("./users");
const courses = require("./courses");
//const tutorCourses = require("./tutorcourses");
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
router.get("/courses",courses.getAllCourses);
router.post("/course",authadmin,courses.postApiCourse);
router.patch("/course/:id",authadmin,courses.updateCourse);
router.delete("/course/:id",authadmin,courses.courseDelete);
router.post("/course/:id",authadmin,courses.courseCreate);
//*******Tutor Courses Routes*******
//router.get("get_tutor_courses", tutorCourses.getTutorCourses);
//*******Admin Routes*******

//*******Tutor Routes*******
router.get("/tutors", tutors.getAllTutors);
router.post("/tutors", tutors.createTutor);
router.patch("/tutors/:email", authgeneral, users.updateuser);
router.delete("/tutors/:email", authgeneral, users.deleteuser);

module.exports = router;
