const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const search = require("../utils/search");
const { Sequelize } = require("sequelize");
const jwtDecode = require("jwt-decode");
const Op = Sequelize.Op;

//****************** Get All Courses of All Tutors OR Get All Courses of Requested Tutor ONLY **************

const getTutorCourses = async(req, res) => {

    var tutorCourses = '';

    if(req.query.tutor_id){
        tutorCourses = await TutorCourse.findAll({
            where : {
                "UserId" : req.query.tutor_id
            },
            include: [Course,User]
        });
    }
    else {
        tutorCourses = await TutorCourse.findAll({ include: [Course,User] });
    }
    if(tutorCourses){
        if(tutorCourses.length == 0){
            return res.json({
                success: false,
                message: "No courses available yet!",
                //records: courses.length,
                //data: courses,
            });
        }
        else {
            return res.json({
                success: true,
                message: tutorCourses.length + " courses found",
                records: tutorCourses.length,
                data: tutorCourses,
            });
        }

    }
    else {
        return res.json({
            success: false,
            message: "No courses available yet",
            //records: courses.length,
            //data: courses,
        });
    }
};

exports.getTutorCourses = getTutorCourses;

//************* Create New Tutor's Course ***************

const postTutorCourse = async(req,res) => {

    var courseId = 0;

    var token = req.headers["authorization"];
    var decoded = jwtDecode(token);
    const userId = decoded.id;

    const existingCourse = await Course.findOne({
        //where: search(req.query.search, "id"),
        where: {"name": req.body.name},
    });

    if (existingCourse){
        courseId = existingCourse.id;
/*
        res.json({
            success: true,
            message: "Course exists",
            records: existingCourse.length,
            data: existingCourse,
        });
*/
        const existingTutorCourse = await TutorCourse.findOne({
            where: {
                [Op.and] : [
                    {"UserId": userId},
                    {"CourseId": courseId},
                ]
            },
            include: [Course,User]
        });
        if(existingTutorCourse){
            return res.json({
                success: false,
                message: "Course already exists for tutor",
                records: existingTutorCourse.length,
                data: existingTutorCourse,
            });
        }
    }
    else {
        let course = Course.build({
            name: req.body.name,
            // Since we do not have a description, putting the name of the course in the description
            description: req.body.name,
        });

        await course.save().catch((e) => {
            console.log(e);
        });

        courseId = course.id;
    }
/*
    res.json({
        success: true,
        message: "Test",
        data: "courseId: " + courseId,
    });
*/
    let tutorCourse = TutorCourse.build({
        UserId: userId,
        CourseId: courseId,
        coursePricePerHour: req.body.coursePricePerHour,
        isFull: 0
    });
/*
    res.json({
        success: true,
        message: "Test",
        data: tutorCourse,
    });
*/
    await tutorCourse.save().catch((e) => {
        console.log(e);
    });

    return res.json({
        success: true,
        message: "Tutor Course " + req.body.name + " Created",
        records: tutorCourse.length,
        data: tutorCourse,
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