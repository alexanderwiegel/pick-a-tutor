const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const search = require("../utils/search");
// const auth = require("../auth/check-auth");
const { Sequelize } = require("sequelize");
const jwtdecode = require("jwt-decode");
const Op = Sequelize.Op;

//****************** Get All Courses of All Tutors *******************
const getAllCourses = async(req,res) => {

    res.json({
        success: true,
        message: "List of all Courses",
        //records: courses.length,
        //data: courses,
    });

};

//****************** Get All Courses of Requested Tutor ONLY **************
exports.getAllCourses = getAllCourses;

const getTutorCourses = async(req, res) => {

    res.json({
        success: true,
        message: "List of all Tutor Courses",
        //records: courses.length,
        //data: courses,
    });
};

exports.getTutorCourses = getTutorCourses;

//************* Create New Tutor's Course ***************

const postTutorCourse = async(req,res) => {

    res.json({
        success: true,
        message: "Tutor Course Created",
        //records: courses.length,
        //data: courses,
    });
};

exports.postTutorCourse = postTutorCourse;

//************* Update Existing Tutor's Course ***************
const updateTutorCourse = async (req, res) => {
    res.json({
        success: true,
        message: "Tutor's Course successfully updated",
        //message: "Course '" + course.name + "' successfully updated",
        //records: course.length,
    });
};
exports.updateTutorCourse = updateTutorCourse;

//************* Delete Existing Tutor's Course ***************

const deleteTutorCourse = async (req, res) => {
    res.json({
        success: true,
        message: "Tutor's Course successfully deleted",
        //message: "Course '" + course.name + "' successfully deleted",
        //records: course.length,
    });
}

exports.deleteTutorCourse = deleteTutorCourse;