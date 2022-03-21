const User = require("../db/model/User");
const Course = require("../db/model/Course");
const Review = require("../db/model/Review");
const TutorCourse = require("../db/model/TutorCourse");
//const search = require("../utils/search");
const { Sequelize } = require("sequelize");
const jwtDecode = require("jwt-decode");
const Op = Sequelize.Op;
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

//****************** Get All Courses of All Tutors OR Get All Courses of Requested Tutor ONLY **************

const getTutorCourses = async (req, res) => {
    var tutorCourses = "";

    if (req.query.tutor_id) {
        tutorCourses = await TutorCourse.findAll({
            where: {
                UserId: req.query.tutor_id,
            },
            include: [Course, User, {model: Review, include: [{model: User, as: "student"}]}],
        });
    } else {
        tutorCourses = await TutorCourse.findAll({
            include: [Course, User, {model: Review, include: [{model: User, as: "student"}]}],
        });
    }
    if (tutorCourses) {
        if (tutorCourses.length == 0) {
            return res.json({
                success: false,
                message: "No courses available yet!",
                //records: courses.length,
                //data: courses,
            });
        } else {
            return res.json({
                success: true,
                message: tutorCourses.length + " courses found",
                records: tutorCourses.length,
                data: tutorCourses,
            });
        }
    } else {
        return res.json({
            success: false,
            message: "No courses available yet",
            //records: courses.length,
            //data: courses,
        });
    }
};

exports.getTutorCourses = getTutorCourses;

//****************** Get All Tutor Courses with filters course_name,price_min,price_max,rating for Homepage **************

const getTutorCoursesHome = async (req, res) => {
    var tutorCourses = "";

    var minPrice = 0;
    var maxPrice = 1000000;
    var rating = 0;
    if (req.query.price_min !== "undefined" && req.query.price_min !== undefined && req.query.price_min !== "") {
        minPrice = req.query.price_min;
    }
    if (req.query.price_max !== "undefined" && req.query.price_max !== undefined && req.query.price_max !== "") {
        maxPrice = req.query.price_max;
    }
    if (req.query.rating !== "undefined" && req.query.rating !== undefined && req.query.rating !== "") {
        rating = req.query.rating;
    }
    tutorCourses = await TutorCourse.findAll({
        where: {
            coursePricePerHour: {
                [Op.between]: [minPrice, maxPrice],
            },

            rating: {
                // [Op.is]: null,
                [Op.gte]: rating,
            },
        },
        include: [
            {
                model: Course,
                where: {
                    name: {
                        [Op.like]: "%" + req.query.course_name + "%",
                    },
                },
            },
            {
                model: User,
            },
            {model: Review, include: [{model: User, as: "student"}]}
        ],
    });

    if (tutorCourses) {
        if (tutorCourses.length == 0) {
            return res.json(new FailedResponse("No courses available yet!"));
        } else {
            return res.json(
                new SuccessfulResponse("Tutor Course found!", tutorCourses)
            );
        }
    } else {
        return res.json(new FailedResponse("No courses available yet!"));
    }
};

exports.getTutorCoursesHome = getTutorCoursesHome;
//************* Create New Tutor's Course ***************

const postTutorCourse = async (req, res) => {
    var courseId = 0;

    var token = req.headers["authorization"];
    var decoded = jwtDecode(token);
    const userId = decoded.id;

    const existingCourse = await Course.findOne({
        //where: search(req.query.search, "id"),
        where: { name: req.body.name },
    });

    if (existingCourse) {
        courseId = existingCourse.id;

        const existingTutorCourse = await TutorCourse.findOne({
            where: {
                [Op.and]: [{ UserId: userId }, { CourseId: courseId }],
            },
            include: [Course, User],
        });
        if (existingTutorCourse) {
            return res.json({
                success: false,
                message: "Course already exists for tutor",
                records: existingTutorCourse.length,
                data: existingTutorCourse,
            });
        }
    } else {
        let course = Course.build({
            name: req.body.name,
            // Since we do not have a description, putting the name of the course in the description
            description: req.body.description,
        });

        await course.save().catch((e) => {
            console.log(e);
        });

        courseId = course.id;
    }

    let tutorCourse = TutorCourse.build({
        UserId: userId,
        CourseId: courseId,
        coursePricePerHour: req.body.coursePricePerHour,
        isFull: req.body.isFull,
        description: req.body.description,
    });

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
    var token = req.headers["authorization"];
    var decoded = jwtDecode(token);
    const userId = decoded.id;

    const existingTutorCourse = await TutorCourse.findOne({
        where: {
            [Op.and]: [{ UserId: userId }, { CourseId: req.params.id }],
        },
        include: [Course, User],
    });

    if (existingTutorCourse) {
        try {
            await existingTutorCourse.update({
                coursePricePerHour: req.body.coursePricePerHour,
                isFull: req.body.isFull,
                description: req.body.description,
            });

            console.log("Tutor Course Updated: " + existingTutorCourse);
            return res.json(
                   new SuccessfulResponse(
                       "Tutor Course " + existingTutorCourse.Course.name + " successfully updated",
                        [existingTutorCourse]
                    )
                );
        } catch (e) {
            return res.json(new FailedResponse(e.message));
        }
    } else {
        return res.json(
            new FailedResponse("Tutor's Course not found or already deleted!")
        );
    }
};
exports.updateTutorCourse = updateTutorCourse;

//************* Delete Existing Tutor's Course ***************

const deleteTutorCourse = async (req, res) => {
    var token = req.headers["authorization"];
    var decoded = jwtDecode(token);
    const userId = decoded.id;

    const existingTutorCourse = await TutorCourse.findOne({
        where: {
            [Op.and]: [{ UserId: userId }, { CourseId: req.params.id }],
        },
        include: [Course, User],
    });

    if (existingTutorCourse) {
        try {
            await existingTutorCourse.destroy();
            console.log(
                "Tutor Course Successfully Updated: " + existingTutorCourse
            );
            res.json(
                new SuccessfulResponse(
                    "Tutor Course " +
                        existingTutorCourse.Course.name +
                        " successfully deleted",
                    [existingTutorCourse]
                )
            );
        } catch (e) {
            return res.json(new FailedResponse(e.message));
        }
    } else {
        return res.json({
            success: false,
            message: "Tutor's Course not found or already deleted",
            //message: "Course '" + course.name + "' successfully updated",
            //records: course.length,
        });
    }
};

exports.deleteTutorCourse = deleteTutorCourse;
