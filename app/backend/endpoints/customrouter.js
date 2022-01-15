const express = require("express");
const router = express.Router();
const login = require("./login");
const tutors = require("./tutors");
const users = require("./users");
const courses = require("./courses");
const tutorCourses = require("./tutorcourses");
//const tutorCourses = require("./tutorcourses");
const authadmin = require("../auth/checkauth_admin");
const authstudent = require("../auth/checkauth_student");
const authtutor = require("../auth/checkauth_tutor");
const authgeneral = require("../auth/checkauth_general");
const userprofilefiles = require("./userprofilefiles");
const studentenrolledcourses = require("./studentenrolledcourses");
const CourseAdditionalInfo = require("./courseadditionalinfo");

//*******Users Routes*******
router.get("/users", users.getallusers);
router.post("/users", users.createuser);
router.patch("/users/:email", authgeneral, users.updateuser);
router.delete("/users/:email", authgeneral, users.deleteuser);

//*******Login Routes*******
router.post("/login", login.loginuser);

//*******Courses Routes*******
router.get("/courses", courses.getAllCourses);
router.post("/course", authadmin, courses.postApiCourse);
router.patch("/course/:id", authadmin, courses.updateCourse);
router.delete("/course/:id", authadmin, courses.courseDelete);

//*******Tutor Courses Routes*******
router.get("/all_courses", tutorCourses.getAllCourses);
router.get("/tutor_courses", tutorCourses.getTutorCourses);
router.post("/tutor_course", authtutor, tutorCourses.postTutorCourse);
router.patch("/tutor_course/:id", authtutor, tutorCourses.updateTutorCourse);
router.delete("/tutor_course/:id", authtutor, tutorCourses.deleteTutorCourse);

//*******Admin Routes*******

//*******Tutor Routes*******
router.get("/tutors", tutors.getAllTutors);
router.post("/tutors", tutors.createTutor);
router.patch("/tutors/:email", authgeneral, users.updateuser);
router.delete("/tutors/:email", authgeneral, users.deleteuser);

//*******User Profile Files Routes*******
router.get(
    "/getallprofilefilesbyuserid/:userId",
    authgeneral,
    userprofilefiles.getallbyuserid
);
router.get(
    "/getallprofilefilesbyfileid/:fileId",
    authgeneral,
    userprofilefiles.getallbyfileid
);
router.get(
    "/getallprofilefilesbystatus/:approvalStatus",
    authgeneral,
    userprofilefiles.getallbystatus
);
router.get(
    "/getallprofilefilesbyuserstatus/:userId/:approvalStatus",
    authgeneral,
    userprofilefiles.getallbyuserfilestatus
);
router.post(
    "/createprofilefile",
    authgeneral,
    userprofilefiles.createuserprofilefile
);
router.patch(
    "/updateprofilefile/:fileId",
    authgeneral,
    userprofilefiles.updateuserprofilefile
);
router.delete(
    "/deleteuserprofilefile/:fileId",
    authgeneral,
    userprofilefiles.deleteuserprofilefile
);

//*******StudentEnrollerCourses Routes*******
router.get(
    "/enrolledstudentcourses",
    authgeneral,
    studentenrolledcourses.getAllStudentCourses
);
router.post(
    "/enrollstudent",
    authgeneral,
    studentenrolledcourses.createStudentCourse
);

router.patch(
    "/updateenrolledcoursestatus",
    authgeneral,
    studentenrolledcourses.updateStudentCourse
);
router.delete(
    "/deletestudentcourse",
    authgeneral,
    studentenrolledcourses.deleteStudentCourse
);

module.exports = router;

//*******Course Additional Files Routes*******
router.get(
    "/getallbytutorcourse/:tutorId/:courseId",
    authgeneral,
    CourseAdditionalInfo.getallbyTutorCourse
);
router.get(
    "/getallcoursefilesbyfileid/:fileId",
    authgeneral,
    CourseAdditionalInfo.getallbyfileid
);
router.get(
    "/getallcoursefilesbystatus/:approvalStatus",
    authgeneral,
    CourseAdditionalInfo.getallbystatus
);
router.get(
    "/getallcoursefilesbytutor",
    authgeneral,
    CourseAdditionalInfo.getallbytutor
);
router.post(
    "/createcoursefile",
    authgeneral,
    CourseAdditionalInfo.createusercoursefile
);
router.patch(
    "/updatecoursefile/:fileId",
    authgeneral,
    CourseAdditionalInfo.updatcoursefile
);
router.delete(
    "/deletecoursefile/:fileId",
    authgeneral,
    CourseAdditionalInfo.deletecoursefile
);
