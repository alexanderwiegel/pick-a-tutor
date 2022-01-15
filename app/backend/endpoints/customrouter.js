const express = require("express");
const router = express.Router();

const login = require("./login");
const reviews = require("./reviews");
const tutors = require("./tutors");
const users = require("./users");
const courses = require("./courses");
const tutorCourses = require("./tutorcourses");

const authadmin = require("../auth/checkauth_admin");
const authstudent = require("../auth/checkauth_student");
const authtutor = require("../auth/checkauth_tutor");
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

//*******Tutor Courses Routes*******
router.get("/all_courses", tutorCourses.getAllCourses);
router.get("/tutor_courses", tutorCourses.getTutorCourses);
router.post("/tutor_course",authtutor, tutorCourses.postTutorCourse);
router.patch("/tutor_course/:id",authtutor,tutorCourses.updateTutorCourse);
router.delete("/tutor_course/:id",authtutor,tutorCourses.deleteTutorCourse);

//*******Admin Routes*******

//*******Tutor Routes*******
router.get("/tutors", tutors.getAllTutors);
router.post("/tutors", tutors.createTutor);
router.patch("/tutors/:email", authgeneral, users.updateuser);
router.delete("/tutors/:email", authgeneral, users.deleteuser);

//*******Review Routes*******
router.post("/reviews", authstudent, reviews.addReview);
router.patch("/reviews/:id", authadmin, reviews.approvereview);

module.exports = router;
