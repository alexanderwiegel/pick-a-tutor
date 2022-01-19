const Review = require("../db/model/Review");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");
const jwt = require("jsonwebtoken");
const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const jwtDecode = require("jwt-decode");

exports.getReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({
            include: [
                { model: TutorCourse, include: [Course] },
                { model: User, as: "student" },
                { model: User, as: "tutor" },
            ],
            where: {
                courseId: req.query.courseId,
            },
        });
        res.json(new SuccessfulResponse("Reviews", reviews));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.getReportedReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({
            include: [
                { model: TutorCourse, include: [Course] },
                { model: User, as: "student" },
                { model: User, as: "tutor" },
                { model: User, as: "reporter" },
            ],
            where: {
                reportReview: Review.REPORTED,
            },
        });
        res.json(new SuccessfulResponse("Reported reviews", reviews));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

async function calculateNewRating(courseId) {
    let course = await TutorCourse.findOne({
        where: { id: courseId },
    });
    let reviews = await Review.findAll({
        where: { courseId: courseId },
    });
    let r_sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        r_sum = r_sum + reviews[i].rating;
    }
    course.rating = r_sum / reviews.length;
    await course.save();
    console.log("New rating for course " + courseId + ": " + course.rating);
}

exports.addReview = async (req, res) => {
    try {
        let token = req.headers["authorization"];
        let decoded = jwtDecode(token);
        let review = Review.build({
            reporterId: decoded.id,
            studentId: req.body.studentId,
            tutorId: req.body.tutorId,
            courseId: req.body.courseId,
            rating: req.body.rating,
            ratingComments: req.body.ratingComments,
        });
        await review.save();
        console.log("Created review: " + review);

        await calculateNewRating(req.body.courseId);

        res.json(new SuccessfulResponse("Review created", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.reportReview = async (req, res) => {
    try {
        let review = await Review.findOne({ where: { id: req.params.id } });
        let token = req.headers.authorization.split(" ")[2]; // Bearer Token
        let decodedToken = jwt.verify(token, "privatekey");

        review.reportReview = Review.REPORTED;
        review.reportComments = req.body.reportComments;
        review.reporterId = decodedToken.id;
        await review.save();
        res.json(new SuccessfulResponse("Review reported", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

//************* Approve or Reject Review based on Id and reportReviewStatus" ***************

exports.approveReview = async (req, res) => {
    const review = await Review.findOne({
        where: { id: req.params.id },
    });

    console.log("This is review:" + review);

    if (review) {
        try {
            await review.update({
                studentId: req.body.studentId ?? review.studentId,
                tutorId: req.body.tutorId ?? review.tutorId,
                courseId: req.body.courseId ?? review.courseId,
                rating: req.body.rating ?? review.rating,
                reportReviewStatus: req.body.reportReviewStatus,
            });
            res.json(
                new SuccessfulResponse(
                    "Review id " + review.id + " successfully updated",
                    [review]
                )
            );
        } catch (e) {
            res.json(
                new FailedResponse(
                    "Review id " + review.id + " updation failed" + e
                )
            );
        }
    } else {
        res.json(
            new FailedResponse("No review exists with provided review id")
        );
    }
};

//************* Delete review ***************

exports.deleteReview = async (req, res) => {
    try {
        let review = await Review.findOne({
            where: { id: req.params.id },
        });

        await review.destroy();

        await calculateNewRating(req.body.courseId);

        res.json(
            new SuccessfulResponse("Review successfully deleted", [review])
        );
    } catch (e) {
        return res.json(new FailedResponse(e.message));
    }
};
