const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const Review = require("../db/model/Review");
const StudentEnrolledCourses = require("../db/model/StudentEnrolledCourses");
const { Sequelize } = require("sequelize");
const db = require("../db/db");
const jwtdecode = require("jwt-decode");
const Op = Sequelize.Op;
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

//****************** Get All enrolled courses of a logged in user-Student *******************
const getAllStudentCourses = async (req, res) => {
    // console.log("********$Decoded.id=" + decoded.id);

    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);

    const userId = decoded.id;
    try{
        const studentAllCourses = await StudentEnrolledCourses.findAll({
            where : {
                "UserId" : userId
            },
            include: [TutorCourse, {model:User, on: {col1: Sequelize.where(Sequelize.col("TutorCourse.UserId"), "=", Sequelize.col("User.id"))}}, Course,Review]
        });
        //console.log("Student enrolled courses details: " + studentAllCourses);
        console.log("Student enrolled courses details");
        return res.json(new SuccessfulResponse("Student enrolled courses details", studentAllCourses));
    }
    catch (e){
        return res.json(new FailedResponse(e.message));
    }
};

exports.getAllStudentCourses = getAllStudentCourses;

//************* Register Student to the Course ***************

const createStudentCourse = async (req, res) => {
    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);

    let studentCourse = await StudentEnrolledCourses.findOne({
        where: { userId: decoded.id, tutorCourseId: req.body.tutorCourseId },
    });

    // Check if already registered
    if (studentCourse) {
        res.json({
            success: true,
            message: "Student already enrolled in the course",
            records: 0,
            // data: studentCourse,
        });
        return;
    }

    studentCourse = StudentEnrolledCourses.build({
        tutorCourseId: req.body.tutorCourseId,
        userId: decoded.id,
        enrolledStatus: 0,
    });

    await studentCourse.save().catch((e) => {
        console.log(e);
    });

    res.json({
        success: true,
        message: "Student enrolled for the course",
        records: 1,
        data: studentCourse,
    });
};

exports.createStudentCourse = createStudentCourse;

//************* Update enrolled student status - done by tutor ***************
const updateStudentCourse = async (req, res) => {
    let studentCourse = await StudentEnrolledCourses.findOne({
        where: {
            userId: req.body.userId,
            tutorCourseId: req.body.tutorCourseId,
        },
    });

    // Check if already exists
    if (!studentCourse) {
        res.json({
            success: true,
            message: "Student not registered for the Course",
            records: 0,
            // data: studentCourse,
        });
        return;
    }

    studentCourse.update({
        tutorCourseId: req.body.tutorCourseId,
        userId: req.body.userId,
        enrolledStatus: req.body.enrolledStatus, // 1 - Approved, 0- Not Approved
    });

    res.json({
        success: true,
        message: "Student course enrollment status updated successfully",
        //message: "Course '" + course.name + "' successfully updated",
        records: studentCourse.length,
        data: studentCourse,
    });
};
exports.updateStudentCourse = updateStudentCourse;

//************* Delete Student's enrollment from the course ***************

const deleteStudentCourse = async (req, res) => {
    let studentCourse = await StudentEnrolledCourses.findOne({
        where: {
            tutorCourseId: req.body.tutorCourseId,
            userId: req.body.userId,
        },
    });

    // Check if already exists
    if (!studentCourse) {
        res.json({
            success: true,
            message: "Student not registered for the Course",
            records: 0,
            // data: studentCourse,
        });
        return;
    }

    await studentCourse.destroy();

    res.json({
        success: true,
        message: "Student successfully de-registered from the course",
        records: 1,
        data: studentCourse,
    });
};

exports.deleteStudentCourse = deleteStudentCourse;

